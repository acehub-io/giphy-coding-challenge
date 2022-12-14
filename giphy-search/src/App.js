import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchButton from './components/SearchButton/SearchButton';
import GiphySearch from './components/GiphySearch/GiphySearch';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Link to='/list'>
                <SearchButton text='GIF' url='/list' />
              </Link>
            }
          />
        </Routes>
        <Routes>
          <Route path='/list' element={<GiphySearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
