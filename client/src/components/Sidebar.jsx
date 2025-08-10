import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  Home,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: Home },
  { to: "/ai/write-article", label: "AI Article Writer", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Title Generator", Icon: Hash },
  { to: "/ai/generate-images", label: "AI Image Generation", Icon: Image },
  { to: "/ai/remove-background", label: "Background Removal", Icon: Eraser },
  { to: "/ai/remove-object", label: "Object Removal", Icon: Scissors },
  { to: "/ai/review-resume", label: "Resume Reviewer", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: User },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <aside
      className={`z-10 w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 
        ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
        transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="my-7 w-full">
        {/* User Avatar */}
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center font-medium">{user.fullName}</h1>

        {/* Navigation Links */}
        <nav className="px-6 mt-5 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded transition 
                 ${
                   isActive
                     ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white shadow-md"
                     : "hover:bg-gray-100"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom User Profile */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition"
        >
          <img src={user.imageUrl} className="w-8 rounded-full" alt="User" />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-sm text-gray-500">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
