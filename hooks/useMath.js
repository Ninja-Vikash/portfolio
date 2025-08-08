import { useMemo } from "react";

export function useMath() {
  const math = useMemo(() => ({
    isOdd: (value) => value % 2 !== 0,
    isEven: (value) => value % 2 === 0,
  }), [])

  return { math }
}