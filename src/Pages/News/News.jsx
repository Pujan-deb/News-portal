import { NavLink, useLoaderData, useNavigate } from "react-router-dom"
import Pic1 from '../../assets/1.png'
import Pic2 from '../../assets/2.png'
import Pic3 from '../../assets/3.png'
export default function News() {
    const navigate = useNavigate()
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <div className="p-5 bg-[#F3F3F3] rounded-md">
                <h2 className="text-[#403F3F] font-bold text-2xl my-3">{data.title}</h2>
                <img src={data.image_url} alt="" className="w-full mx-auto" />
                <p className="my-4 text-xl">
                    {data.details}
                </p>
                <button className="bg-[#D72050] hover:bg-black text-white text-xl font-normal py-2 px-4 rounded w-1/3" onClick={() => navigate("/catageory/0")}><i className="fa-solid fa-arrow-left mr-3" ></i> All news</button>
            </div>
            <div className="mt-5">
                <h2 className="font-bold text-[#D72050] text-2xl mb-3">More related news</h2>
                <div className="flex gap-3 items-center">
                    <div className="space-y-3">
                        <img src={Pic1} alt="" className="mx-auto" />
                        <h2 className="font-bold text-black text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <span className="text-[#403F3F] font-medium">sports</span>
                            <div className="flex gap-2 items-center text-[#9F9F9F]">
                                <i className="fa-regular fa-calendar"></i>
                                <h4>22/04/2023</h4>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <img src={Pic2} alt="" className="mx-auto" />
                        <h2 className="font-bold text-black text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <span className="text-[#403F3F] font-medium">sports</span>
                            <div className="flex gap-2 items-center text-[#9F9F9F]">
                                <i className="fa-regular fa-calendar"></i>
                                <h4>22/04/2023</h4>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <img src={Pic3} alt="" className="mx-auto" />
                        <h2 className="font-bold text-black text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <span className="text-[#403F3F] font-medium">sports</span>
                            <div className="flex gap-2 items-center text-[#9F9F9F]">
                                <i className="fa-regular fa-calendar"></i>
                                <h4>22/04/2023</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
