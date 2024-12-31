import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import RecentPostsSection from "./RecentPost";
import SocialIcons from "./SocialIcons";
import UsefulLinksSection from "./UseFulLink";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Sign-up Bar Section */}
      <div className="mt-12 text-center bg-[#050505] py-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sign up now</h2>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border-none text-black w-64"
          />
          <button className="px-6 py-2 bg-white text-[#FF9F0D] rounded-lg font-semibold">
            Submit
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="border-t border-[#FF9F0D] my-4 md:my-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm md:text-base text-center md:text-left">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
      
    </footer>
  )
}