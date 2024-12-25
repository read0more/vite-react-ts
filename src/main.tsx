import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ImperativeHandle from "./routes/basicHooks/ImperetiveHandle";
import LayoutEffect from "./routes/basicHooks/LayoutEffect";
import TransitionAndDeferredValue from "./routes/basicHooks/TransitionAndDeferredValue";
import { store } from "./routes/redux/store";
import Redux from "./routes/redux";
import { Provider } from "react-redux";
import Root from "./routes/Root";
import Names from "./routes/basicHooks/Names";
import Sort from "./routes/basicHooks/Sort";
import FormForTest from "./routes/basicHooks/FormForTest";
import Timer from "./routes/basicHooks/Timer";
import Ref from "./routes/basicHooks/Ref";
import Context from "./routes/basicHooks/Context";
import Compound from "./routes/practice/Compound";
import SuspenseTest from "./routes/practice/SuspenseTest";
import DaumPostcode from "./routes/practice/DaumPostcode";
import ReactHookForm from "./routes/practice/ReactHookForm";
import "./assets/index.css";
import UseForm from "./routes/practice/UseForm";
import Textareas from "./routes/Textareas";

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
    path: "/compound",
    element: <Compound />,
  },
  {
    path: "/redux",
    element: <Redux />,
  },
  {
    path: "/suspense",
    element: <SuspenseTest />,
  },
  {
    path: "daum-postcode",
    element: <DaumPostcode />,
  },
  {
    path: "react-hook-form",
    element: <ReactHookForm />,
  },
  {
    path: "use-form",
    element: <UseForm />,
  },
  {
    path: "ios-bug-textareas",
    element: <Textareas />,
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
