import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    axios
    .get('/gallery')
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
      </div>
    );
}

export default App;
