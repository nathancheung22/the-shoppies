import { useState } from "react";
import { Form, Card, InputGroup, Button } from "react-bootstrap";

const SearchBar = (props) => {
  const { setSearchQuery, tooManyResults } = props;

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
    <Card>
      <Card.Body>
        <Form.Label htmlFor="search-bar">Search any movie title from IMDb to nominate</Form.Label>

        <InputGroup className="mb-3">
          <Form.Control
            id="search-bar"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            isInvalid={tooManyResults}
            placeholder="Enter search query here..."
          />

          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={() => setSearchQuery(searchVal)}
              style={{ borderTopRightRadius: "0.25rem", borderBottomRightRadius: "0.25rem" }}
            >
              Search
            </Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid">
            Too many results! Please try again with a more specific query
          </Form.Control.Feedback>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
