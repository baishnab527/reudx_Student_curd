import PrivateRouter from "./private/PrivateRoute";
import PublicRouter from "./public/PublicRoute";
import {createBrowserRouter} from "react-router-dom";


// create a router;
const router = createBrowserRouter([...PublicRouter, ...PrivateRouter]);

// export defautl router;
export default router;