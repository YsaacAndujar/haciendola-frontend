import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter, OnlyPublicRoute, PrivateRoute, ProductsRouter, ProfileRouter } from "./index";
import { useContext } from "react";
import { AuthContext } from "context/auth";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isLogged} />}>
          <Route path="/products/*" element={<ProductsRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
        </Route>
        <Route element={<OnlyPublicRoute isAuthenticated={isLogged} />}>
          <Route path="/auth/*" element={<AuthRouter />} />
        </Route>
        <Route path="*" element={<Navigate to="/products"/>} />
      </Routes>
    </Router>
  )
}
