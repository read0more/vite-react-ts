import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ImperativeHandle from "./routes/basicHooks/ImperetiveHandle";
import LayoutEffect from "./routes/basicHooks/LayoutEffect";
import TransitionAndDeferredValue from "./routes/basicHooks/TransitionAndDeferredValue";
import Redux from "./routes/redux";
import { store } from "./routes/redux/store";
import { Provider } from "react-redux";
// import Root from "./routes/Root";
// import Names from "./routes/Names";
// import Sort from "./routes/Sort";
// import FormForTest from "./routes/FormForTest";

const Root = lazy(() => import("./routes/basicHooks/Root"));
const Names = lazy(() => import("./routes/basicHooks/Names"));
const Sort = lazy(() => import("./routes/basicHooks/Sort"));
const FormForTest = lazy(() => import("./routes/basicHooks/FormForTest"));
const Timer = lazy(() => import("./routes/basicHooks/Timer"));
const Ref = lazy(() => import("./routes/basicHooks/Ref"));
const Context = lazy(() => import("./routes/basicHooks/Context"));

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
  },
  {
    path: "/test-tutorial",
    element: <FormForTest />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/ref",
    element: <Ref />,
  },
  {
    path: "/context",
    element: <Context />,
  },
  {
    path: "/transition-and-deferred-value",
    element: <TransitionAndDeferredValue />,
  },
  {
    path: "/layout-effect",
    element: <LayoutEffect />,
  },
  {
    path: "/imperative-handle",
    element: <ImperativeHandle />,
  },
  {
    path: "/redux",
    element: <Redux />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
