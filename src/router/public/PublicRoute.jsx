import Layout from "../../component/layout/Layout";
import Home from "../../page/home/Home";

// create a publicRouter;
const PublicRouter = [

    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: < Home/>
            }
        ]
    }
];

// export default PublicRouter;
export default PublicRouter;