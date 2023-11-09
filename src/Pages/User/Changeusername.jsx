import { useContext } from "react";
import { AuthContext } from "../../Firebase/Authinfo";

export default function Changeusername() {
    const { updateinfo } = useContext(AuthContext)
    const HandleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        updateinfo(name);
    }
    return (
        <div className="bg-[#F3F3F3] shadow-2xl mx-auto w-3/5 p-4 rounded-md my-[76px] py-[76px]">
            <h2 className="font-bold text-center text-2xl mb-4">Change username</h2>
            <form className="space-y-3 mx-[80px]" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="name" className="font-bold block mb-2">username</label>
                    <input type="text" name="name" placeholder="Enter name" className="p-2 w-full rounded-md text-black font-normal" />
                </div>

                <div>
                    <input type="submit" value="Change name" className="bg-[#403F3F] w-full text-white font-medium p-2 rounded-md mt-3 cursor-pointer" />
                    <p className="text-[#706F6F] font-medium text-center"><span className="text-[#FF8C47] cursor-pointer" onClick={() => navigate("/catageory/0")}>Cancel</span></p>
                </div>
            </form>
        </div>
    )
}
