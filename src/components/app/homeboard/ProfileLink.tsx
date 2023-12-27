import Image from "next/image";
import Link from "next/link";
import myPhoto from "../../../../public/images/photo-me.png";

function ProfileLink() {
  return (
    <nav className="flex flex-col items-center gap-6">
      <p className="animate-[fadeLeft_0.8s] text-xl font-medium">
        Or, visit your profile:
      </p>
      <Link
        href="/app/user/about"
        className="flex animate-[fadeBottom_0.8s] items-center gap-4 rounded-2xl bg-white-tint px-10 py-2 shadow-md transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-shade-2 focus:scale-105 focus:bg-jade-shade-2 xsm:px-6 [&:focus>p]:text-white-normal [&:hover>p]:text-white-normal"
      >
        <Image
          className="h-16 w-16  rounded-full xl:h-12 xl:w-12 xsm:h-10 xsm:w-10"
          src={myPhoto}
          alt="User Photo"
        />
        <p className="text-2xl font-medium transition-all duration-150 ease-linear xl:text-xl">
          Oliwier Sellig
        </p>
      </Link>
    </nav>
  );
}

export default ProfileLink;
