// Visual tuning strip — 6 strings drawn as a tiny guitar headstock view.
// Parses the song's tuning field (free text) and renders strings + capo + key.

type Parsed = { strings: string[]; key?: string; capo?: number; isOpen?: boolean };

const STANDARD = ["E", "A", "D", "G", "B", "E"];

export function parseTuning(s?: string): Parsed {
  if (!s) return { strings: STANDARD };
  const lower = s.toLowerCase();
  let strings = STANDARD;
  let isOpen = false;
  if (lower.includes("open g")) { strings = ["D", "G", "D", "G", "B", "D"]; isOpen = true; }
  else if (lower.includes("open d")) { strings = ["D", "A", "D", "F♯", "A", "D"]; isOpen = true; }
  else if (lower.includes("open e")) { strings = ["E", "B", "E", "G♯", "B", "E"]; isOpen = true; }
  else if (lower.includes("drop d")) { strings = ["D", "A", "D", "G", "B", "E"]; }

  const capoMatch = lower.match(/capo\s*(\d+)/);
  const capo = capoMatch ? parseInt(capoMatch[1], 10) : undefined;

  // Try to pull the key — "key of D minor" or "key of E"
  const keyMatch = s.match(/key of ([A-G][♯♭#b]?(?:\s+(?:minor|major))?)/i);
  let key = keyMatch ? keyMatch[1] : undefined;
  if (key) {
    key = key.replace(/\bminor\b/i, "m").replace(/\bmajor\b/i, "").trim();
    key = key.replace(/#/g, "♯").replace(/b/g, "♭");
  }

  return { strings, key, capo, isOpen };
}

export default function TuningStrip({ tuning }: { tuning?: string }) {
  const { strings, key, capo, isOpen } = parseTuning(tuning);

  // SVG layout: 6 strings, vertical
  const W = 140;
  const H = 96;
  const padX = 16;
  const padTop = 18;
  const padBottom = 14;
  const stringW = (W - padX * 2) / 5;
  const stringTop = padTop;
  const stringBottom = H - padBottom;

  return (
    <div className="inline-flex items-center gap-3">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} aria-label="Tuning diagram">
        {/* Headstock background hint */}
        <rect x={padX - 6} y={padTop - 8} width={W - (padX - 6) * 2} height={H - padTop - padBottom + 16} fill="#ede4cc" stroke="#c8b994" strokeWidth={0.5} rx={2} />

        {/* Six strings */}
        {strings.map((note, i) => {
          const x = padX + i * stringW;
          const isMod = STANDARD[i] !== note;
          return (
            <g key={i}>
              <line
                x1={x}
                y1={stringTop}
                x2={x}
                y2={stringBottom}
                stroke={isMod ? "#7a1f2b" : "#0e1830"}
                strokeWidth={i < 2 ? 1.4 : i < 4 ? 1.1 : 0.8}
                opacity={0.85}
              />
              <text
                x={x}
                y={padTop - 4}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={9}
                fill={isMod ? "#7a1f2b" : "#0e1830"}
                fontWeight={isMod ? 700 : 500}
              >
                {note}
              </text>
            </g>
          );
        })}

        {/* Capo bar */}
        {capo && (() => {
          // Position roughly proportional to fret — 1-12 across 70% of vertical space
          const fretSpan = stringBottom - stringTop;
          const y = stringTop + (capo / 12) * fretSpan * 0.65;
          return (
            <g>
              <rect
                x={padX - 6}
                y={y - 3}
                width={(strings.length - 1) * stringW + 12}
                height={6}
                fill="#b07a2c"
                opacity={0.85}
                rx={1}
              />
              <text
                x={W - padX + 4}
                y={y + 3}
                fontFamily="'JetBrains Mono', monospace"
                fontSize={8.5}
                fill="#b07a2c"
              >
                {capo}
              </text>
            </g>
          );
        })()}

        {/* Bottom label: STD / OPEN G / etc. */}
        <text
          x={W / 2}
          y={H - 3}
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize={8.5}
          letterSpacing="0.18em"
          fill={isOpen ? "#7a1f2b" : "#404a66"}
        >
          {isOpen
            ? "OPEN TUNING"
            : strings[0] === "D" && strings[1] === "A"
              ? "DROP D"
              : "STANDARD"}
        </text>
      </svg>

      {/* Key badge */}
      {key && (
        <div className="flex flex-col items-center justify-center w-14 h-14 rounded border border-paper_3/60 bg-paper">
          <span className="mono text-[8.5px] uppercase tracking-[0.16em] text-ash">Key</span>
          <span className="display text-ink text-[22px] leading-none mt-0.5">{key}</span>
        </div>
      )}
    </div>
  );
}
