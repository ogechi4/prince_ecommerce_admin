import React from 'react'
import {assets} from '../assets/assets'

function Navbar() {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            <img src={assets.logo} alt="" className='w-[max(10%,80px)]'/>
            <button className='bg-gray-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar
