import { Routes, Route, HashRouter } from 'react-router-dom';
import { HomePage, MoviePage, PageNotFound } from './pages';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movie/:movieId" element={<MoviePage />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
