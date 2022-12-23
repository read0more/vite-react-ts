import React, { useMemo } from "react";

export default function SortedList({
  list,
  sortFunc,
}: {
  list: string[];
  sortFunc: (a: string, b: string) => number;
}) {
  const soretedList = useMemo(() => {
    console.count("sort...");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{soretedList.join(", ")}</div>;
}
