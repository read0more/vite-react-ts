import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from "./routes/Root";
// import Names from "./routes/Names";
// import Sort from "./routes/Sort";
// import FormForTest from "./routes/FormForTest";

const Root = lazy(() => import("./routes/Root"));
const Names = lazy(() => import("./routes/Names"));
const Sort = lazy(() => import("./routes/Sort"));
const FormForTest = lazy(() => import("./routes/FormForTest"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/names",
    element: <Names />,
  },
  {
    path: "/sort",
    element: <Sort />,
  },
  {
    path: "/test-tutorial",
    element: <FormForTest />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
