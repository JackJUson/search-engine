import Search from '../components/Search';
import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="search__page">
      <div className="search__page--header">
        <Search hideButtons/>
        <h1>{ term }</h1>
      </div>
      <div className="search__page--results">

      </div>
    </div>
  )
}

export default SearchPage;