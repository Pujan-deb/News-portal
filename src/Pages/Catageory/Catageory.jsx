import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import Showcatageory from "./Showcatageory";

export default function Catageory() {
    const data = useLoaderData();
    let message = "No news available"


    return (
        <div>

            {
                data.map(item => <Showcatageory key={item._id} values={item}></Showcatageory>)}
        </div>
    )
}
