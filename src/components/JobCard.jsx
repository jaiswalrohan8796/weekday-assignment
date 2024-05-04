import {HourglassIcon} from "./shared/icons/icons";

export const JobCard = () => {
    return <div className={"w-[360px] h-[600px] flex flex-col justify-start items-center gap-1 p-4 rounded-xl shadow-all-side hover:scale-[101%]"}>
        <div className={"w-full h-[5%] flex justify-start items-center"}>
            <div className={"flex justify-start items-center gap-1 border rounded-md shadow-all-side p-1"}>
                <span><HourglassIcon /></span>
                <p className={"text-[10px] font-light"}>{"Posted 13 days ago"}</p>
            </div>
        </div>
        <div className={"w-full h-[15%] flex flex-row justify-start items-center gap-2"}>
            <div className={"w-[20%]"}><img src={"https://picsum.photos/400"} alt={""} className={"w-full h-full object-contain"} /></div>
            <div className={"w-[80%] flex flex-col justify-center items-start gap-1"}>
                <p className={"text-slate-500 text-sm font-medium"}>{"Fitpage"}</p>
                <p className={"font-light"}>{"Full Stack Developer"}</p>
                <p className={"text-xs font-light"}>{"Mumbai"}</p>
            </div>
        </div>
        <div className={"w-full h-[5%] flex justify-start items-center"}>
            <p className={"text-slate-500 text-sm font-medium"}>{"Estimated Salary:"} {"$ 10 - 12 LPA"} {"✅"}</p>
        </div>
        <div className={"relative w-full h-[50%] flex flex-col justify-start items-start text-sm"}>
            <div className={"z-10 absolute bottom-0 left-0 h-[30%] w-full flex justify-center items-end bg-gradient-to-t from-white from-50% to-90%"}>
                <button className={"text-[#4943DA] my-4 hover:cursor-pointer"}>{"View job"}</button>
            </div>
            <p className={"text-slate-500 text-sm font-medium"}>{"About Company:"}</p>
            <div className={"w-full flex justify-center items-start overflow-clip"}>
                <p>{"Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages. Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages."}</p>
            </div>
        </div>
        <div className={"w-full h-[10%] flex flex-col justify-center items-start text-sm"}>
            <p className={"text-slate-500 font-medium"}>{"Minimum Experience"}</p>
            <p className={""}>{"2 years"}</p>
        </div>
        <div className={"w-full h-[15%] flex flex-col justify-center items-center gap-2"}>
            <button className={"w-full h-[50%] flex justify-center items-center rounded-md font-medium bg-[#54EFC4] cursor-pointer"}>Easy Apply</button>
            <button className={"w-full h-[50%] flex justify-center items-center rounded-md text-white text-sm bg-[#4943DA] cursor-pointer"}>Unlock Referral</button>
        </div>
    </div>
}

