import { CSSProperties } from "react";
import { Link } from "react-router-dom";

export default function Root() {
  const rootMenuStyle: CSSProperties = {
    cursor: "pointer",
    display: "inline",
    fontWeight: "bold",
  };

  return (
    <>
    <details style={rootMenuStyle}>
      <summary>React Hooks</summary>
      <ul>
        <li>
          <Link to={`names`}>About useReducer</Link>
        </li>
        <li>
          <Link to={`sort`}>About useCallback, useMemo</Link>
        </li>
        <li>
          <Link to={`test-tutorial`}>react-testing-library</Link>
        </li>
        <li>
          <Link to={`timer`}>Timer with useEffect</Link>
        </li>
        <li>
          <Link to={`ref`}>useRef with new ID and focus input</Link>
        </li>
        <li>
          <Link to={`context`}>useContext</Link>
        </li>
        <li>
          <Link to={`transition-and-deferred-value`}>
            useTransition and useDeferredValue
          </Link>
        </li>
        <li>
          <Link to={`layout-effect`}>useLayoutEffect</Link>
        </li>
        <li>
          <Link to={`imperative-handle`}>useImperativeHandle</Link>
        </li>
      </ul>
    </details>
    <details style={rootMenuStyle}>
      <summary>Etc</summary>
      <ul>
        <li>
          <Link to={`redux`}>Redux Toolkit</Link>
        </li>
        <li>
          <Link to={`compound`}>Compound Component Pattern</Link>
        </li>
      </ul>
    </details>
    </>
  );
}
