import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styled from "styled-components";
import { YourBooksProvider } from "./hooks/useYourBooks.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/ErrorFallback.tsx";

const Body = styled.main`
  max-width: 1160px;
  margin: 0 auto;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <YourBooksProvider>
        <Body>
          <App />
        </Body>
      </YourBooksProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
