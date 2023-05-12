import Home from "pages/home/Home";
import Create from "pages/create/Create";
import Root from "./pages/Root";
import Notfound from "pages/Notfound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
