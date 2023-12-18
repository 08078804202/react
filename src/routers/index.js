import { Add } from "../components/add";
import List from "../components/list";
import { Register } from "../components/register";
import { Updater } from "../components/updater";

const router=[
    {
        path:"/",
        element:<List/>
    },
    {
        path:"/list",
        element:<List/>
    },
    {
        path:"/add",
        element:<Add/>
    },
    {
        path:"/update",
        element:<Updater/>
    },
    {
        path:"/register",
        element:<Register/>
    },
]

export default router