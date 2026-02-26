import {Metadata} from "next";
import {Counter} from "@/app/dashboard/counter/components/Counter";


export const metadata:Metadata = {
    title: "Counter",
}


const Counterpage = () => {

    return (
        <>
            <Counter value={30}/>
        </>
    )
}

export default Counterpage;