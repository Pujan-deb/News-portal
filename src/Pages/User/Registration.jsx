import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Firebase/Authinfo"

export default function Registration() {
    const navigate = useNavigate()
    const { createUser, updateinfo } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const Email = e.target.email.value;
        const Pass = e.target.password.value;
        createUser(Email, Pass)
            .then(() => {
                console.log("Created")
                navigate("/")

            })
            .catch((error) => { console.log(error.message) })

    }
    const HandleCheck = (e) => {
        setAccepted(e.target.checked)
    }
    return (
        <div className="bg-[#F3F3F3] shadow-2xl mx-auto w-3/5 p-4 rounded-md my-[50px] py-[76px]">
            <h2 className="font-bold text-center text-2xl mb-4">Register your account</h2>
            <form className="space-y-3 mx-[80px]" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="name" className="font-bold block mb-2">Name</label>
                    <input type="text" name="name" placeholder="Enter name" className="p-2 w-full rounded-md text-black font-normal" />
                </div>
                <div>
                    <label htmlFor="email" className="font-bold block mb-2">Email address</label>
                    <input type="email" name="email" placeholder="Enter email" className="p-2 w-full rounded-md text-black font-normal" />
                </div>
                <div>
                    <label htmlFor="password" className="font-bold block mb-2">Password</label>
                    <input type="password" name="password" placeholder="Enter password" className="p-2 w-full rounded-md text-black font-normal" />
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="checkbox" id="" className="cursor-pointer" onClick={HandleCheck} />
                    <p>Accept terms and condditions</p>
                </div>
                <div>

                    {accepted ? <input type="submit" value="Register" className="bg-[#403F3F] w-full text-white font-medium p-2 rounded-md mt-3 cursor-pointer" /> : <input disabled type="submit" value="Register" className="bg-[#403F3F] w-full text-white font-medium p-2 rounded-md mt-3 cursor-not-allowed" title="Accept the conditions!" />}
                    <p className="text-[#706F6F] font-medium text-center">Already have account? <span className="text-[#FF8C47] cursor-pointer" onClick={() => navigate("/register/login")}>Login</span></p>
                </div>
            </form>
        </div>
    )
}
