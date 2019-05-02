import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class EditClient extends Component {
  constructor(props) {
    super(props);

    // Create refs

    this.firstNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;

    // Update
    const updatedClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance:
        this.balanceInput.current.value === ""
          ? 0
          : this.balanceInput.current.value
    };

    firestore
      .update({ collection: "clients", doc: client.id }, updatedClient)
      .then(() => history.push("/"));
  };

  render() {
    const { client, settings } = this.props;
    const { disableBalanceOnEdit } = settings;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back to Dashboard
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Edit Client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    minlenght="2"
                    required
                    ref={this.firstNameInput}
                    onChange={this.onChange}
                    defaultValue={client.firstName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    minlenght="2"
                    required
                    ref={this.lastNameInput}
                    onChange={this.onChange}
                    defaultValue={client.lastName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    ref={this.emailInput}
                    onChange={this.onChange}
                    defaultValue={client.email}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    minlenght="2"
                    required
                    ref={this.phoneInput}
                    onChange={this.onChange}
                    defaultValue={client.phone}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  {disableBalanceOnEdit ? (
                    <input
                      type="text"
                      className="form-control"
                      name="balance"
                      disabled
                      ref={this.balanceInput}
                      onChange={this.onChange}
                      defaultValue={client.balance}
                    />
                  ) : (
                      <input
                        type="text"
                        className="form-control"
                        name="balance"
                        ref={this.balanceInput}
                        onChange={this.onChange}
                        defaultValue={client.balance}
                      />
                    )}
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(({ match: { params: { id } } }) => [
    { collection: "clients", storeAs: "client", doc: id }
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings
  }))
)(EditClient);
