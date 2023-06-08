import Pagination from 'react-bootstrap/Pagination';
const PageNumners = () => {
    return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Pagination Component</h4>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
      </Pagination>
    </div>
        );
}
export default PageNumners;