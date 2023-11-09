import Header from "./Header";
import Content from "./Content";
import useTitle from "../assets/useTitle";

export default function Mainlayout() {
    useTitle("Home")
    return (
        <div>
            <Header></Header>
            <Content></Content>
        </div>
    )
}
