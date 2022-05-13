import { useState, useEffect } from 'react';
import { getAlbums } from './services/fetch-utils';
import Album from './Album';

export default function ListPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetch() {
      const returnAlbums = await getAlbums();

      setAlbums(returnAlbums);
    }
    fetch();
  }, []);

  return (
    <div className="albums-list">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
}
