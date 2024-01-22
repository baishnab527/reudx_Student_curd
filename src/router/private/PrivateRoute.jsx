import Layout from "../../component/layout/Layout";
import Admin from "../../page/admin/Admin";

// create a private router;
const PrivateRouter = [
    {
        element: < Layout/>,
        children: [
            {
                path: "./admin",
                element: <Admin/>
            }
        ]
    }
] ;


// export default Private Router;
export default PrivateRouter;