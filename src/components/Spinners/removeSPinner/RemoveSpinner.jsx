import React from 'react'
import "./RemoveSpinner.css"

export default function RemoveSpinner() {
    return (
<main className='absolute inset-0 backdrop-blur-[2px] bg-[#310f65c4]  w-full h-full element-center rounded-lg'>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </main>
    )
}
