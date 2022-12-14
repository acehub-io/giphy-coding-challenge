import './SearchButton.css';

function SearchButton(props) {
  return (
    <button className={`btn-${props.variant}`} onClick={props.onClick}>
      <div className='search-container'>
        <span>{props.text}</span>
      </div>
    </button>
  );
}
export default SearchButton;
