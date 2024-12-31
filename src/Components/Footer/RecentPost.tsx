import Image from "next/image"

export default function RecentPostsSection() {
  const posts = [
    { images: ["/Mask Group (1).png", "/Group 18522 (1).png"] },
    { images: ["/Mask Group (2).png", "/Group 18522 (1).png"] },
    { images: ["/Mask Group.png", "/Group 18522 (1).png"] }
  ];
  
  
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4 md:mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-3 md:mb-4">
          {post.images.map((image, imgIndex) => (
            <Image 
              key={imgIndex} 
              src={image} 
              alt={`Post ${index + 1} - Image ${imgIndex + 1}`} 
              width={40} 
              height={30} 
              className="w-12 h-12 md:w-16 md:h-16 object-contain mr-3 md:mr-4" 
            />
          ))}
        </div>
      ))}
    </div>
  );
}