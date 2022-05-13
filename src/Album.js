import { Link } from 'react-router-dom';

export default function Album({
  album: { id, title, artist, released, minutes, tracks, producer, genres },
}) {
  return (
    <Link to={`/albums/${id}`}>
      <div className="album">
        <p>{title}</p>
        <p>{artist}</p>
        <p>{released}</p>
        <p>{minutes}</p>
        <p>{tracks}</p>
        <p>{producer}</p>
        <p>{genres}</p>
      </div>
    </Link>
  );
}
