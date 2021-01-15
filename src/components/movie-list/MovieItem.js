import { Image, Card, Button } from "react-bootstrap";
import noImage from "../../img/no-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const MovieItem = (props) => {
  const { Title, Poster, Year, nominated, addNominated } = props;

  const imgSrc = Poster === "N/A" ? noImage : Poster;

  // check if item is already nominated
  let isNominated = false;
  for (const data of nominated) {
    if (data.Title === Title && data.Poster === Poster && data.Year === Year) {
      isNominated = true;
      break;
    }
  }

  // return button based on if it's already nominated or not
  const nominatedButton = isNominated ? (
    <Button variant="success" size="sm" style={{ float: "right" }}>
      <FontAwesomeIcon icon={faCheck} style={{ marginRight: 4 }} />
      Nominated
    </Button>
  ) : (
    <Button
      variant="warning"
      size="sm"
      style={{ float: "right" }}
      onClick={() => addNominated({ Title, Poster, Year })}
    >
      Nominate
    </Button>
  );

  return (
    <Card style={{ backgroundColor: "#f4f4f4", marginTop: 3, marginBottom: 3 }}>
      <Card.Body bsPrefix="nomination-item">
        <Image
          src={imgSrc}
          style={{ height: 75, width: 50, objectFit: "cover", float: "left" }}
          rounded
        />

        <div style={{ marginLeft: 60 }}>
          <h6>{Title}</h6>
          <div>
            <p style={{ float: "left" }}>{Year}</p>
            {nominatedButton}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
