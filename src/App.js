import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/search-bar/SearchBar";
import MovieList from "./components/movie-list/MovieList";
import NominationList from "./components/nomination-list/NominationList";
import useStickyState from "./util/useStickyState";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nominated, setNominated] = useStickyState([], "nomination-list");

  // helper function to add to nominated list
  const addNominated = (data) => {
    if (nominated.length === 5) return;

    // checks if equivalent object is already in array
    for (const { Poster, Title, Year } of nominated) {
      if (data.Poster === Poster && data.Title === Title && data.Year === Year) return;
    }

    setNominated([...nominated, data]);
  };

  // helper function to remove from nominated list
  const removeNominated = (data) => {
    // checks if equivalent object is already in array
    for (let i = 0; i < nominated.length; i++) {
      const { Poster, Title, Year } = nominated[i];
      if (data.Poster === Poster && data.Title === Title && data.Year === Year) {
        setNominated([...nominated.slice(0, i), ...nominated.slice(i + 1)]);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="title">The Shoppies</h2>

          <SearchBar setSearchQuery={setSearchQuery} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList searchQuery={searchQuery} addNominated={addNominated} />
        </Col>
        <Col>
          <NominationList
            nominated={nominated}
            setNominated={setNominated}
            removeNominated={removeNominated}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
