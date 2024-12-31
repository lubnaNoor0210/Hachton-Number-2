
import { Coffee } from 'lucide-react'
import Heading from '../ui/Heading'
import Image from 'next/image'
import { DrinksItem } from '../Constant/Drinks'

export default function Drink() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        
        {/* Drink Header */}
        <div className="w-full lg:w-1/2 lg:pl-8"
        >
          <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Drinks" />
            
          </div>
          {/*Description*/}

          <div className="space-y-4">
                      {DrinksItem.map((item, index) => (
                        <div key={index} className="border-b border-dashed border-gray-300 pb-4">
                          <div className="flex justify-between items-start mb-1">
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-xl font-bold text-gray-800" style={{ whiteSpace: 'nowrap' }}>
                {item.name} 
                <p className="text-gray-600" style={{ fontWeight: 'normal', marginTop: '0', marginBottom: '0' }}>
                {item.description}
              </p>
              </h3>
             
                
            </div>
            <span className="text-xl sm:text-xl font-bold text-[#FF9F0D]">{item.price}$</span>
          </div>
                          
          <p className="text-sm sm:text-[14px] text-gray-500" style={{ marginTop: '0', marginBottom: '0', lineHeight: '1'  }}>
            {item.calories} CAL
          </p>
                        </div>
                      ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">
          <Image
            src="/Drinks.png"
            alt="Drinks image"
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}