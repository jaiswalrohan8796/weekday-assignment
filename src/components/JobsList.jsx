import {JobCard} from "./JobCard";
import {SpinnerIcon} from "./shared/icons/icons";

export const JobsList = ({jobs, loading}) => {
    return <div className={"w-full flex flex-col justify-center items-center gap-6"}>
        <div className={"w-full flex flex-wrap justify-around items-center gap-8"}>
            {jobs?.map((job) => {
                return <div key={job?.jdUid}><JobCard job={job} /></div>
            })}
        </div>
       <div>
           {loading ? <div className="flex justify-center items-center animate-spin">
               <SpinnerIcon/>
           </div> : null}
       </div>
    </div>
}