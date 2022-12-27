import GIF from "./Gif";

interface GridProps {
    gifs: any
}

const Grid: React.FC<GridProps> = ({gifs}) => {
    return (
        <>
            <div className="md:container md:mx-auto px-4 max-h-[calc(100vh_-_25rem)] lg:max-h-[calc(100vh_-_20rem)] overflow-y-scroll no-scrollbar">
                <div className="columns-2 md:columns-3 lg:columns-4">
                    {gifs}
                </div>  
            </div>
        </>
    );
}

export default Grid;