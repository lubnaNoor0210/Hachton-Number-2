import React from 'react'
import Image from 'next/image'





const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, Image: "/FoodCategory1.png", overlayImages: ["/Overlay.png", "/Overlay2.png"] }, // Two overlays
    { id: 2, Image: "/FoodCategory2.png", overlayImages: []}, // Single overlay
    { id: 3, Image: "/FoodCategory3.png", overlayImages: [] }, // Single overlay
    { id: 4, Image: "/FoodCategory4.png", overlayImages: [] }, // Single overlay
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500 font-serif font-normal size-[20px] md:text-[40px] font-family-greatVibes h-[40px]">Food Category</span>
          <br />
          <span className="text-orange-500">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Main Image of the food item */}
              <Image
                src={item.Image}
                alt={`Food item ${item.id}`}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Overlay images */}
              {item.overlayImages.map((overlayImage, index) => (
                <div key={index}
                className={`absolute left-4 ${index === 0 ? "top-1/4" : "top-1/2"}`} // overlay imageon left middle of image
                >
                  <Image
                    src={overlayImage}
                    alt={`Overlay Image ${index + 1}`}
                    width={index === 0 ? 125 : 206}
                    height={50}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Background Image on Right Corner */}
      <div
        className="absolute"
        style={{
          width: '444.1px',
          height: '532.3px',
          top: '1px',
          left: '1472.97px',
          backgroundImage: 'url("/FoodCategoryBackground.png")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'right bottom',
          transform: 'rotate(76.86deg)',
          opacity: 0,
          zIndex: 10,
        }}
      />
    </section>
  );
};
    



export default FoodCategory;
