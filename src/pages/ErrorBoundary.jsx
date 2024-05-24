import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()
  return (
    <div className=' container mx-auto element-center flex-col min-h-[500px] leading-[2] text-center '>
      <h1 className='text-[40px] font-bold text-primary_Color  '>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => navigate('/')}
        className="flex px-8 py-2 my-5 border border-primary_Color border-[2px] hover:bg-primary_Color hover:text-[#fff] Transition300 ">Back To Home</button>
    </div>
  )
}
