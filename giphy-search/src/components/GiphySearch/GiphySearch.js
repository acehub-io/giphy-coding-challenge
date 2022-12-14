import SearchButton from '../SearchButton/SearchButton';
import './GiphySearch.css';
import { ReactComponent as SearchIcon } from './search.svg';

function GiphySearch(props) {
  return (
    <div className='container-giphy-list'>
      <SearchIcon />
      <input type='text' name='name' value='search'></input>
      <SearchButton text='X' />
    </div>
  );
}
export default GiphySearch;
