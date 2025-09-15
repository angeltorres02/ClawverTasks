import { Outlet } from "react-router";
import { LogoImage, LogoTitle } from "../components/login";
import { ProfilePhoto } from "../components/user/ProfilePhoto";
import { ProfileInfo } from "../components/user/ProfileInfo";

export default function MainLayout() {
  return (
    <div className="font-nunito">
      <header></header>
      <div className="flex">
        <aside className="group bg-primary flex flex-col w-20 h-screen items-center hover:w-50 transition-all duration-500 overflow-hidden justify-between">
          <div className="relative w-full flex justify-center">
            <LogoImage
              size={64}
              className="group-hover:opacity-0 transition-opacity duration-300 mt-4"
            />

            <LogoTitle className="absolute top-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-50" />
          </div>
          <nav className="relative w-full flex justify-center">
            <ProfilePhoto
              size={32}
              className="group-hover:opacity-0 transition-opacity duration-300 w-16 mb-8"
            />

            <ProfileInfo className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-50 w-16 bottom-8" />
          </nav>
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
