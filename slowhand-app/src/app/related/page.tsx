"use client";

import { useMemo, useState } from "react";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { BANDS } from "@/lib/bands";
import { COLLABORATORS } from "@/lib/collaborators";

// Graph: Clapton at center, bands in inner ring, musicians around each band.
// Members are pulled from BANDS.members; non-band collaborators (Pattie,
// Tom Dowd, Glyn Johns, Wynton Marsalis, etc.) are connected to Clapton directly.

type Node = {
  id: string;
  label: string;
  kind: "center" | "band" | "person";
  x: number;
  y: number;
  bandSlug?: string;        // for people: which band(s) they belong to
  bandSlugs?: string[];     // multi-band members
};
type Edge = { a: string; b: string; kind: "band" | "member" };

const ACCENTS = ["#1f3a8a", "#b07a2c", "#7a1f2b", "#0f7438", "#4dd0ff", "#a78bfa", "#ff6b35"];

function buildGraph(width: number, height: number) {
  const cx = width / 2;
  const cy = height / 2;

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Center: Clapton
  nodes.push({ id: "clapton", label: "Eric Clapton", kind: "center", x: cx, y: cy });

  // Bands evenly around the center
  const bandRadius = 240;
  const bandAngleStep = (Math.PI * 2) / BANDS.length;
  // Start at the top
  const startAngle = -Math.PI / 2;

  // Track which band each person belongs to (so we can de-dupe and draw multi-band edges)
  const personBands = new Map<string, string[]>();

  BANDS.forEach((band, i) => {
    const a = startAngle + i * bandAngleStep;
    const bx = cx + Math.cos(a) * bandRadius;
    const by = cy + Math.sin(a) * bandRadius;
    nodes.push({ id: `band-${band.slug}`, label: band.name, kind: "band", x: bx, y: by, bandSlug: band.slug });
    edges.push({ a: "clapton", b: `band-${band.slug}`, kind: "band" });

    // People around this band — fan outward
    const members = band.members;
    members.forEach((memberRaw) => {
      // Strip parenthetical roles like "(sessions)"
      const member = memberRaw.replace(/\s*\([^)]+\)\s*$/, "");
      const id = `p-${slug(member)}`;
      const existing = personBands.get(id);
      if (existing) {
        existing.push(band.slug);
        edges.push({ a: id, b: `band-${band.slug}`, kind: "member" });
        return;
      }
      personBands.set(id, [band.slug]);
      // Position member on a small arc OUTSIDE the band node, away from center
      const memberCount = members.length;
      const memberArcSpan = Math.PI * 0.55;
      const memberArcStart = a - memberArcSpan / 2;
      const memberIdx = members.indexOf(memberRaw);
      const memberAngle = memberArcStart + (memberArcSpan * memberIdx) / Math.max(1, memberCount - 1);
      const memberRadius = bandRadius + 130 + (memberIdx % 2) * 30;
      const mx = cx + Math.cos(memberAngle) * memberRadius;
      const my = cy + Math.sin(memberAngle) * memberRadius;
      nodes.push({
        id,
        label: member,
        kind: "person",
        x: mx,
        y: my,
        bandSlug: band.slug,
      });
      edges.push({ a: id, b: `band-${band.slug}`, kind: "member" });
    });
  });

  // Update bandSlugs[] on each person node so click-highlight knows all their bands
  for (const n of nodes) {
    if (n.kind === "person") {
      n.bandSlugs = personBands.get(n.id) ?? [];
    }
  }

  return { nodes, edges };
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const WIDTH = 1100;
const HEIGHT = 900;

export default function RelatedPage() {
  const { nodes, edges } = useMemo(() => buildGraph(WIDTH, HEIGHT), []);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeId = hoverId ?? selectedId;

  // Compute highlight set
  const highlighted = useMemo(() => {
    if (!activeId) return null;
    const node = nodes.find((n) => n.id === activeId);
    if (!node) return null;
    const ids = new Set<string>([activeId]);

    if (node.kind === "center") {
      // Light up everything connected
      for (const e of edges) { ids.add(e.a); ids.add(e.b); }
    } else if (node.kind === "band") {
      // Light up Clapton + all members of this band
      ids.add("clapton");
      for (const e of edges) {
        if (e.b === activeId) ids.add(e.a);
        if (e.a === activeId) ids.add(e.b);
      }
    } else if (node.kind === "person") {
      // Light up all bands this person is in + Clapton
      ids.add("clapton");
      const bands = node.bandSlugs ?? [];
      for (const s of bands) ids.add(`band-${s}`);
    }
    return ids;
  }, [activeId, nodes, edges]);

  const isHighlighted = (id: string) => !highlighted || highlighted.has(id);
  const isDimmed     = (id: string) => highlighted !== null && !highlighted.has(id);

  const accentForBand = (bandSlug: string) => {
    const idx = BANDS.findIndex((b) => b.slug === bandSlug);
    return ACCENTS[idx % ACCENTS.length] ?? "#1f3a8a";
  };

  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Connected</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          THE WEB<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          Every band Clapton played in and the musicians he played them with — drawn as a graph. Click any node to see what it touches: a band lights up its members; a musician lights up the bands they played in.
        </p>
        <p className="serif text-slate text-[14px] max-w-3xl mt-2 italic">
          {nodes.filter((n) => n.kind === "person").length} musicians across {BANDS.length} bands. Some played in more than one — Ginger Baker in Cream and Blind Faith; Bobby Whitlock, Carl Radle, and Jim Gordon in Delaney &amp; Bonnie and the Dominos.
        </p>

        <hr className="hr-rule" />

        <div className="relative bg-paper_2/30 border border-paper_3/60 rounded overflow-hidden">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="block w-full h-auto"
            onClick={() => setSelectedId(null)}
          >
            {/* Edges */}
            {edges.map((e, i) => {
              const a = nodes.find((n) => n.id === e.a)!;
              const b = nodes.find((n) => n.id === e.b)!;
              const dim = highlighted !== null && (!highlighted.has(e.a) || !highlighted.has(e.b));
              const bandSlug = e.kind === "band"
                ? (b.bandSlug ?? a.bandSlug ?? "")
                : (a.bandSlug ?? b.bandSlug ?? "");
              const stroke = accentForBand(bandSlug);
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={stroke}
                  strokeWidth={e.kind === "band" ? 2 : 1}
                  opacity={dim ? 0.05 : (e.kind === "band" ? 0.55 : 0.32)}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((n) => {
              const dimmed = isDimmed(n.id);
              const fill = n.kind === "center"
                ? "#0e1830"
                : n.kind === "band"
                ? accentForBand(n.bandSlug ?? "")
                : "#fffaf3";
              const stroke = n.kind === "person"
                ? accentForBand(n.bandSlug ?? "")
                : "none";
              const r = n.kind === "center" ? 28 : n.kind === "band" ? 16 : 6;
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHoverId(n.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={(ev) => { ev.stopPropagation(); setSelectedId(n.id === selectedId ? null : n.id); }}
                  style={{ cursor: "pointer", opacity: dimmed ? 0.25 : 1, transition: "opacity 0.15s" }}
                >
                  <circle cx={n.x} cy={n.y} r={r} fill={fill} stroke={stroke} strokeWidth={2} />
                  {(n.kind === "center" || n.kind === "band" || isHighlighted(n.id)) && (
                    <text
                      x={n.x}
                      y={n.y + (n.kind === "center" ? 48 : n.kind === "band" ? 30 : 18)}
                      textAnchor="middle"
                      fontFamily="'Anton', sans-serif"
                      fontSize={n.kind === "center" ? 22 : n.kind === "band" ? 16 : 12}
                      fill="#0e1830"
                      style={{ pointerEvents: "none" }}
                    >
                      {n.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="absolute top-3 right-3 bg-paper/95 border border-paper_3/60 rounded px-3 py-2 mono text-[10px] uppercase tracking-[0.16em] text-slate space-y-1">
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-ink"></span> Eric Clapton</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full" style={{ background: "#1f3a8a" }}></span> Band</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-paper border border-paper_3"></span> Musician</div>
            <div className="text-ash pt-1">Click a node to lock highlight</div>
          </div>
        </div>

        <p className="serif text-slate text-[13px] mt-4 italic">
          Tip: hover any musician to see which bands they played in. Click to lock the highlight. Click empty space to reset.
        </p>
      </main>
      <Footer />
    </>
  );
}
