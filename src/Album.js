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
          </i>
          <br></br>
          {title}
        </p>
        <p>
          <i>
            <strong>Artist:</strong>
          </i>
          <br></br>
          {artist}
        </p>
        <p>
          <i>
            <strong>Release Date:</strong>
          </i>
          <br></br>
          {released}
        </p>
        <p>
          <i>
            <strong>Run Time in Minutes:</strong>
          </i>
          <br></br>
          {minutes}
        </p>
        <p>
          <i>
            <strong>Number of Tracks:</strong>
          </i>
          <br></br>
          {tracks}
        </p>
        <p>
          <i>
            <strong>Produced by:</strong>
          </i>
          <br></br>
          {producer}
        </p>
        <p>
          <i>
            <strong>Genres:</strong>
          </i>
          <br></br>
          {genres}
        </p>
      </div>
    </Link>
  );
}
