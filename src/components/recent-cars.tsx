import Image from "next/image"


import { Button } from "@/components/ui/button"

import { car5} from "@/constant/cars"
import Link from "next/link"



export function RecentCars() {
  return (
    <div className="w-full max-w-[1200px] px-4 md:px-6 mb-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#90A3BF]">Recent Car</h2>
        <Button variant="link" className="text-[#3563E9]">View All</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      {car5.map((item, index) => (
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
                    src={item.imageUrl} // Replace this with the car image URL
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

                  <Link href={'/rentalform'}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button></Link>
                </div>
              </div>
            ))}





      </div>
    </div>
  )
}

