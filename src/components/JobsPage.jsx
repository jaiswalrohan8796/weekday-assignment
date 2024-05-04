import {Header} from "./Header";
import {Filters} from "./Filters";
import {JobsList} from "./JobsList";
import {useEffect, useRef, useState} from "react";
import {getJobs} from "../services/jobs";

export const JobsPage = () => {

    const LIMIT = 20
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)

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

    return <div className={'w-full flex flex-col justify-start items-center gap-6'}>
        <Header />
        <Filters />
        <JobsList jobs={jobs} loading={loading} />
    </div>
}