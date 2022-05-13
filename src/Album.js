import { Link } from 'react-router-dom';

export default function Album({
  album: { id, title, artist, released, minutes, tracks, producer, genres },
}) {
  return (
    <Link to={`/albums/${id}`}>
      <div className="album">
        <p>
          <i>
            <strong>Album Title:</strong>
          </i>{' '}
          {title}
        </p>
        <p>
          <i>
            <strong>Artist:</strong>
          </i>
          {artist}
        </p>
        <p>
          <i>
            <strong>Release Date:</strong>
          </i>{' '}
          {released}
        </p>
        <p>
          <i>
            <strong>Run Time in Minutes:</strong>
          </i>{' '}
          {minutes}
        </p>
        <p>
          <i>
            <strong>Number of Tracks:</strong>
          </i>{' '}
          {tracks}
        </p>
        <p>
          <i>
            <strong>Produced by:</strong>
          </i>{' '}
          {producer}
        </p>
        <p>
          <i>
            <strong>Genres:</strong>
          </i>{' '}
          {genres}
        </p>
      </div>
    </Link>
  );
}
