import { Card } from "react-bootstrap";
import NominatedItem from "./NominatedItem";

const NominationList = (props) => {
  const { nominated, removeNominated } = props;

  return (
    <Card style={{ marginTop: 35, height: "65vh" }}>
      <Card.Body>
        <h5>Your Nominations from 1 - 5 in ascending order:</h5>

        <div className="list-overflow">
          {nominated.map((movie, index) => (
            <NominatedItem {...movie} key={index} removeNominated={removeNominated} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default NominationList;
