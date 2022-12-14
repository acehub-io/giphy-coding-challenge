import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchButton from './components/SearchButton/SearchButton';
import GiphyList from './components/GiphySearch/GiphySearch';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<SearchButton text='GIF' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
