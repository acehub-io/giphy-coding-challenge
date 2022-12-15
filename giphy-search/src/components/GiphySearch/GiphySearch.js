import { useState } from 'react';
import './GiphySearch.css';

let APIKEY = 'XsI4tsmH0t4FjJ0SXp6nVIkDN6mXD2GS';

function GiphySearch() {
  const [data, setData] = useState([]);
  const [gif, setGif] = useState([]);
  const [value, setValue] = useState('Search giphy');
  const [showSearchContainer, setShowSearchContainer] = useState(true);

  function searchGif(e) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${e.target.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((content) => {
        setData(content.data);
      })
      .then(() => {
        setValue('Search giphy');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleClick = (e) => {
    setShowSearchContainer(false);
    setGif(e.target);
    setValue('Search giphy');
  };

  return (
    <>
      {showSearchContainer && (
        <div className='container-giphy-list'>
          <input
            type='text'
            defaultValue={value}
            name='name'
            onFocus={(e) => {
              e.target.value = '';
            }}
            onChange={(e) => searchGif(e)}
          ></input>

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
        </div>
      )}
      {gif.length !== 0 && (
        <div className='gif-upsized-container' id={gif.id}>
          <img className='gif-upsized' alt={gif.alt} src={gif.src} />
        </div>
      )}
    </>
  );
}
export default GiphySearch;
