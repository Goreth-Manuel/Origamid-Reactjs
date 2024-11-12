

import { createBrowserRouter} from "react-router-dom";
import Home from "../views/Home/home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
]);

export default Routes;

// ReactDom.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} /> 
//     </React.StrictMode>
// )