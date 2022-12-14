import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="w-[21rem] max-w-[100%] bg-[#7c8695] rounded-xl p-3 text-white m-5 
      flex flex-col cursor-pointer text-xl hover:scale-[103%]">
        <img
          className="w-full self-center rounded-lg h-[476px]"
          src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
          alt="poster"
        />
        <h3 className="my-1">{movie.title}</h3>
        <h3 className="my-1">⭐{movie.vote_average.toFixed(1)}/10</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
