import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SubmissionModal = (props) => {
  const { showModal, closeModal, nominated } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: 15 }} />
          Nominations Submitted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default SubmissionModal;
