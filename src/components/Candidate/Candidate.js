import ComponentHeader from "../ComponentHeader/ComponentHeader";
import "./Candidate.css";
import eye from "../../assets/eye.png";
import cross from "../../assets/cross.png";

const CandidateStatus = () => {
  return (
    <div className="posted-jobs">
      <ComponentHeader text={"Candidate Status"} />
      <Table />
    </div>
  );
};

export default CandidateStatus;

const Table = () => {
  return (
    <div className="candidate-table">
      <table>
        <tr className="tr-header">
          <th>Job Id</th>
          <th style={{ textAlign: "left" }}>Name</th>
          <th style={{ textAlign: "left" }}>Position</th>
          <th>1st Level</th>
          <th>2nd Level</th>
          <th>3rd Level</th>
          <th>4th Level</th>
          <th>Total Marks</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <TRow
          id={"#001"}
          name={"John Doe"}
          role={"Angular Developer"}
          level={"7/10"}
          status={"Active"}
        />
        <TRow
          id={"#002"}
          name={"John Smith"}
          role={"Python Developer"}
          level={"7/10"}
          status={"Hired"}
          backgroundColor={"rgba(14, 173, 11, 0.15)"}
          color={"rgba(16, 143, 14, 1)"}
        />
        <TRow
          id={"#003"}
          name={"Johnson Smith"}
          role={"Android Developer"}
          level={
            <img
              src={cross}
              style={{ width: "20px" }}
              alt="eye"
              className="pj-eye-icon"
            />
          }
          status={"Reject"}
          backgroundColor={"rgba(231, 59, 59, 0.15)"}
          color={"#D12323"}
        />
        <TRow
          id={"#004"}
          name={"Stella"}
          role={"IOS Developer"}
          level={"7/10"}
          status={"Hired"}
          backgroundColor={"rgba(14, 173, 11, 0.15)"}
          color={"rgba(16, 143, 14, 1)"}
        />
      </table>
    </div>
  );
};

const TRow = ({ id, name, role, level, status, color, backgroundColor }) => {
  return (
    <tr>
      <td>{id}</td>
      <td style={{ textAlign: "left" }}>{name}</td>
      <td style={{ textAlign: "left" }}>{role}</td>
      <td>6/10</td>
      <td>7/10</td>
      <td>{level}</td>
      <td className="td">...</td>
      <td>...</td>
      <td className="data-td">
        <div
          className="table-status"
          style={{ color: color, backgroundColor: backgroundColor }}
        >
          {status}
        </div>
      </td>
      <td>
        <img src={eye} alt="eye" className="pj-eye-icon" />
      </td>
    </tr>
  );
};
