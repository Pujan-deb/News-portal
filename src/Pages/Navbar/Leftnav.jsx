import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Pic1 from '../../assets/1.png'
import Pic2 from '../../assets/2.png'
import Pic3 from '../../assets/3.png'
export default function Leftnav() {
    const [catageory, setCatageory] = useState([])
    useEffect(() => {
        fetch("https://news-portal-server-three.vercel.app/catageory")
            .then(res => res.json())
            .then(data => setCatageory(data))
    }, [])
    return (
        <div>
            <h2 className="font-bold text-xl text-black mb-3">All catageory</h2>
            <div className="flex flex-col">
                {
                    catageory.map(item => <NavLink to={`/catageory/${item.id}`} key={item.id} className="text-[#9F9F9F] text-xl leading-[30px] px-6">{item.name}</NavLink>)
                }
            </div>
            <div className="mt-4 space-y-4">
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
    )
}
