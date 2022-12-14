import { Header, Footer, MovieCard } from '../components';
import loading_spinner from './../assets/loading_spinner.gif';
import { useState, useEffect } from 'react';
import { MoviesService } from '../services';

const HomePage = () => {
  const [movies, setMovies] = useState('Loading');
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MoviesService.getMovies(pageNo);
        setMovies(response);
      } catch (e) {
        console.log('ERROR: ', e);
        alert(e);
      }
    };
    fetchMovies();
  }, [pageNo]);

  if (movies === 'Loading' || !movies || movies.length === 0)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-700">
        <img src={loading_spinner} alt="loading" height="200px" width="200px" />
      </div>
    );

  return (
    <>
      <Header />
      <div className="bg-gray-700 min-h-screen flex flex-col items-center h-full">
        <div className="flex flex-wrap justify-evenly">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="w-[250px] mt-5 pb-10 font-bold">
          <button
            className="bg-white rounded-full px-4 mr-2  hover:border-black border-2  hover:font-bold "
            onClick={() => {
              if (pageNo > 1) {
                setMovies('Loading');
                setPageNo(prev => prev - 1);
              }
            }}>
            Previous
          </button>
          {pageNo}
          <button
            className="bg-white rounded-full px-4 ml-2 hover:border-black border-2  hover:font-bold "
            onClick={() => {
              if (pageNo < 20) {
                setMovies('Loading');
                setPageNo(prev => prev + 1);
              }
            }}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
