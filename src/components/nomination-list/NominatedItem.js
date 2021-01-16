import { Image, Card } from "react-bootstrap";
import noImage from "../../img/no-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NominatedItem = (props) => {
  const { Title, Poster, Year, imdbID, removeNominated } = props;

  const imgSrc = Poster === "N/A" ? noImage : Poster;

  return (
    <Card
      bsPrefix="card card-sortable"
      style={{ backgroundColor: "#f4f4f4", marginTop: 3, marginBottom: 3 }}
    >
      <Card.Body bsPrefix="nomination-item">
        <Image
          src={imgSrc}
          style={{ height: 75, width: 50, objectFit: "cover", float: "left" }}
          rounded
        />

        <div style={{ marginLeft: 60 }}>
          <h6>{`${Title} - (${Year})`}</h6>
          <a
            href={`https://www.imdb.com/title/${imdbID}/`}
            target="_blank"
            rel="noreferrer"
            style={{ float: "left" }}
          >
            View on IMDb
          </a>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ float: "right" }}
            onClick={() => removeNominated({ Title, Poster, Year })}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default NominatedItem;
