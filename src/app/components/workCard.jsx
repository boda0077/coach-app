"user client"

export default function WorkCard(props) {
 return(
    <div className=" h- p-10 grid grid-cols-1 justify-start items-center  transition-all duration-300 hover:bg-[#303030]">
        <div className="grid leading-10 mt-2 ">
            <span className="text-[#CCFF00] uppercase">{props.date}</span>
            <span className="text-[#f5f5f5] font-extrabold text-[1.3rem]">{props.club}</span>
        </div>
        <p className="text-gray-400 my-5">{props.about}</p>
        <span className="text-gray-500 text-sm mb-2 flex items-center "><span className=" w-2 h-2 mr-2   rounded-full bg-main/60"></span>{props.place}</span>
    </div>
 )
}