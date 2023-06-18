import React, { Suspense } from "react";

let status = "pending";
let result: any;

const data = fetchSomthing();

const Test = () => {
  // No need for loading states
  const result = data();
  return <div>{result}</div>;
};

function fetchSomthing() {
  const fetching = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  })
    .then((res) => {
      status = "fulfilled";
      result = res;
    })
    .catch((error) => {
      status = "rejected";
      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching; // Suspend(A way to tell React data is still fetching)
    } else if (status === "rejected") {
      throw result; // Result is an error
    } else if (status === "fulfilled") {
      return result; // Result is a fulfilled promise
    }
  };
}

export default function SuspenseTest() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Test />
    </Suspense>
  );
}
