import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CADAManifesto from "./components/CadaManifesto";
import Manifesto from "./components/CadaManifesto";
import Ideology from "./components/Ideology";
import BecomeMember from "./components/BecomeMember";
import CADA_Aspirant from "./components/CadaAspirant";
import Resignation from "./components/Resignation";
import MembershipStatus from "./components/MembershipStatus";
import Contact from "./components/Contact";
import ErrorPage from "./ErrorPage";
import Event from "./components/Events";
import Homepage from "./components/Homepage";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Homepage />
    },
    {
        path:"/manifesto",
        element:<Manifesto />
    },
    {
        path:"/ideology",
        element:<Ideology />
    },
    {
        path:"/membership",
        element:<BecomeMember />
    },
    {
        path:"/membership/aspirant",
        element:<CADA_Aspirant />
    },
    {
        path:"/membership/resignation",
        element:<Resignation />
    },
    {
        path:"/membership/status",
        element:<MembershipStatus />
    },
    
    {
        path:"/events",
        element:<Event />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"*",
        element:<ErrorPage />
    }
])

export default routes