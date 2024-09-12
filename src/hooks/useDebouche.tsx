import { useEffect, useState } from "react";

interface Props {
  value: string;
  delay?: number;
}

export function useDebouche({ value: value, delay = 5000 }: Props) {
  const [deboucheValue, setDeboucheValue] = useState(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const time = setTimeout(() => {
      setDeboucheValue(value);
      setLoading(false);
    }, delay);
    return () => clearTimeout(time);
  }, [value, delay]);

  return { deboucheValue, loading };
}
