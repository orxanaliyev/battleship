import React from "react";
import Playground from "./components/Playground/Playground";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Playground />
    </ErrorBoundary>
  );
};

export default App;
