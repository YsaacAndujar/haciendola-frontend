import { ProductAddScreen, ProductDetailsScreen, ProductsListScreen } from "modules/products"
import { Navigate, Route, Routes } from "react-router-dom"

export const ProductsRouter = () => {
  return (
    <Routes>
        <Route index element={ <ProductsListScreen />} />
        <Route path="/:id" element={ <ProductDetailsScreen />} />
        <Route path="/add" element={ <ProductAddScreen />} />
        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
