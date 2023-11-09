import { NavLink } from "react-router-dom"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

export default function Showcatageory({ values }) {
    return (
        <div className="border border-gray-600 rounded-md mb-5">
            <div className="flex justify-between items-center bg-[#F3F3F3] p-3 rounded-md">
                <div className="flex gap-3">
                    <img src={values.author.img} alt="" className="w-[40px] h-[40px] rounded-full" />
                    <div className="">
                        <h3 className="text-[#403F3F] text-xl font-medium">{values.author.name}</h3>
                        <p>{values.author.published_date}</p>
                    </div>
                </div>
                <div className="text-[20px] flex gap-3 justify-center items-center">
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share"></i>
                </div>
            </div>
            <div className="p-2">
                <h2 className="text-[#403F3F] font-bold text-2xl my-3">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                <img src={values.image_url} alt="" />
                <p className="my-4">
                    {values.details.length < 250 ?
                        <>{values.details}</>
                        : <>
                            {values.details.slice(0, 250)}...
                            <NavLink to={`/news/${values._id}`} className="text-xs font-semibold text-orange-500">Read more</NavLink>
                        </>}
                </p>
            </div>
            <div className="flex justify-between items-center bg-[#F3F3F3] p-3 rounded-md">
                <div className="flex gap-3 items-center">
                    <Rating style={{ maxWidth: 150 }} value={values.rating.number} readOnly />
                    <h3 className="font-semibold">{values.rating.number}</h3>

                </div>
                <div className="flex gap-3 items-center">
                    <i className="fa-solid fa-eye"></i>
                    <h3 className="font-bold">{values.total_view}</h3>
                </div>
            </div>
        </div>
    )
}
