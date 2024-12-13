import { car2, cars } from '@/constant/cars'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function CarsSection() {
  return (
    <>
      <div className='w-full py-[36px] px-[64px] '>
        <div className='flex justify-between items-center mb-[20px] '>
          <p className='text-[#90A3BF] text-[16px] leading-[20px]'>Popular Car</p>
          <p className='text-[#3563E9] text-[16px] leading-[20px]'>View All</p>
        </div>
        
        {/* Cars Map - First Map (cars.map) */}
        <div >
          <div className="grid overflow-x-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {cars.map((item, index) => (
              <div className=" max-w-[304px] bg-white rounded-lg shadow-md p-[24px] overflow-hidden" key={index}>
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] leading-[30px] font-semibold text-gray-900">{item.name}</h2>
                  <button aria-label="Favorite" className="text-red-500 text-xl">
                    ❤️
                  </button>
                </div>
                <p className="text-sm text-[#90A3BF] font-semibold">{item.type}</p>

                {/* Image Section */}
                <div className="py-[54px] px-[18px]">
                  <Image
                    src={item.imageUrl} // Replace this with the car image URL
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-cover"
                  />
                </div>

                {/* Features Section */}
                <div className="flex justify-between text-gray-500 text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <span>⛽</span>
                    <span className='text-[#90A3BF]'>{item.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚙️</span>
                    <span className='text-[#90A3BF]'>{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👤</span>
                    <span className='text-[#90A3BF]'>{item.capacity}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-2 items-center">

                  
                  <p className="text-lg font-semibold text-gray-900">{item.price}<span className=" text-[#90A3BF]">/day</span></p> 
   

           
                  <Link href={'/rent'}>
                  <button className="h-[44px] w-[116px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button> </Link>
                  
                </div>
              </div>
            ))}




          </div>
        </div>

        <div className='flex justify-between items-center mt-[42px] '>
          <p className='text-[#90A3BF] text-[16px] leading-[20px]'>Recomendation Car</p>
        </div>

        {/* Cars Map - Second Map (car2.map) */}
        <div className="mt-5 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


          {car2.map((item, index) => (
              <div className=" max-w-[304px] bg-white rounded-lg shadow-md p-[24px] overflow-hidden" key={index}>
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] leading-[30px] font-semibold text-gray-900">{item.name}</h2>
                  <button aria-label="Favorite" className="text-red-500 text-xl">
                    ❤️
                  </button>
                </div>
                <p className="text-sm text-[#90A3BF] font-semibold">{item.type}</p>

                {/* Image Section */}
                <div className="py-[54px] px-[18px]">
                  <Image
                    src={item.imageUrl} // Replace this with the car image URL
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-cover"
                  />
                </div>

                {/* Features Section */}
                <div className="flex justify-between text-gray-500 text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <span>⛽</span>
                    <span className='text-[#90A3BF]'>{item.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚙️</span>
                    <span className='text-[#90A3BF]'>{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👤</span>
                    <span className='text-[#90A3BF]'>{item.capacity}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-2 items-center">

                  
                  <p className="text-lg font-semibold text-gray-900">{item.price}<span className=" text-[#90A3BF]">/day</span></p> 
   

           
                  <Link href={'/rent'}>
                  <button className="h-[44px] w-[116px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button> </Link>
                  
                </div>
              </div>
            ))}






           
          </div>
        </div>
      </div>
    </>
  );
}

export default CarsSection;
