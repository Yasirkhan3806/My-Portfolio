import React from 'react'

export default function Footer() {
  return (
    <div className="w-full h-[10vh] mt-12 bg-black/40 backdrop-blur-lg border-t border-white/10 flex justify-center items-center z-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/5 via-transparent to-[#B026FF]/5 pointer-events-none"></div>
      <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base">
        © {new Date().getFullYear()} Yasir Khan. All rights reserved.
      </p>
    </div>
  )
}
