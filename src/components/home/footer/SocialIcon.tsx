import Image, { StaticImageData } from "next/image";

interface SocialIconProps {
  image: StaticImageData;
  href: string;
  name: string;
}

function SocialIcon({ image, href, name }: SocialIconProps) {
  return (
    <a
      href={href}
      className=" bg-jade-shade-1 block rounded-full p-2 transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-105 focus:bg-jade-normal"
    >
      <Image src={image} className="h-7 w-7" alt={`${name} link`} />
    </a>
  );
}

export default SocialIcon;
