import React from "react";
import styles from "./style.module.css";

interface Pointer {
  index: number;
  label: string;
  color: string;
  position: "TOP" | "BOTTOM";
}

interface ArrayPointersProps {
  data: (string | number)[];
  pointers?: Pointer[];
  renderOutOfBoundCell?: boolean;
}

export default function ArrayPointers({
  data,
  pointers = [],
  renderOutOfBoundCell = false,
}: ArrayPointersProps) {
  const getPointersAt = (index: number, position: "TOP" | "BOTTOM") => {
    return pointers.filter((p) => p.index === index && p.position === position);
  };

  const extendedLength = data.length + (renderOutOfBoundCell ? 1 : 0);

  return (
    <div className={styles.container}>
      {/* Top pointers */}
      <div className={styles.pointerRow}>
        {Array.from({ length: extendedLength }).map((_, idx) => (
          <div key={`top-${idx}`} className={styles.pointerCell}>
            {getPointersAt(idx, "TOP").map((pointer, i) => (
              <div
                key={i}
                className={styles.pointerLabel}
                style={{ backgroundColor: pointer.color }}
              >
                {pointer.label}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Data cells */}
      <div className={styles.dataRow}>
        {data.map((item, idx) => (
          <div key={idx} className={styles.dataCell}>
            {item}
          </div>
        ))}
        {renderOutOfBoundCell && (
          <div key="out-of-bounds" className={styles.dataCell}>
            —
          </div>
        )}
      </div>

      {/* Bottom pointers */}
      <div className={styles.pointerRow}>
        {Array.from({ length: extendedLength }).map((_, idx) => (
          <div key={`bottom-${idx}`} className={styles.pointerCell}>
            {getPointersAt(idx, "BOTTOM").map((pointer, i) => (
              <div
                key={i}
                className={styles.pointerLabel}
                style={{ backgroundColor: pointer.color }}
              >
                {pointer.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
