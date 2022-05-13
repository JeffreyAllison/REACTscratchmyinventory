import { useState } from 'react';
import { createAlbum } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const history = useHistory();
  const [formAlbum, setFormAlbum] = useState({
    title: '',
    artist: '',
    released: '',
    minutes: '',
    tracks: '',
    producer: '',
    genres: '',
  });

  async function handleSubmitAlbum(e) {
    e.preventDefault();

    await createAlbum(formAlbum);

    history.push('/albums');
  }
  return (
    <div className="create-album-form">
      <form onSubmit={handleSubmitAlbum}>
        <h2>Create an Album for the Inventory</h2>
        <label>
          <input
            value={formAlbum.title}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, title: e.target.value })}
            name="title"
          />
        </label>
        <label>
          <input
            value={formAlbum.artist}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, artist: e.target.value })}
            name="artist"
          />
        </label>
        <label>
          <input
            value={formAlbum.released}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, released: e.target.value })}
            name="released"
          />
        </label>
        <label>
          <input
            value={formAlbum.minutes}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, minutes: e.target.value })}
            name="minutes"
          />
        </label>
        <label>
          <input
            value={formAlbum.tracks}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, tracks: e.target.value })}
            name="tracks"
          />
        </label>
        <label>
          <input
            value={formAlbum.producer}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, producer: e.target.value })}
            name="producer"
          />
        </label>
        <label>
          <input
            value={formAlbum.genres}
            type="text"
            onChange={(e) => setFormAlbum({ ...formAlbum, genres: e.target.value })}
            name="genres"
          />
        </label>
        <button>Add Album to Inventory</button>
      </form>
    </div>
  );
}
