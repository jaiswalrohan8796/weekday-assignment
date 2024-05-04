import {DownIcon} from "./shared/icons/icons";

export const MultiSearch = () => {
    return <div className={"min-w-[60px] flex justify-center items-center"}>
        <div className={"h-10 w-full flex flex-row justify-center items-center border rounded-md py-2"}>
            <input className={"w-[80%] border-r focus:outline-0 px-2"} type={"text"} placeholder={"Role"}/>
            <span className={"w-[20%] flex justify-center items-center"}><DownIcon/></span>
        </div>
    </div>
}