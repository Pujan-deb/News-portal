import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
import Bg from '../../assets/bg.png'
import './navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../../Firebase/Authinfo'
export default function Rightnav() {
    const { GoogleSignin } = useContext(AuthContext)
    const signin = () => {
        GoogleSignin()
    }
    return (
        <div>
            <div className="p-3 bg-[#F3F3F3] w-full">
                <h2 className="font-bold text-black mb-3">Login with</h2>

                <button className="border-2 border-blue-600 rounded-md p-2 text-blue-500 text-[18px] w-full mb-4" onClick={() => signin()}><i className="fa-brands fa-google" ></i> Login with google</button>
                <button className="border-2 border-black rounded-md p-2 text-[18px] w-full"><i className="fa-brands fa-github"></i> Login with github</button>
            </div>
            <div className="p-3 bg-[#F3F3F3] w-full space-y-3">
                <h2 className="font-bold text-black mb-3">Find us on</h2>
                <p className="text-[20px]"><i className="fa-brands fa-square-facebook text-blue-500"></i> Facebook</p>
                <p className="text-[20px]"><i className="fa-brands fa-square-twitter text-blue-500"></i> Twitter</p>
                <p className="text-[20px]"><i className="fa-brands fa-square-instagram text-pink-500"></i> Instagram</p>
            </div>
            <div className="p-3 bg-[#F3F3F3] w-full my-6">
                <h2 className="font-bold text-black mb-3">Q-zone</h2>
                <img src={Qzone1} alt="" className='mx-auto' />
                <img src={Qzone2} alt="" className='mx-auto' />
                <img src={Qzone3} alt="" className='mx-auto' />

            </div>
            <div className='Rightnavbg p-4 text-center space-y-6'>
                <h2 className='text-[#FFF] text-[30px] font-bold font-[arial]'>Create an Amazing Newspaper</h2>
                <p className='text-[#FFF] '>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="bg-[#D72050] hover:bg-black text-white text-2xl font-normal py-2 px-4 rounded w-[150px] h-[64px]">Latest</button>

            </div>
        </div>

    )
}
