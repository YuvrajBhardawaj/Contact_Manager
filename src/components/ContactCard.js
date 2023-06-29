import React, { PureComponent } from 'react';
import user from "../images/user.png";

export class ContactCard extends PureComponent {
  handleDeleteClick = () => {
    const { contact, onDeleteContact } = this.props;
    onDeleteContact(contact.id);
  };
  render() {
    const { FirstName, LastName, Phone, email } = this.props.contact;

    return (
      <div className="row list">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div>
              <img id="user" src={user} alt="user" />
            </div>
            <div>
              <h5>
                {FirstName} {LastName}
              </h5>
            </div>
            <button
              type="button"
              className="btn btn-light"
              onClick={this.handleDeleteClick}
            >
              <span className="bi bi-trash"></span>
            </button>
          </div>
          <div className="col">
            <div className="d-flex justify-content-start">Phone No: {Phone}</div>
            <div className="d-flex justify-content-start">Email: {email}</div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default ContactCard;
