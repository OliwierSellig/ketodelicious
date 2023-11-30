import Image from "next/image";
import Link from "next/link";
import logo from "../../../public//images/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex gap-4 items-center text-grey-normal hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear"
    >
      <Image src={logo} className="w-20 h-20" alt="KetoDelicious Logo" />
      <p className="text-4xl tracking-wider block font-medium  font-kalam pt-2 underline-hover relative ">
        KetoDelicious
      </p>
    </Link>
  );
}

export default Logo;
