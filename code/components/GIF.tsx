interface GIFProps {
    src: string;
};

const GIF: React.FC<GIFProps> = ({ src }) => {
    return (
        <>
            <img className="mb-4" alt="gif" src={src} />
        </>
    )
}

export default GIF;