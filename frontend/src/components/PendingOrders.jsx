const PendingOrders = () => {
    return (
        <>
            <h2>Pending Orders</h2>
            <br/>
             <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Package Name</th>
                  <th scope="col">Tourist</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Tour to Lahore</td>
                  <td>Muhammad Amin</td>
                  <td>80000</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success">Accept</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Tour to Karachi</td>
                  <td>Amir Sohaib</td>
                  <td>60000</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success">Accept</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tour to Thar</td>
                  <td>Zohaib Ali</td>
                  <td>70000</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success">Accept</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>

        </>
    )
}
export default PendingOrders;