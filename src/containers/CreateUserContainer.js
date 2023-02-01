import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import FamilyComponent from "../components/FamilyComponent";

class CreateUserContainer extends Component {
  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <Container>
        <div>
          <h6>Create New User</h6>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
          <h6>Family Member </h6>
          <FamilyComponent />
        </div>
      </Container>
    );
  }
}

export default connect()(CreateUserContainer);
