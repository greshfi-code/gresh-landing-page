import React from 'react'
import { LucideIcon } from 'lucide-react'
interface BrandPillProps {
  icon?: LucideIcon
  label: string
  className?: string
  style?: React.CSSProperties
  rotation?: number
}
export function BrandPill({
  icon: Icon,
  label,
  className = '',
  style,
  rotation = 0,
}: BrandPillProps) {
  return (
    <div
      className={`absolute flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-white/10 rounded-full shadow-xl backdrop-blur-sm text-gray-300 hover:scale-105 hover:bg-[#252525] transition-all duration-300 cursor-default z-10 ${className}`}
      style={{
        ...style,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
