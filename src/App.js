import React, { useState } from "react";
import "./styles.css";
import showsList from "./shows.js";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Sitcom");

  const handleSelectedGenre = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <nav className="navigation">
        <p>TR</p>
      </nav>
      <header className="hero">
        <h1>TV Shows!</h1>
        <p>Hi! Check out my tv shows recommendations below.</p>
      </header>

      <div className="primary-container">
        <div className="primary-buttons">
          {Object.keys(showsList).map((genre) => {
            return (
              <button
                id="genre-button"
                onClick={() => handleSelectedGenre(genre)}
                key={genre}
              >
                {genre}
              </button>
            );
          })}
        </div>

        <div className="primary-shows">
          <ul id="shows-list-ul">
            {showsList[selectedGenre].map((show) => {
              return (
                <li id="show" key={show.name}>
                  <div id="show-poster">
                    <img src={show.poster} alt={show.name} />

                    <div id="show-detail">{show.name}</div>
                    <div id="show-detail">Rating: {show.rating}</div>
                    <div id="show-detail">Synopsis: {show.brief}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-header">
          <p>My show recommendations!</p>
        </div>
        <div className="footer-text">
          <p>
            Check out my show recommendations! Click on the genres to show more
            shows.
          </p>
          <p>
            <i className="fa fa-copyright"></i> | 2021
          </p>
        </div>
      </footer>
    </div>
  );
}
