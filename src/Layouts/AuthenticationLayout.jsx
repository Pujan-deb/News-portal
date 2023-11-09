import { NavLink, Outlet } from 'react-router-dom'
import userlogo from '../../src/assets/user.png'
import Registration from '../Pages/User/Registration'
import Login from '../Pages/User/Login'

export default function AuthenticationLayout() {
    return (
        <div className=''>
            <div>
                <nav className="p-4 flex justify-between items-center">
                    <div className='flex-grow '>
                        <ul className="flex justify-center">
                            <li className="ml-4">
                                <NavLink to="/catageory/0" className="text-black hover:text-gray-300 p-3">Home</NavLink>
                            </li>
                            <li className="ml-4">
                                <a href="#" className="text-black hover:text-gray-300 p-3">About</a>
                            </li>
                            <li className="ml-4">
                                <a href="#" className="text-black hover:text-gray-300 p-3">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src={userlogo} alt="" className='w-[41px] h-[41px]' />
                        <button className="bg-[#403F3F] hover:bg-black text-white text-xl font-normal py-2 px-4 rounded">Login</button>
                    </div>

                </nav>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
