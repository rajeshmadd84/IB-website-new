import type { ReactNode } from "react";

export function B2Mark() {
  return <span className="ib-b2">B<sub>2</sub></span>;
}

export function formatB2(text: string): ReactNode {
  const parts = text.split("B₂");
  return (
    <span className="ib-b2-text">
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <B2Mark />}
          {part}
        </span>
      ))}
    </span>
  );
}
