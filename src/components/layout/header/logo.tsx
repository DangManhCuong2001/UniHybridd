import Link from 'next/link';
import Image from 'next/image';
import { LOGO_FULL, LOGO_SHORT } from 'src/constants/ImagePath';

interface LogoProps {
    isMobile?: boolean;
}

export default function Logo({ isMobile = false }: LogoProps) {
    console.log(isMobile);
    if (isMobile) {
        return (
            <Link href={'/'} passHref>
                <Image src={LOGO_SHORT} alt="logo trufy" title="logo trufy" width={40} height={40} priority sizes="40px" className="w-[40px] h-[40px] object-contain" />
            </Link>
        );
    }

    return (
        <Link href={'/'} passHref>
            <Image src={LOGO_FULL} alt="logo trufy" title="logo trufy" width={120} height={50} priority sizes="120px" className="w-[120px] h-[50px] object-contain" />
        </Link>
    );
}
