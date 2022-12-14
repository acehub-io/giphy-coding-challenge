import GiphyList from '../GiphyList/GiphyList';
import SearchButton from '../SearchButton/SearchButton';
import './GiphySearch.css';
import { ReactComponent as SearchIcon } from './search.svg';

let APIKEY = 'XsI4tsmH0t4FjJ0SXp6nVIkDN6mXD2GS';

function searchGif(e) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${e.target.value}`;
  console.log('url-->', url);

  fetch(url)
    .then((res) => res.json())
    .then((content) => {
      console.log(content.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function GiphySearch(props) {
  return (
    <div className='container-giphy-list'>
      <SearchIcon />
      <input
        type='text'
        name='name'
        // value='search'
        onChange={(e) => searchGif(e)}
      ></input>
      <SearchButton text='X' />
      <GiphyList />
    </div>
  );
}
export default GiphySearch;
