interface GIFProps {
    src: string;
};

const GIF: React.FC<GIFProps> = ({ src }) => {
    return (
        <div className="gif">
            <img className="mb-4" alt="gif" src={src} />
        </div>
    )
}

export default GIF;