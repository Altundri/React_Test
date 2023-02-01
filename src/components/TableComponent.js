import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const columns = [
  {
    dataField: "nama",
    text: "Name",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "eKTP",
    text: "eKTP",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "alamat",
    text: "Address",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "pekerjaan",
    text: "Job",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "tgl_lahir",
    text: "Date of Birth",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "nohp",
    text: "Phone Number",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
  },
  {
    dataField: "link",
    text: "Family",
    style: (cell, row, rowIndex, colIndex) => {
      if (rowIndex % 2 === 0) {
        return {
          backgroundColor: "#ccd4ec",
        };
      }
      return {
        backgroundColor: "#ececf4",
      };
    },
    headerStyle: {
      backgroundColor: "#4874c4",
      color: "white",
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="primary" className="mr-2">
            Show
          </Button>
        </div>
      );
    },
  },
];

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const TableComponent = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h6>List Users</h6>
        </Col>
        <Col>
          <Button href="/create" color="primary" className="mr-2 float-end">
            <FontAwesomeIcon icon={faUserPlus} /> Create New User
          </Button>
        </Col>
      </Row>
      <BootstrapTable keyField="id" data={props.users} columns={columns} />
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
