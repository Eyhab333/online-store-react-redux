import Home from "pages/home/Home";
import Cart from "pages/cart/Cart";
import Root from "./pages/Root";
import Notfound from "pages/Notfound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "pages/ProductDetails/ProductDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
