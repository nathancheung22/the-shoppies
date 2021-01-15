import { Card, Button } from "react-bootstrap";
import NominatedItem from "./NominatedItem";
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import useStickyState from "../../util/useStickyState";
import SubmissionModal from "../modal/SubmissionModal";

const NominationList = (props) => {
  const { nominated, setNominated, removeNominated } = props;
  const [showModal, setShowModal] = useState(false);
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useStickyState(false, "has-submitted");

  const closeModal = () => setShowModal(false);

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
          onClick={() => {
            setShowModal(true);
            setHasAlreadySubmitted(true);
          }}
        >
          {hasAlreadySubmitted ? "Submit Again" : "Submit"}
        </Button>
        <p style={{ marginTop: 7 }}>Drag items to rearrange!</p>

        <SubmissionModal showModal={showModal} closeModal={closeModal} nominated={nominated} />
      </Card.Body>
    </Card>
  );
};

export default NominationList;
