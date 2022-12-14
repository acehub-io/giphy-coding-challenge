import './SearchButton.css';

export default function SearchButton(props) {
  return (
    <section>
      <button className={`btn-${props.variant}`} onClick={props.onClick}>
        <div className='search-container'>
          <span>{props.text}</span>
        </div>
      </button>
    </section>
  );
}
