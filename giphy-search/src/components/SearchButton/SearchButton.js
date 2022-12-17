import './SearchButton.css';

export default function SearchButton(props) {
  return (
    <button onClick={props.onClick}>
      <div className={`search-container ${props.variant}`}>
        <span>{props.text}</span>
      </div>
    </button>
  );
}
