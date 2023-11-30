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
      className=" block p-2 bg-jade-normal rounded-full hover:bg-jade-shade focus:bg-jade-shade transition-all duration-150 ease-linear"
    >
      <Image src={image} className="w-7 h-7" alt={`${name} link`} />
    </a>
  );
}

export default SocialIcon;
