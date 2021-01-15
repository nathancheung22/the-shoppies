import MovieListPagination from "./MovieListPagination";
import { Card } from "react-bootstrap";
import MovieItem from "./MovieItem";
import { useState } from "react";
import useDidMountEffect from "../../util/useDidMountEffect";
import searchMovie from "../../api/searchMovie";

const MovieList = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [moviesObj, setMoviesObj] = useState({ totalResults: "0", Search: [] });

  const { totalResults, Search } = moviesObj;
  const { searchQuery, addNominated, nominated, setTooManyResults } = props;

  // update the movie list if searchQuery or pageNumber has been changed
  useDidMountEffect(() => {
    searchMovie(searchQuery, pageNumber).then((data) => {
      if (data.Response === "False") {
        setTooManyResults(true);
      } else {
        setMoviesObj(data);
        setTooManyResults(false);
      }
    });
  }, [searchQuery, pageNumber]);

  const numOfPages = totalResults === "0" ? 0 : parseInt(parseInt(totalResults) / 10) + 1;

  return (
    <Card style={{ marginTop: 35, height: "65vh" }}>
      <Card.Body>
        <h5>
          {searchQuery === "" ? "Search a movie to see results!" : `Results for "${searchQuery}"`}
        </h5>
        {/* Adds movie items */}
        <div className="list-overflow">
          {Search.map((data, index) => (
            <MovieItem {...data} key={index} nominated={nominated} addNominated={addNominated} />
          ))}
        </div>

        <MovieListPagination
          numOfPages={numOfPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Card.Body>
    </Card>
  );
};

export default MovieList;
