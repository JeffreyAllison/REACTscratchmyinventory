import { Link } from 'react-router-dom';

export default function Album({
  album: { id, title, artist, released, minutes, tracks, producer, genres },
}) {
  return (
    <Link to={`/albums/${id}`}>
      <div className="album">
        <p>
          <i>Album Title:</i> {title}
        </p>
        <p>
          <i>Artist:</i>
          {artist}
        </p>
        <p>
          <i>Release Date:</i> {released}
        </p>
        <p>
          <i>Run Time in Minutes:</i> {minutes}
        </p>
        <p>
          <i>Number of Tracks: </i> {tracks}
        </p>
        <p>
          <i>Produced by:</i> {producer}
        </p>
        <p>
          <i>Genres:</i> {genres}
        </p>
      </div>
    </Link>
  );
}
