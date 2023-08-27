import useDaumPostcode from "@/hooks/useDaumPostcode";
import React from "react";

export default function DaumPostcode() {
  const { open } = useDaumPostcode({
    onComplete: console.log,
    onFail: () => console.error("error"),
  });

  function onClick() {
    open();
  }

  return (
    <button type='button' onClick={onClick}>
      DaumPostcode 열기
    </button>
  );
}
