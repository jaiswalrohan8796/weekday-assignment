import {Header} from "./Header";
import {Filters} from "./Filters";
import {JobsList} from "./JobsList";
import {useEffect, useState} from "react";
import {getJobs} from "../services/jobs";

export const JobsPage = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchJobs = async(limit, offset) => {
        setLoading(true);
        const data = await getJobs(limit, offset)
        setJobs(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, []);

    return <div className={'w-full flex flex-col justify-start items-center gap-6'}>
        <Header />
        <Filters />
        <JobsList jobs={jobs} loading={loading} />
    </div>
}