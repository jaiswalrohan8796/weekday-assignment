export const SearchInput = ({label, selected, setSelected}) => {

    return <div className={"relative min-w-[60px] flex justify-center items-center"}>
        <div className={"h-10 w-full flex flex-row justify-center items-center border rounded-md py-2"}>
            <input className={"w-full focus:outline-0 px-2"} value={selected} onChange={(e) => setSelected(e.target.value)} type={"text"} placeholder={label}/>
        </div>
    </div>
}