import { useState } from 'react';
import GiphyList from '../GiphyList/GiphyList';
import SearchButton from '../SearchButton/SearchButton';
import './GiphySearch.css';
import { ReactComponent as SearchIcon } from './search.svg';
import { Link } from 'react-router-dom';

let APIKEY = 'XsI4tsmH0t4FjJ0SXp6nVIkDN6mXD2GS';

function GiphySearch() {
  const [data, setData] = useState([]);
  const [gif, setGif] = useState([]);

  function searchGif(e) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${e.target.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((content) => {
        setData(content.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleClick = (e) => {
    setData([]);
    setGif(e.target);
  };

  return (
    <div className='container-giphy-list'>
      <SearchIcon />
      <input type='text' name='name' onChange={(e) => searchGif(e)}></input>
      <Link to='/'>
        <SearchButton text='X' />
      </Link>
      <GiphyList />
      <div className='gif-results-container'>
        {data &&
          data.map((item) => {
            return (
              <div id={item.id}>
                <img
                  className='gif-img'
                  alt='gif'
                  src={item.images.downsized.url}
                  onClick={(e) => handleClick(e)}
                />
              </div>
            );
          })}
      </div>
      {gif.length !== 0 && (
        <div id={gif.id}>
          <img className='gif-img-details' alt={gif.alt} src={gif.src} />
        </div>
      )}
    </div>
  );
}
export default GiphySearch;
