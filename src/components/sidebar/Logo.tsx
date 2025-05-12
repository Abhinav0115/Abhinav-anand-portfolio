import { FC } from "react";
import Image from "next/image";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="hidden lg:flex gap-3 p-5 px-5 justify-center pt-0 mb-0.5">
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime"></div>
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime_2"></div>
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime"></div>
{/*             <div className="capitalize text-2xl font-semibold">Portfolio</div> */}
            <div className="">
            <Image
                    className="object-contain bg-transparent"
                    src={"/images/Monochrome_Logo_ Abhinav.png"}
                    width={60}
                    height={50}
                    alt={"Portfolio website Logo"}
                />    
            </div>
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime"></div>
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime_2"></div>
            <div className="h-3 w-3 bg-btnHighlight rounded-full animate-bounce yLineAnime"></div>
            {/* <div className="h-4 w-4 bg-btnHighlight rounded-full"></div> */}
        </div>
    );
};

export default Logo;
