import Leftnav from "../Pages/Navbar/Leftnav";
import Rightnav from "../Pages/Navbar/Rightnav";
import { Outlet } from "react-router-dom";

export default function Content() {
    return (
        <div className="grid grid-cols-4 gap-x-3">
            <div >
                <Leftnav></Leftnav>
            </div>
            <div className=" col-span-2">
                <Outlet></Outlet>
            </div>
            <div>
                <Rightnav></Rightnav>
            </div>
        </div>
    )
}
