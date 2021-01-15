import { Pagination } from "react-bootstrap";

const MovieListPagination = (props) => {
  const { numOfPages, pageNumber, setPageNumber } = props;

  // create pagination
  return (
    <div style={{ marginTop: "14px" }}>
      <Pagination>
        {[...Array.from({ length: numOfPages }, (_, i) => i + 1)].map((num) => (
          <Pagination.Item key={num} active={num === pageNumber} onClick={() => setPageNumber(num)}>
            {num}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default MovieListPagination;
