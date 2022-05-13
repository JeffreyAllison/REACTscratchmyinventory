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
  return <div>CreatePage</div>;
}
