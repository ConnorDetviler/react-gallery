import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    axios
    .get('/gallery')
    .then((response) => {
      console.log(response.data);
      setPhotoList(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const lovePhoto = (id) => {
    console.log(id);
    axios
    .put(`/gallery/like/${id}`)
    .then((response) => {
      console.log(response);
      getPhotos();
    })
    .catch((err) => {
      console.log(err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
          photoList = {photoList}
          lovePhoto = {lovePhoto}
        />
      </div>
    );
}

export default App;
