import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/books" replace={true} />} />
          <Route path="/books" element={<p>books</p>} />
          <Route path="/books/:id" element={<p>/books/:id</p>} />
          <Route path="/your-books" element={<p>/your-books</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
