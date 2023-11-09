import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Firebase/Authinfo"
import useTitle from "../../assets/useTitle"

export default function Login() {
    useTitle("Login")
    const navigate = useNavigate()
    const { Login } = useContext(AuthContext)
    const location = useLocation()
    const Redirect = location.state?.from?.pathname || "/"
    const HandleSubmit = (e) => {
        e.preventDefault()
        const Email = e.target.email.value;
        const Pass = e.target.password.value;
        Login(Email, Pass)
            .then(() => navigate(Redirect))
            .catch((error) => { console.log(error.message) })
    }
    return (
        <div className="bg-[#F3F3F3] shadow-2xl mx-auto w-3/5 p-4 rounded-md my-[76px] py-[76px]">
            <h2 className="font-bold text-center text-2xl mb-4">Login</h2>
            <form className="space-y-3 mx-[80px]" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="email" className="font-bold block mb-2">Email address</label>
                    <input type="email" name="email" placeholder="Enter email" className="p-2 w-full rounded-md text-black font-normal" />
                </div>
                <div>
                    <label htmlFor="password" className="font-bold block mb-2">Password</label>
                    <input type="password" name="password" placeholder="Enter password" className="p-2 w-full rounded-md text-black font-normal" />
                </div>
                <div>
                    <input type="submit" value="Login" className="bg-[#403F3F] w-full text-white font-medium p-2 rounded-md mt-3 cursor-pointer" />
                    <p className="text-[#706F6F] font-medium text-center">Don't have account? <span className="text-[#FF8C47] cursor-pointer" onClick={() => navigate("/register/signup")}>Register</span></p>
                </div>
            </form>
        </div>
    )
}
