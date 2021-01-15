import { Image, Card, Button } from "react-bootstrap";
import noImage from "../../img/no-image.png";

const MovieItem = (props) => {
  const { Title, Poster, Year, addNominated } = props;

  const imgSrc = Poster === "N/A" ? noImage : Poster;

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
            <Button
              variant="warning"
              size="sm"
              style={{ float: "right" }}
              onClick={() => addNominated({ Title, Poster, Year })}
            >
              Nominate
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
