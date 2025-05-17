import Image from "next/image";
import { JSX } from "react";

const BgImage = (): JSX.Element => {
    return (
        <div className="absolute w-full h-screen select-none -z-50">
            <Image
                src="/bg-image-pejuang.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
};

export default BgImage;