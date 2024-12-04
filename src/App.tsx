import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Layout } from "./features/layout/Layout";
import { Toaster } from "react-hot-toast";
import { Books } from "./pages/Books";
import { BookDetails } from "./pages/BookDetails";
import { YourBooks } from "./pages/YourBooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PageNotFound } from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <GlobalStyles />
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to="/books" replace={true} />}
              />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/your-books" element={<YourBooks />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
