import { useRef, useState, useEffect, useLayoutEffect } from "react";
import styles from "./Textareas.module.scss";

export default function Textareas() {
  const [a, setA] = useState("");
  const aRef = useRef<HTMLTextAreaElement>(null);
  const bRef = useRef<HTMLTextAreaElement>(null);

  function onInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setA(e.target.value);
  }

  function send() {
    // 왜인지 simulator에서는 focus 와리가리를 해도 ios의 input buffer가 초기화되지 않아서 한글 이슈가 발생한다.
    setA("");
    bRef.current?.focus();
    aRef.current?.focus();
  }

  function onChange(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className={styles.wrapper}>
      <textarea value={a} onChange={onInput} onKeyDown={onChange} ref={aRef} />
      <textarea ref={bRef} />
      <button type='button' onClick={send}>
        Send
      </button>
    </div>
  );
}
