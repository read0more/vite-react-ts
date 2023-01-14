import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ButtonHandle {
  toggle: () => void;
};

interface Props {

}

const Button = forwardRef<ButtonHandle, Props>((props, ref) => {
  const [toggle, setToggle] = useState(false);
  
  useImperativeHandle(ref, () => ({
    toggle: () => setToggle(!toggle),
  }));
  
  return <>
    <button onClick={() => setToggle(!toggle)}>child button</button>
    {toggle && 'clicked button'}
  </>;
});

export default function ImperativeHandle() {
  const ref = useRef<ButtonHandle>(null);
  return (
    <>
      <button onClick={() => ref.current!.toggle()}>parent button</button>
      <Button ref={ref} />
    </>
  );
}
