import { Modal, Button } from "react-bootstrap";

const SubmissionModal = (props) => {
  const { showModal, closeModal, nominated } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Nominations Submitted</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Congratulations! We've submitted your nominations. These will definitely go into the right
          hands
        </h6>

        <p>Your nominations:</p>
        <ol>
          {nominated.map((movie, index) => (
            <li key={index}>{movie.Title}</li>
          ))}
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubmissionModal;
