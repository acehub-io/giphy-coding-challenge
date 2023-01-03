import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GiphySearch from './components/GiphySearch/GiphySearch';
import SearchLink from './components/SearchLink/SearchLink';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={<SearchLink to='/search' text='GIF' variant='border' />}
          />
        </Routes>
        <Routes>
          <Route path='/search' element={<GiphySearch />} />
        </Routes>
        <Routes>
          <Route
            exact
            path='/search'
            element={<SearchLink to='/' text='X' />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
