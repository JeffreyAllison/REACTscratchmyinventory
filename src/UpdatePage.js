import React, { useState, useEffect } from 'react';
import { getAlbumById, updateAlbum } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [formAlbum, setFormAlbum] = useState({
    title: '',
    artist: '',
    released: '',
    minutes: 0,
    tracks: 0,
    producer: '',
    genres: '',
  });

  useEffect(() => {
    async function load() {
      const album = await getAlbumById(id);
      setFormAlbum(album);
    }
    load();
  }, [id]);

  async function handleUpdateAlbum(e) {
    e.preventDefault();

    await updateAlbum(id, formAlbum);

    push('/albums');
  }
  return (
    <div>
      <h2 className="update-heading">
        <i>Update an Album for the Inventory</i>
      </h2>
      <form className="create-album-form" onSubmit={handleUpdateAlbum}>
        <label>
          Album Title
          <br></br>
          <input
            value={formAlbum.title}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, title: e.target.value })}
            name="title"
          />
        </label>
        <br></br>
        <label>
          Artist
          <br></br>
          <input
            value={formAlbum.artist}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, artist: e.target.value })}
            name="artist"
          />
        </label>
        <br></br>
        <label>
          Release Date
          <br></br>
          <input
            value={formAlbum.released}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, released: e.target.value })}
            name="released"
          />
        </label>
        <br></br>
        <label>
          Run Time in minutes
          <br></br>
          <input
            value={formAlbum.minutes}
            type="number"
            onChange={(e) => setFormAlbum({ ...formAlbum, minutes: e.target.value })}
            name="minutes"
          />
        </label>
        <br></br>
        <label>
          # of Tracks
          <br></br>
          <input
            value={formAlbum.tracks}
            type="number"
            onChange={(e) => setFormAlbum({ ...formAlbum, tracks: e.target.value })}
            name="tracks"
          />
        </label>
        <br></br>
        <label>
          Produced by
          <br></br>
          <input
            value={formAlbum.producer}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, producer: e.target.value })}
            name="producer"
          />
        </label>
        <br></br>
        <label>
          genres
          <br></br>
          <input
            value={formAlbum.genres}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, genres: e.target.value })}
            name="genres"
          />
        </label>
        <br></br>
        <br></br>
        <button>Update Album data</button>
      </form>
    </div>
  );
}
