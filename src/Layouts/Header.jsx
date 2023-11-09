import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import userlogo from '../../src/assets/user.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Authinfo';
export default function Header() {
    const { user, Logout } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className='text-center mt-6'>
                <img src={logo} alt="" className='mx-auto' />
                <h2 className='text-[#706F6F] text-[Poppins] text-[18px] font-normal'>Journalism Without Fear or Favour</h2>
                <h3 className='text-[#403F3F] text-[Poppins] text-xl font-normal'>{moment().format("dddd,MMMM D,yyyy")}</h3>
            </div>
            <div className='flex bg-[#F3F3F3] p-3'>
                <button className="bg-[#D72050] hover:bg-black text-white text-xl font-normal py-2 px-4 rounded">Latest</button>
                <Marquee speed={70}>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                </Marquee>
            </div>
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
                        {user && <i className="fa-solid fa-gear text-2xl cursor-pointer" onClick={() => navigate("/register/settings")}></i>}

                        {user && <h3 className='font-bold text-[#D72050]'>{user.displayName || user?.email}</h3>}
                        {user ? <NavLink to="/catageory/0" className="bg-[#403F3F] hover:bg-black text-white text-xl font-normal py-2 px-4 rounded" onClick={() => Logout()}>Logout</NavLink> : <NavLink to="/register/login" className="bg-[#403F3F] hover:bg-black text-white text-xl font-normal py-2 px-4 rounded">Login</NavLink>}
                    </div>

                </nav>
            </div>
        </div>
    )
}
