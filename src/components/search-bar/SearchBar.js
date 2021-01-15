import { useState } from "react";
import { Form, Card } from "react-bootstrap";

const SearchBar = (props) => {
  const { setSearchQuery } = props;

  const [keys, setKeys] = useState(new Set());
  const [searchVal, setSearchVal] = useState("");

  const handleKeyDown = (e) => {
    setKeys(keys.add(e.key));

    // if user pressed enter, search for that movie
    // then update the 'global state' moviesArr
    if (keys.has("Enter")) {
      setSearchQuery(searchVal);
    }
  };
  const handleKeyUp = (e) => {
    keys.delete(e.key);
    setKeys(keys);
  };

  return (
    // <div style={{ marginTop: 25, marginBottom: 35 }}>
    <Card>
      <Card.Body>
        <Form.Label htmlFor="search-bar">Search Movie Titles</Form.Label>
        <Form.Control
          id="search-bar"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        <Form.Text id="search-bar" muted>
          Search any movie/show title from IMDB to nominate!
        </Form.Text>
      </Card.Body>
    </Card>
    // </div>
  );
};

export default SearchBar;
