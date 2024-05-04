import {HourglassIcon} from "./shared/icons/icons";

const getCurrencySymbol = (currency) => {
    switch (currency) {
        case 'USD':
            return '$'
        case 'INR':
            return '₹'
        default:
            return ''
    }
}

const salaryString = (minSalary, maxSalary, currency) => {
    if(minSalary || maxSalary) {
        let currSymbol = getCurrencySymbol(currency)
        let arr = []
        if(minSalary) {
            arr.push(`${minSalary}`)
        }
        if(maxSalary) {
            arr.push(`${maxSalary}`)
        }
        return currSymbol + " " + arr.join(' - ')
    } else {
        return 'Undisclosed'
    }
}

const experienceString = (minExp, maxExp) => {
    if(minExp || maxExp) {
        let arr = []
        if(minExp) {
            arr.push(`${minExp}`)
        }
        if(maxExp) {
            arr.push(`${maxExp}`)
        }
        return arr.join(' - ') + ' years'
    } else {
        return 'Not specified'
    }
}

export const JobCard = ({job}) => {

    const companyName = job?.companyName ?? ""
    const companyURL = job?.logoUrl ?? ""
    const jobRole = job?.jobRole ?? ""
    const location = job?.location ?? ""
    const salary = salaryString(job?.minJdSalary, job?.maxJdSalary, job?.salaryCurrencyCode)
    const experience = experienceString(job?.minExp, job?.maxExp)

    return <div className={"w-[360px] h-[600px] flex flex-col justify-start items-center gap-1 p-4 rounded-xl shadow-all-side hover:scale-[101%]"}>
        <div className={"w-full h-[5%] flex justify-start items-center"}>
            <div className={"flex justify-start items-center gap-1 border rounded-md shadow-all-side p-1"}>
                <p className={"text-[10px] font-light"}>{"New"}</p>
            </div>
        </div>
        <div className={"w-full h-[15%] flex flex-row justify-start items-center gap-2"}>
            <div className={"w-[20%]"}><img src={companyURL} alt={""} className={"w-full h-full object-contain"} /></div>
            <div className={"w-[80%] flex flex-col justify-center items-start gap-1"}>
                <p className={"text-slate-500 text-sm font-medium"}>{companyName}</p>
                <p className={"font-light capitalize"}>{jobRole}</p>
                <p className={"text-xs font-light"}>{location}</p>
            </div>
        </div>
        <div className={"w-full h-[5%] flex justify-start items-center"}>
            <p className={"text-slate-500 text-sm font-medium"}>{"Estimated Salary:"} {salary} {"✅"}</p>
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
            <p className={""}>{experience}</p>
        </div>
        <div className={"w-full h-[15%] flex flex-col justify-center items-center gap-2"}>
            <button className={"w-full h-[50%] flex justify-center items-center rounded-md font-medium bg-[#54EFC4] active:bg-[#2fd8a9] cursor-pointer"}>Easy Apply</button>
            <button className={"w-full h-[50%] flex justify-center items-center rounded-md text-white text-sm bg-[#4943DA] active:bg-[#413bbf] cursor-pointer"}>Unlock Referral</button>
        </div>
    </div>
}

