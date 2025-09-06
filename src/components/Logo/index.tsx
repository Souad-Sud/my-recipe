import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
      <Image src="/LogoImg/logorec.png" alt="logo" height={100} width={85} />
      </Link>

    </div>
  );
};
export default Logo;
