import { Pagination } from "react-bootstrap";

const MovieListPagination = (props) => {
  const { numOfPages, pageNumber, setPageNumber } = props;

  // create pagination ellipsis depending if its too long
  const createPaginationBody = () => {
    if (numOfPages <= 9) {
      return [...Array.from({ length: numOfPages }, (_, i) => i + 1)].map((num) => (
        <Pagination.Item key={num} active={num === pageNumber} onClick={() => setPageNumber(num)}>
          {num}
        </Pagination.Item>
      ));
    } else if (pageNumber <= 5) {
      return [1, 2, 3, 4, 5, 6, 7, "...", numOfPages].map((num) =>
        num === "..." ? (
          <Pagination.Ellipsis />
        ) : (
          <Pagination.Item key={num} active={num === pageNumber} onClick={() => setPageNumber(num)}>
            {num}
          </Pagination.Item>
        )
      );
    } else if (pageNumber + 4 >= numOfPages) {
      return [1, "...", ...Array.from({ length: 7 }, (_, i) => numOfPages - 6 + i)].map((num) =>
        num === "..." ? (
          <Pagination.Ellipsis />
        ) : (
          <Pagination.Item key={num} active={num === pageNumber} onClick={() => setPageNumber(num)}>
            {num}
          </Pagination.Item>
        )
      );
    } else {
      return [
        1,
        "...",
        ...Array.from({ length: 5 }, (_, i) => pageNumber - 2 + i),
        "...",
        numOfPages,
      ].map((num) =>
        num === "..." ? (
          <Pagination.Ellipsis />
        ) : (
          <Pagination.Item key={num} active={num === pageNumber} onClick={() => setPageNumber(num)}>
            {num}
          </Pagination.Item>
        )
      );
    }
  };

  const paginationBody = createPaginationBody();

  // create pagination
  return (
    <div style={{ marginTop: 14 }}>
      <Pagination>
        <Pagination.First onClick={() => setPageNumber(1)} />
        <Pagination.Prev
          onClick={() => (pageNumber - 1 >= 1 ? setPageNumber(pageNumber - 1) : null)}
        />
        {paginationBody}
        <Pagination.Next
          onClick={() => (pageNumber + 1 <= numOfPages ? setPageNumber(pageNumber + 1) : null)}
        />
        <Pagination.Last onClick={() => setPageNumber(numOfPages)} />
      </Pagination>
    </div>
  );
};

export default MovieListPagination;
