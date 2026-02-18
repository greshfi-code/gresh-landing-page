
const ReusableWorkCard = ({image, title, description, label}: {image: string, title: string, description: string, label?: string}) => {
  return (
    <div className="bg-transparent rounded-xl border-[1px] border-[#E1E6E7] shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="h-[260px] w-full object-contain" />
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-[#F8FAFC] whitespace-pre-line">{title}</h3>
        <p className="text-[#E1E6E7] text-base">{description}</p>
        {label && <span className="text-[#9C9898] text-sm whitespace-pre-line">{label}</span>}
      </div>
    </div>
  )
}

export default ReusableWorkCard