import Image from "next/image"
import React from "react"
interface inputProp {
  label?: string
  icon: string
  bgColor?: string
  onClick?: Function
}
const Button = ({ label, icon, bgColor, onClick }: inputProp) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center cursor-pointer ${
        bgColor === "none" ? `bg-[${bgColor}]` : "bg-[#f4f4f4]"
      }  p-2 rounded-md  gap-[14px] `}
    >
      {label && (
        <button className="bg-transparent text-[#797979] text-base border-none outline-none shadow-none">
          {label}
        </button>
      )}
      {icon && <Image src={icon} width={24} height={24} alt="button" />}
    </div>
  )
}

export default Button
