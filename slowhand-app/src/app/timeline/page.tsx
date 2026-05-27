"use client";

import { useMemo, useState } from "react";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { TIMELINE } from "@/lib/timeline";

const KIND_COLOR: Record<string, string> = {
  life: "#1f3a8a",
  music: "#b07a2c",
  loss: "#7a1f2b",
};
const KIND_LABEL: Record<string, string> = {
  life: "Life",
  music: "Music",
  loss: "Loss",
};

// Band eras on the ribbon — start/end years and accent color.
const ERAS = [
  { name: "Yardbirds",      start: 1963, end: 1965, color: "#1f3a8a" },
  { name: "Bluesbreakers",  start: 1965, end: 1966, color: "#b07a2c" },
  { name: "Cream",          start: 1966, end: 1968, color: "#7a1f2b" },
  { name: "Blind Faith",    start: 1969, end: 1969, color: "#0f7438" },
  { name: "Dominos",        start: 1970, end: 1971, color: "#a78bfa" },
  { name: "Solo",           start: 1970, end: 2024, color: "#ff6b35" },
];

const MIN_YEAR = 1945;
const MAX_YEAR = 2024;
const SVG_W = 1100;
const SVG_H = 220;
const PAD_X = 40;
const PAD_TOP = 24;
const AXIS_Y = SVG_H - 38;
const ERA_TOP = PAD_TOP + 8;
const ERA_GAP = 4;
const ERA_HEIGHT = 18;

function x(year: number) {
  const t = (year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR);
  return PAD_X + t * (SVG_W - PAD_X * 2);
}

const DECADE_LABELS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

export default function TimelinePage() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const events = useMemo(() => TIMELINE.map((t, i) => ({ ...t, year: Number(t.year), idx: i })), []);
  const hovered = hoverIdx === null ? null : events[hoverIdx];

  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Year by year</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          TIMELINE<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          80 years on one ribbon. Hover any dot to see the moment; the colored bands below the axis show which band he was in when.
        </p>

        <hr className="hr-rule" />

        {/* Visual ribbon */}
        <div className="bg-paper_2/30 border border-paper_3/60 rounded p-4 overflow-x-auto">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="block w-full min-w-[760px] h-auto">
            {/* Era bands — stacked below the axis */}
            {ERAS.map((era, ei) => {
              const yPos = AXIS_Y + 8 + ei * (ERA_HEIGHT + ERA_GAP - 16);
              return (
                <g key={era.name}>
                  <rect
                    x={x(era.start)}
                    y={ERA_TOP + ei * (ERA_HEIGHT + ERA_GAP)}
                    width={Math.max(2, x(era.end) - x(era.start) + (era.start === era.end ? 6 : 0))}
                    height={ERA_HEIGHT}
                    fill={era.color}
                    opacity={0.72}
                    rx={2}
                  />
                  <text
                    x={x(era.start) + 6}
                    y={ERA_TOP + ei * (ERA_HEIGHT + ERA_GAP) + ERA_HEIGHT - 5}
                    fontFamily="'JetBrains Mono', monospace"
                    fontSize={9.5}
                    fill="#fffaf3"
                    letterSpacing="0.12em"
                  >
                    {era.name.toUpperCase()}
                  </text>
                </g>
              );
            })}

            {/* Axis line */}
            <line
              x1={PAD_X}
              y1={AXIS_Y}
              x2={SVG_W - PAD_X}
              y2={AXIS_Y}
              stroke="#0e1830"
              strokeWidth={1.2}
            />

            {/* Decade ticks + labels */}
            {DECADE_LABELS.map((d) => (
              <g key={d}>
                <line
                  x1={x(d)}
                  y1={AXIS_Y - 4}
                  x2={x(d)}
                  y2={AXIS_Y + 4}
                  stroke="#0e1830"
                  strokeWidth={1}
                />
                <text
                  x={x(d)}
                  y={AXIS_Y + 18}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize={11}
                  fill="#404a66"
                  letterSpacing="0.1em"
                >
                  {d}
                </text>
              </g>
            ))}

            {/* Event dots above the axis */}
            {events.map((e) => {
              const kind = e.kind ?? "music";
              const color = KIND_COLOR[kind];
              const isHover = hoverIdx === e.idx;
              const r = isHover ? 8 : 5;
              return (
                <g key={e.idx}>
                  <line
                    x1={x(e.year)}
                    y1={AXIS_Y - 4}
                    x2={x(e.year)}
                    y2={AXIS_Y - 32}
                    stroke={color}
                    strokeWidth={isHover ? 1.4 : 0.8}
                    opacity={isHover ? 0.9 : 0.35}
                  />
                  <circle
                    cx={x(e.year)}
                    cy={AXIS_Y - 36}
                    r={r}
                    fill={color}
                    stroke="#fffaf3"
                    strokeWidth={2}
                    onMouseEnter={() => setHoverIdx(e.idx)}
                    onMouseLeave={() => setHoverIdx(null)}
                    style={{ cursor: "pointer", transition: "r 0.12s" }}
                  />
                </g>
              );
            })}

            {/* Tooltip box for hovered event */}
            {hovered && (() => {
              const cx = x(hovered.year);
              const tooltipWidth = 280;
              const tooltipX = Math.min(SVG_W - PAD_X - tooltipWidth, Math.max(PAD_X, cx - tooltipWidth / 2));
              const tooltipY = 6;
              return (
                <g>
                  <rect
                    x={tooltipX}
                    y={tooltipY}
                    width={tooltipWidth}
                    height={56}
                    rx={3}
                    fill="#fffaf3"
                    stroke={KIND_COLOR[hovered.kind ?? "music"]}
                    strokeWidth={1.5}
                  />
                  <text
                    x={tooltipX + 10}
                    y={tooltipY + 18}
                    fontFamily="'Anton', sans-serif"
                    fontSize={15}
                    fill="#0e1830"
                  >
                    {hovered.year} — {hovered.event.length > 36 ? hovered.event.slice(0, 35) + "…" : hovered.event}
                  </text>
                  <text
                    x={tooltipX + 10}
                    y={tooltipY + 38}
                    fontFamily="'Fraunces', serif"
                    fontSize={10.5}
                    fill="#404a66"
                  >
                    <tspan>{hovered.context.length > 60 ? hovered.context.slice(0, 58) + "…" : hovered.context}</tspan>
                  </text>
                  <text
                    x={tooltipX + 10}
                    y={tooltipY + 51}
                    fontFamily="'JetBrains Mono', monospace"
                    fontSize={8.5}
                    fill={KIND_COLOR[hovered.kind ?? "music"]}
                    letterSpacing="0.18em"
                  >
                    {KIND_LABEL[hovered.kind ?? "music"].toUpperCase()}
                  </text>
                </g>
              );
            })()}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-3 mono text-[10px] uppercase tracking-[0.16em] text-slate">
            <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#1f3a8a" }}></span> Life</span>
            <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#b07a2c" }}></span> Music</span>
            <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#7a1f2b" }}></span> Loss</span>
            <span className="ml-auto text-ash italic">{events.length} entries · hover dots for detail</span>
          </div>
        </div>

        <hr className="hr-rule" />

        {/* Detailed list — grouped by decade with big display headers */}
        <div className="space-y-12">
          {DECADE_LABELS.map((decadeStart) => {
            const decadeEnd = decadeStart + 9;
            const inDecade = events.filter((e) => e.year >= decadeStart && e.year <= decadeEnd);
            // Also include 1945-1949 in the 1950 section (folded into "The 40s & 50s")
            const isFirst = decadeStart === 1950;
            const extras = isFirst ? events.filter((e) => e.year < 1950) : [];
            const all = [...extras, ...inDecade];
            if (all.length === 0) return null;
            return (
              <section key={decadeStart}>
                <h2 className="display text-ink text-[44px] sm:text-[64px] leading-none mb-4">
                  {isFirst ? "FORTIES & FIFTIES" : `THE ${labelFor(decadeStart)}`}
                  <span className="text-whiskey">.</span>
                </h2>
                <ol className="relative">
                  <span aria-hidden className="absolute left-[78px] sm:left-[110px] top-2 bottom-2 w-px bg-paper_3/70" />
                  {all.map((t) => {
                    const kind = t.kind ?? "music";
                    const color = KIND_COLOR[kind];
                    return (
                      <li key={t.year + t.event} className="relative grid grid-cols-[64px_24px_1fr] sm:grid-cols-[96px_28px_1fr] gap-3 sm:gap-5 pb-6 last:pb-0">
                        <div className="text-right">
                          <p className="display text-ink text-[24px] sm:text-[30px] leading-none">{t.year}</p>
                          <p className="mono text-[9px] uppercase tracking-[0.22em] mt-1" style={{ color }}>
                            {KIND_LABEL[kind]}
                          </p>
                        </div>
                        <div className="relative pt-2">
                          <span aria-hidden className="absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-paper" style={{ background: color }} />
                        </div>
                        <div className="pt-0.5 pb-1">
                          <h3 className="display text-ink text-[20px] sm:text-[22px] leading-tight tracking-tight">{t.event}</h3>
                          <p className="serif text-ink_2 text-[14px] mt-1.5 leading-relaxed max-w-2xl">{t.context}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

function labelFor(decadeStart: number) {
  const m: Record<number, string> = {
    1960: "SIXTIES",
    1970: "SEVENTIES",
    1980: "EIGHTIES",
    1990: "NINETIES",
    2000: "AUGHTS",
    2010: "TENS",
    2020: "TWENTIES",
  };
  return m[decadeStart] ?? `${decadeStart}s`;
}
