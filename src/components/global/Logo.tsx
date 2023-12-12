import Image from "next/image";
import Link from "next/link";
import logo from "../../../public//images/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="text-grey-normal flex items-center gap-4 transition-all duration-150 ease-linear hover:text-jade-normal focus:text-jade-normal md:gap-3 sm:gap-2"
    >
      <Image
        src={logo}
        className="h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14 xxsm:h-12 xxsm:w-12"
        alt="KetoDelicious Logo"
      />
      <p className="underline-hover relative block pt-2  font-kalam text-4xl font-medium tracking-wider md:text-3xl sm:text-2xl xxsm:text-xl ">
        KetoDelicious
      </p>
    </Link>
  );
}

export default Logo;
