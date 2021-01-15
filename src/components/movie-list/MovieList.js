import MovieListPagination from "./MovieListPagination";
import { Card } from "react-bootstrap";
import MovieItem from "./MovieItem";
import { useState } from "react";
import useDidMountEffect from "../../util/useDidMountEffect";
import searchMovie from "../../api/searchMovie";

const MovieList = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [moviesObj, setMoviesObj] = useState({ totalResults: "0", Search: [] });
  const [hasMovie, setHasMovie] = useState(true);

  const { totalResults, Search } = moviesObj;
  const { searchQuery, addNominated, nominated, setTooManyResults } = props;

  // update the movie list if searchQuery or pageNumber has been changed
  useDidMountEffect(() => {
    searchMovie(searchQuery, pageNumber).then((data) => {
      if (data.Response === "True") {
        setMoviesObj(data);
        setTooManyResults(false);
        setHasMovie(true);
      } else if (data.Error === "Movie not found!") {
        setHasMovie(false);
      } else if (data.Error === "") {
        setTooManyResults(true);
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
          {hasMovie
            ? Search.map((data, index) => (
                <MovieItem
                  {...data}
                  key={index}
                  nominated={nominated}
                  addNominated={addNominated}
                />
              ))
            : "no results"}
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
