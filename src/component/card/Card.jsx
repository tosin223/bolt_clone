const Card = ({title, text, image}) => {
  return (
    <div  className="w-[22rem] rounded-xl bg-[#f5f6f7] h-[11rem] relative pl-[1rem] pt-[1rem]">
        <div>
            <div ><h5 className="text-[24px] leading-[30px] mb-4  text-[#2f313f] font-semibold ">{title}</h5></div>
            <div className="w-[13rem]"><span className="text-[#121D2B99]  leading-[24px]">{text}</span></div>
            
        </div>
        <div className="absolute right-0 bottom-0 w-[7rem]"><img src={image} alt="" /></div>
        
    </div>
  )
}

export default Card