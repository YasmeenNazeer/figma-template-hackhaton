
import PickDrop from '@/components/pick-drop'

import React from 'react'
import Image from 'next/image'
import {  car3 } from '@/constant/cars'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'



function MoreCars() {
  return (
    <>

   <div className='flex '>
    <Sidebar/>




    <div className='flex flex-col'>
    <PickDrop/>








<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[32px] py-[36px]">
{car3.map((item, index) => (
              <div className="max-w-[304px] bg-white rounded-lg shadow-md p-[24px]" key={index}>
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                  <button aria-label="Favorite" className="text-red-500 text-xl">
                    ❤️
                  </button>
                </div>
                <p className="text-sm text-gray-500 font-semibold">{item.type}</p>

                {/* Image Section */}
                <div className="my-[52px] mx-[16px]">
                  <Image
                    src={item.imageUrl} 
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-cover"
                  />
                </div>

                {/* Features Section */}
                <div className="flex justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <span>⛽</span>
                    <span>{item.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚙️</span>
                    <span>{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👤</span>
                    <span>{item.capacity}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">{item.price}<span className="text-sm text-gray-500">/ day</span></p>

                  <Link href={'/rent'}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button></Link>
                </div>
              </div>
            ))}


</div>




<div className="w-full sm:w-[734px] h-[44px] mt-16 ml-0 sm:ml-[370px] flex flex-col sm:flex-row items-center sm:justify-between mb-[64px]">
  <div className="w-full sm:w-[156px] flex justify-center sm:justify-start">
    <Link
      href="/morecars"
      className="text-[16px] leading-6 hover:text-gray-600"
    >
      <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
        Show more car
      </Button>
    </Link>
  </div>

  <span className="font-medium text-[14px] leading-[21px] text-center sm:text-right text-[#90A3BF] mt-4 sm:mt-0 w-full sm:w-auto">
    120 Car
  </span>
</div>




    
    </div>
    </div>
   

   


  
               
   
    
    
    
    </>
  )
}

export default MoreCars