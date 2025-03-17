import React from 'react'

export default function footer() {
  return (
    <div className="flex justify-center items-center rounded-full bg-white p-4 shadow-md">
      <div className="text-center">&copy; {new Date().getFullYear()} FOSO. All rights reserved.</div>
    </div>
  )
}
