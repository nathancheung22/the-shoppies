import { Card } from "react-bootstrap";
import NominatedItem from "./NominatedItem";
import { ReactSortable } from "react-sortablejs";

const NominationList = (props) => {
  const { nominated, setNominated, removeNominated } = props;

  return (
    <Card style={{ marginTop: 35, height: "65vh" }}>
      <Card.Body>
        <h5>Your Nominations from 1 - 5 in ascending order:</h5>
        <div className="list-overflow">
          <ReactSortable
            tag="div"
            list={nominated}
            setList={setNominated}
            animation={150}
            handle=".fa-bars"
          >
            {nominated.map((movie, index) => (
              <NominatedItem {...movie} key={index} removeNominated={removeNominated} />
            ))}
          </ReactSortable>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NominationList;
