import { Card, Button } from "react-bootstrap";
import NominatedItem from "./NominatedItem";
import { ReactSortable } from "react-sortablejs";
// import { useState } from "react";

const NominationList = (props) => {
  const { nominated, setNominated, removeNominated } = props;
  // const [showModal, setShowModal] = useState(false);

  return (
    <Card style={{ marginTop: 35, height: "65vh" }}>
      <Card.Body>
        <h5>Your Nominations in ascending order:</h5>
        <div className="list-overflow">
          <ReactSortable
            tag="div"
            list={nominated}
            setList={setNominated}
            animation={150}
            handle=".card-sortable"
          >
            {nominated.map((movie, index) => (
              <NominatedItem {...movie} key={index} removeNominated={removeNominated} />
            ))}
          </ReactSortable>
        </div>

        <Button
          variant="primary"
          style={{ float: "right", marginTop: 14 }}
          // onClick={() => setShowModal(true)}
          onClick={() => console.log("show")}
        >
          Submit
        </Button>
        <p style={{ marginTop: 7 }}>Drag items to rearrange!</p>
      </Card.Body>
    </Card>
  );
};

export default NominationList;
