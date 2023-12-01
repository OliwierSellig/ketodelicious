import Image from "next/image";
import Link from "next/link";
import logo from "../../../public//images/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex gap-4 items-center text-grey-normal hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear sm:gap-2 md:gap-3"
    >
      <Image
        src={logo}
        className="w-20 h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 xxsm:w-12 xxsm:h-12"
        alt="KetoDelicious Logo"
      />
      <p className="text-4xl tracking-wider block font-medium  font-kalam pt-2 underline-hover relative sm:text-2xl md:text-3xl xxsm:text-xl ">
        KetoDelicious
      </p>
    </Link>
  );
}

export default Logo;
