import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/search-bar/SearchBar";
import MovieList from "./components/movie-list/MovieList";
import NominationList from "./components/nomination-list/NominationList";
import useStickyState from "./util/useStickyState";
import "./App.css";
import dab from "./img/dab.gif";
import money from "./img/money.gif";
import logo from "./img/logo.png";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tooManyResults, setTooManyResults] = useState(false);
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
          <a href="https://www.linkedin.com/in/nacheung22/" target="_blank" rel="noreferrer">
            <img src={money} alt="" style={{ float: "right", height: 110, marginTop: 15 }} />
          </a>
          <a href="https://www.ncheung.ca/" target="_blank" rel="noreferrer">
            <img
              src={dab}
              alt=""
              style={{ float: "right", height: 110, marginTop: 15, marginRight: 25 }}
            />
          </a>

          <a href="/" style={{ display: "inline-block" }}>
            <img src={logo} alt="" style={{ marginTop: 25, height: 125, marginBottom: 20 }} />
          </a>

          <SearchBar setSearchQuery={setSearchQuery} tooManyResults={tooManyResults} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList
            setTooManyResults={setTooManyResults}
            nominated={nominated}
            searchQuery={searchQuery}
            addNominated={addNominated}
          />
        </Col>
        <Col>
          <NominationList
            nominated={nominated}
            setNominated={setNominated}
            removeNominated={removeNominated}
          />
        </Col>
      </Row>
      <Row>
        <p style={{ display: "inline-block", marginLeft: 10, position: "relative", top: 30 }}>
          By Nathan Cheung
        </p>
      </Row>
    </Container>
  );
};
export default App;
