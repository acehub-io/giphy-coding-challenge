interface ButtonProps {
    state: string;
  };

const Button: React.FC<ButtonProps> = ({ state}) => {
    return (
        <>
        <button>
            {state}
        </button>
        </>
    )
  }

export default Button;