import {DownIcon} from "./shared/icons/icons";
import {useEffect, useRef, useState} from "react";

export const MultiSearch = ({label, options, multi, selected, setSelected}) => {
    const [showOption, setShowOption] = useState(false)

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setShowOption(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);


    const onFocusInput = () => {
        setShowOption(!showOption)
    }

    const optionOnClick = (option) => {
        if(multi) {
            if(!selected.includes(option.value)) {
                setSelected([...selected, option.value])
            }
            else{
                let removeOption = selected.filter((select) => select !== option.value)
                setSelected([...removeOption])
            }
        } else{
            if(selected !== option.value) {
                setSelected(option.value)
            }
            else {
                setSelected(0)
            }
        }
        setShowOption(false)
    }
    const inputValue = multi ? selected?.join(',') : selected ? selected : ''
    return <div className={"relative min-w-[60px] flex justify-center items-center"} ref={ref}>
        <div className={"h-10 w-full flex flex-row justify-center items-center border rounded-md py-2"} onClick={onFocusInput}>
            <input className={"w-[80%] border-r focus:outline-0 px-2"} value={inputValue} onChange={(e) => {}} type={"text"} placeholder={label}/>
            <span className={"w-[20%] flex justify-center items-center"}><DownIcon/></span>
        </div>
        {showOption && <div className={"absolute top-10 left-0 w-full bg-white z-20 rounded-md border"}>
            {options.map((option) => {
                const isSelected = multi ? selected.includes(option.value) : selected === option.value
                return <div className={`w-full h-10 p-2.5 flex justify-start items-center cursor-pointer hover:bg-slate-100 ${isSelected ? "bg-slate-100" : ""}`} onClick={(e) => optionOnClick(option)}>
                    {option.label}
                </div>
            })}
        </div>}
    </div>
}