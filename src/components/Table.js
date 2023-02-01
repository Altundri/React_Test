function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Relationship Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.fullName}</td>
              <td>{data.tgl_lahir}</td>
              <td>{data.hubungan}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
