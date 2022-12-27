import { useEffect, useRef } from "react";

interface GIFProps {
    src: string;
};

const GIF: React.FC<GIFProps> = ({ src }) => {
    return (

        <img className="mb-4 min-h-[50%]" src={src} alt="gif" />

    )
}

export default GIF;