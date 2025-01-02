import Navbar from "@/components/Profile/Navbar";
import UserProfile from "@/components/Profile/UserProfile";
import React from "react";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="lg:grid grid-cols-[auto_80%]  gap-7 mt-12 max-md:mt-0  max-md:flex-col max-md:grid-rows-3">
      <div>
        <UserProfile />
        <div className="max-md:hidden">
          <Navbar />
        </div>
      </div>

      <div className="h-fit ">
        {children}
      </div>
      <div className="max-md:block hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default ProfileLayout;
