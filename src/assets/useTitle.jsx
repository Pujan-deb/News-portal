import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - News portal`;
    }, [title])
}
export default useTitle;