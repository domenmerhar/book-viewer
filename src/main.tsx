import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styled from "styled-components";
import { YourBooksProvider } from "./hooks/useYourBooks.tsx";

const Body = styled.main`
  max-width: 1160px;
  margin: 0 auto;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YourBooksProvider>
      <Body>
        <App />
      </Body>
    </YourBooksProvider>
  </React.StrictMode>
);
