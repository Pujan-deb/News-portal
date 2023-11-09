import { Navigate, createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Catageory from "../Pages/Catageory/Catageory";
import Newspagelayout from "../Layouts/Newspagelayout";
import News from "../Pages/News/News";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Login from "../Pages/User/Login";
import Registration from "../Pages/User/Registration";
import PrivateRoute from "./PrivateRoute";
import Changeusername from "../Pages/User/Changeusername";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [

            {
                path: "/",
                element: <Navigate to="/catageory/0"></Navigate>
            },
            {
                path: "/catageory/:id",
                element: <Catageory></Catageory>,
                loader: ({ params }) => fetch(`https://news-portal-server-three.vercel.app/catageory/${params.id}`)
            },
        ]
    }, {
        path: "news",
        element: <Newspagelayout></Newspagelayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://news-portal-server-three.vercel.app/news/${params.id}`)
            }
        ]
    }, {
        path: "register",
        element: <AuthenticationLayout></AuthenticationLayout>,
        children: [
            {
                path: "signup",
                element: <Registration></Registration>
            },
            {
                path: "login",
                element: <Login></Login>
            }, {
                path: "settings",
                element: <Changeusername></Changeusername>
            }
        ]
    },
])
export default route;