"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/Button";
import Image from "next/image";
import Link from 'next/link';



interface MyComponentProps {
  adminname: string;
}



const blogImages = [
  {
    id: 1,
    image: "/Blog1.png",
    title: "10 Reasons To Do A Digital Detox Challenge",
  },
  {
    id: 2,
    image: "/Blog2.png",
    title: "Exploring Digital Wellness Strategies",
  },
  {
    id: 3,
    image: "/Blog3.png",
    title: "The Impact of Technology on Mental Health",
  },
  {
    id: 4,
    image: "/Blog4.png",
    title: "Balancing Screen Time and Real Life",
  },
];

const sideImages = [
  {
    id: 1,
    image: "/blogside1.png",
    title: "Recent Post 1",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 2,
    image: "/blogside2.png",
    title: "Recent Post 2",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 3,
    image: "/blogside3.png",
    title: "Recent Post 3",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 4,
    image: "/blogside4.png",
    title: "Recent Post 4",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
];

const filterMenu = [
  {
    id: 1,
    image: "/sidepic1.png",
    title: "Chicken Fry",
    available: "26",
  },
  {
    id: 2,
    image: "/sidepic2.png",
    title: "Burger Food",
    available: "46",
  },
  {
    id: 3,
    image: "/sidepic3.png",
    title: "Pizza",
    available: "16",
  },
  {
    id: 4,
    image: "/sidepic4.png",
    title: "Fresh Fruits",
    available: "36",
  },
  {
    id: 5,
    image: "/sidepic5.png",
    title: "Vegetables",
    available: "16",
  },
];
const sidereview = [
  {
    id: 1,
    image: "/side1.png",
    title: "hello",
  },
  
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images] = useState({ blogImages, sideImages, filterMenu, sidereview });
  
  return (
   
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Main Blog Content */}
        
        <div className="w-full lg:w-2/3 xl:w-2/3 space-y-4">
          {images.blogImages.map((item) => (
            <div 
              key={item.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-x-3 sm:space-x-4">
                  <div className="flex items-center">
                    <Image
                      src="/calendar.png"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="mr-1 sm:mr-2"
                    />
                    <span>Feb 14, 2022</span>
                  </div>
                  <div className="flex items-center">
                                      <Image
                                        src="/Chats.png"
                                        alt="Comments"
                                        width={20}
                                        height={20}
                                        className="mr-1 sm:mr-2"
                                      />
                                      <span>3 Comments</span>
                                    </div>
                                    <div className='flex items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 text-[#FF9F0D]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
            </svg>
            {}
          </div>
                  
                  
                  
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {item.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>

                <Button className="w-full sm:w-auto text-sm sm:text-base bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6">
          {/* Search Bar */}
          <div className="flex mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Search Your Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow text-sm sm:text-base bg-gray-100 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-3 sm:px-4"
            />
            <Button className="bg-orange-500 text-white p-2 sm:p-3 rounded-r-lg hover:bg-orange-600">
              🔍
            </Button>
          </div>

          {/* Recent Posts Section */}
           <div className=" flex items-center justify-center rounded-full overflow-hidden w-56 h-56">
          {images.sidereview.map((item) => (
            <div 
            key={item.id}
            className="font-thin text-center">
               <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                  className="object-cover"
                />
<div >
  <div className="flex items-center justify-center rounded-full overflow-hidden w-56 h-56">
    <Image
      src="/side1.png"
      alt="Calendar"  
      width={224}          // Set the size of the image
      height={224}         // Matching height for a circular shape
      className="object-cover"
      style={{ objectPosition: 'center' }}
    />
  </div>
</div>


              </div>

            </div>

            
            
          )
        )}
        </div>
 <div className="font-bold text-center">Prince Miyako</div>
 <p className="text-center font-thin">Lorem ipsum dolor sit amet, consectetur
adipisicing elit.Veritatis distinctio, odio
eligendi suscipit reprehenderit atque</p>

        
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Recent Posts</h3>
            {images.sideImages.map((img) => (
              <div key={img.id} className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center">
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold">{img.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">{img.date}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1 sm:mt-2">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Filter By Menu</h3>
            {images.filterMenu.map((index) => (
              <div 
                key={index.id} 
                className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center"
              >
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={index.image}
                    alt={index.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 flex font-extrabold lg:text-2xl md:text-2xl justify-between items-center">
                  <h4 className="text-xs lg:text-2xl md:text-2xl sm:text-sm font-semibold">{index.title}</h4>
                  <p className="text-[10px] lg:text-xl md:text-xl sm:text-xs text-gray-600">{index.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6 border-x-4">
  {/* Pagination Link */}
  <Link
    href="/Blog/Blogcard"
    className="bg-black text-yellow-500 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
  >
    Next
  </Link>
</div>
      



    </div>


  );

}