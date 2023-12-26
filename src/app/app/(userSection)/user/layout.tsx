import { ChildrenProp } from "@/utils/utilTypes";
import Image from "next/image";
import bg from "../../../../../public/images/user-bg.png";
import avatar from "../../../../../public/images/photo-me.png";
import { BookmarkIcon, PlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import UserNavLink from "@/components/app/user/UserNavLink";

function layout({ children }: ChildrenProp) {
  return (
    <div className="w-full">
      <div className="relative flex h-[30vw] max-h-[420px] min-h-[260px] w-full items-center justify-center bg-cover bg-center bg-no-repeat after:absolute after:left-0 after:top-0 after:z-30 after:h-full after:w-full after:bg-jade-shade-2/70 after:content-['']">
        <h1 className="relative z-40 flex flex-col gap-2 text-center font-medium">
          <span className="animate-[fadeLeft_1.4s] font-ubuntu text-6xl tracking-wider text-white-normal md:text-5xl xsm:text-4xl">
            Oliwier Sellig
          </span>
          <span className="animate-[fadeLeft_2s] text-xl text-gray-tint-3 md:text-lg xsm:text-base">
            On KetoDelicious since 09.11.2023
          </span>
        </h1>
        <Image
          alt="User Background Image"
          priority={true}
          src={bg}
          fill
          sizes="(max-width: 900px) 100vh, 80vw"
          className="z-20 object-cover"
        />
        <div className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 translate-y-1/2 items-center gap-12 md:gap-8 xsm:gap-4">
          <div className="relative aspect-square  w-44 animate-[fadeLeft_1s] rounded-full border-[6px] border-solid border-white-normal shadow-md xl:w-36  md:w-28">
            <Image
              alt="User Avatar"
              src={avatar}
              className="rounded-full"
              fill
              sizes="(max-width: 760px) 100px, (max-width: 1280px) 132px, 164px"
            />
          </div>
          <nav className=" flex  items-center gap-2 md:gap-4 xsm:gap-4">
            <UserNavLink to="about" icon={<UsersIcon />}>
              About
            </UserNavLink>
            <UserNavLink to="created" icon={<PlusIcon />}>
              Created
            </UserNavLink>
            <UserNavLink to="bookmarked" icon={<BookmarkIcon />}>
              Bookmarked
            </UserNavLink>
          </nav>
        </div>
      </div>
      <div className="md:pt-22 px-12 pb-16 pt-40 xl:pt-24 mdl:px-6 xsm:px-2">
        {children}
      </div>
    </div>
  );
}

export default layout;
