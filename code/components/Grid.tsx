import GIF from "./Gif";

interface GridProps {
    gifs: Array<JSX.Element>
    onClick: (e:any) => void
}

const Grid: React.FC<GridProps> = ({ gifs, onClick }) => {
    const handleGIFClick = (e: any) => {
        e.preventDefault();
        onClick(e)
        // console.log(e.target.currentSrc)
    }
    return (
        <div className="grid">
            <div className="md:container bg-gray-100 md:mx-auto px-2 w-full overflow-y-scroll no-scrollbar">
                <div className="columns-2 md:columns-3 lg:columns-4" onClick={handleGIFClick}>
                    {gifs}
                </div>
            </div>
        </div>
    );
}

export default Grid;