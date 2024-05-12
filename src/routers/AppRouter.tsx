import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter, OnlyPublicRoute, PrivateRoute, ProductsRouter } from "./index";

export const AppRouter = () => {
  const isLogged = true
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isLogged} />}>
          <Route path="/*" element={<ProductsRouter />} />
        </Route>
        <Route element={<OnlyPublicRoute isAuthenticated={isLogged} />}>
          <Route path="/auth/*" element={<AuthRouter />} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  )
}
