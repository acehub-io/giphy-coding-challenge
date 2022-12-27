import { useState } from 'react'

interface ButtonProps {
    state:boolean;
    text:string;
    onClick: () => void
};

const Button: React.FC<ButtonProps> = ({ state, text, onClick }) => {

    const [buttonState, setButtonState] = useState(state);
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick();
        // if (buttonState) {
        //     setButtonText("X");
        // }
        // else {
        //     setButtonText("GIF");
        // }
    }
    return (
        <>
            <button className="button" onClick={handleOnClick}>
                <svg className='svg'>
                    { buttonState && <circle className='circle' cx="32" cy="32" r="24" stroke="white" strokeDasharray="7, 7" strokeWidth="3" fill="none" />}
                    <text x="50%" y="50%" fill='white' fontSize={16} dominantBaseline="middle" textAnchor="middle">{text}</text>
                    Sorry, inline SVG isn't supported by your browser.
                </svg>
            </button>
        </>
    )
}

export default Button;