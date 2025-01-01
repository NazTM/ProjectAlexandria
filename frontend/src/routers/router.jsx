
import { createBrowserRouter} from "react-router-dom";
import App from "../App";
//import post_structure from "../post_structure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //children:[{path:"/",element:<></>}]
  },
  {
    path: "/LoginSignup",
    //element: <LoginSignup />,  // The login/signup page component
  },
]);

export default router;