import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SearchResults: [{name: '...', artist: '...', album: '...', id: ''}]};
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} s/>
            {"<!-- Add a Playlist component -->"}
          </div>
        </div>
      </div>
    );
  }
}

