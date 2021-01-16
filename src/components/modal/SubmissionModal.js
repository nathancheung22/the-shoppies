import { Modal, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SubmissionModal = (props) => {
  const { showModal, closeModal, nominated } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      {/* temp code */}
      <Alert variant="success" style={{ margin: 0 }}>
        <Alert.Heading>
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: 15 }} />
          Nominations Submitted
        </Alert.Heading>
        <h6>
          Congratulations! We've submitted your nominations. These will definitely go into the right
          hands
        </h6>

        <p>Your nominations:</p>
        <ol>
          {nominated.map((movie, index) => (
            <li key={index} style={{ fontWeight: "bold" }}>
              <span style={{ fontWeight: "normal" }}>{movie.Title}</span>
            </li>
          ))}
        </ol>
      </Alert>
    </Modal>
  );
};

export default SubmissionModal;
