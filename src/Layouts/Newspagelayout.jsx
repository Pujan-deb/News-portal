import { Outlet } from "react-router-dom";
import Rightnav from "../Pages/Navbar/Rightnav";
import Header from "./Header";

export default function Newspagelayout() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-8 gap-x-4">

                <div className=" col-span-6">
                    <Outlet></Outlet>
                </div>
                <div className="col-span-2">
                    <Rightnav></Rightnav>
                </div>
            </div>
        </>
    )
}
