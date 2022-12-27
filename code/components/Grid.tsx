import GIF from "./Gif";

interface GridProps {
    gifs: Array<JSX.Element>
}

const Grid: React.FC<GridProps> = ({ gifs }) => {
    return (
        <div className="grid">
            <div className="md:container bg-gray-100 md:mx-auto px-2 w-full overflow-y-scroll no-scrollbar">
                <div className="columns-2 md:columns-3 lg:columns-4">
                    {gifs}
                </div>
            </div>
        </div>
    );
}

export default Grid;