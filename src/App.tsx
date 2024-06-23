import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Layout } from "./features/layout/Layout";
import { Toaster } from "react-hot-toast";
import { Books } from "./pages/Books";

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/books" replace={true} />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<p>/books/:id</p>} />
            <Route path="/your-books" element={<p>/your-books</p>} />
          </Route>

          <Route path="*" element={<p>Invalid path</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
