import {Header} from "./Header";
import {Filters} from "./Filters";
import {JobsList} from "./JobsList";
import {useEffect, useMemo, useRef, useState} from "react";
import {getJobs} from "../services/jobs";

export const JobsPage = () => {

    const LIMIT = 20
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)

    const [role, setRole] = useState([])
    const [exp, setExp] = useState(0)
    const [pay, setPay] = useState(0)
    const [company, setCompany] = useState('')

    const fetchJobs = async(limit, offset) => {
        setLoading(true);
        const data = await getJobs(limit, offset)
        setJobs(data?.['jdList'])
        setTotal(data?.['totalCount'])
        setOffset(offset + LIMIT)
        setLoading(false)
    }

    const fetchMoreJobs = async () => {
        if (!loading && (offset + LIMIT) < total) {
            setLoading(true);
            const data = await getJobs(LIMIT, offset)
            setJobs((prevJobs) => [...prevJobs, ...data?.['jdList']]);
            setOffset(offset + LIMIT)
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs(LIMIT, offset)
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= scrollHeight) {
                fetchMoreJobs();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset, total]);

    const filteredJobs = useMemo(() => {
        let res = [...jobs]
        //role
        if(role.length !== 0) {
            res = res.filter((job) => {
                return role.includes(job?.jobRole)
            })
        }
        //exp
        if(exp !== 0) {
            res = res.filter((job) => {
                if(!job?.minExp) return true
                return (exp <= job?.minExp);

            })
        }
        //pay
        if(pay !== 0) {
            res = res.filter((job) => {
                if(!job?.minJdSalary) return true
                return (pay <= job?.minJdSalary);
            })
        }
        // company
        if(company !== '') {
            res = res.filter((job) => {
                return job?.companyName?.includes(company)
            })
        }
        return res
    }, [jobs, role, exp, pay, company])

    return <div className={'w-full flex flex-col justify-start items-center gap-6'}>
        <Header />
        <Filters role={role} setRole={setRole} exp={exp} setExp={setExp} pay={pay} setPay={setPay} company={company} setCompany={setCompany} />
        <JobsList jobs={filteredJobs} loading={loading} />
    </div>
}