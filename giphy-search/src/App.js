import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GiphySearch from './components/GiphySearch/GiphySearch';
import SearchLink from './components/SearchLink/SearchLink';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={<SearchLink to='/list' text='GIF' variant='border' />}
          />
        </Routes>
        <Routes>
          <Route path='/list' element={<GiphySearch />} />
        </Routes>
        <Routes>
          <Route exact path='/list' element={<SearchLink to='/' text='X' />} />
        </Routes>
        <Routes>
          <Route exact path='/gif' element={<SearchLink to='/' text='X' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
