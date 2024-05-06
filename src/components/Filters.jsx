import {MultiSearch} from "./MultiSearch";
import {SearchInput} from "./SearchInput";

export const Filters = ({role, setRole, exp, setExp, pay, setPay, company, setCompany}) => {
    const roleOptions = [
        {
            label: "Backend",
            value: "backend"
        },
        {
            label: "Frontend",
            value: "frontend"
        },
        {
            label: "IOS",
            value: "ios"
        },
        {
            label: "Android",
            value: "android"
        },
        {
            label: "Tech Lead",
            value: "tech lead"
        },
    ]

    const expOptions = [
        {
            label: "1 year",
            value: 1
        },
        {
            label: "2 year",
            value: 2
        },
        {
            label: "3 year",
            value: 3
        },
        {
            label: "4 year",
            value: 4
        },
        {
            label: "5 year",
            value: 5
        },
        {
            label: "6 year",
            value: 6
        },
        {
            label: "7 year",
            value: 7
        },
        {
            label: "8 year",
            value: 8
        },
        {
            label: "9 year",
            value: 9
        },
        {
            label: "10 year",
            value: 10
        },
    ]

    const payOptions = [
        {
            label: '5',
            value: 5
        },
        {
            label: '10',
            value: 10
        },
        {
            label: '15',
            value: 15
        },
        {
            label: '20',
            value: 20
        },
        {
            label: '25',
            value: 25
        },
        {
            label: '30',
            value: 30
        },
        {
            label: '35',
            value: 35
        },
        {
            label: '40',
            value: 40
        },
        {
            label: '45',
            value: 45
        },
        {
            label: '50',
            value: 50
        },
        {
            label: '55',
            value: 55
        },
        {
            label: '60',
            value: 60
        },
    ]

    return <div className={"w-full flex flex-row flex-wrap justify-center items-center gap-4 px-4"}>
        <MultiSearch label={"Role"} options={roleOptions} multi={true} selected={role} setSelected={setRole} />
        <MultiSearch label={"Experience"} options={expOptions} multi={false} selected={exp} setSelected={setExp} />
        <MultiSearch label={"Min Salary"} options={payOptions} multi={false} selected={pay} setSelected={setPay} />
        <SearchInput label={"Company"} selected={company} setSelected={setCompany}/>
    </div>
}