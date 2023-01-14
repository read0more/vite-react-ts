import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function LayoutEffect() {
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (!inputRef.current) return;

    console.log('in layout effect: ', inputRef.current.value);
  }, []);

  useEffect(() => {
    if (!inputRef.current) return;
    
    console.log('in effect: ', inputRef.current.value);
    inputRef.current.value = "SECOND";

  }, []);

  return <input ref={inputRef} value="FIRST"></input>;
}
