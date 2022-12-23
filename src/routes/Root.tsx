import { Link } from "react-router-dom";

export default function Root() {
  return (
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
    </ul>
  );
}
