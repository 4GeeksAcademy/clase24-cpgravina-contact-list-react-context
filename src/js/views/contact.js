import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import img from "../../img/img.jpg";

export const Contact = ({ id, name, address, phone, email }) => {
  const { actions } = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAddress, setEditedAddress] = useState(address);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    actions.updateContact({
      id,
      full_name: editedName,
      address: editedAddress,
      phone: editedPhone,
      email: editedEmail,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this contact?")) {
      actions.deleteContact(id);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedAddress(address);
    setEditedPhone(phone);
    setEditedEmail(email);
  };

  return (
    
    <div className="container">
      <div className="card d-flex flex-column flex-md-row p-3 my-3">
        <img
          src={img}
          className="img-thumbnail rounded-circle border-0 mb-3 mb-md-0"
          alt="contact"
          style={{ width: "100%", maxWidth: "150px", height: "auto" }}
        />
        <div className="card-body">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="form-control mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                className="form-control mb-2"
                placeholder="Address"
              />
              <input
                type="text"
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
                className="form-control mb-2"
                placeholder="Phone"
              />
              <input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="form-control mb-2"
                placeholder="Email"
              />
              <div className="mt-2">
                <button onClick={handleSave} className="btn btn-primary me-2">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h5 className="card-title fs-5">{name}</h5>
              <div className="d-flex flex-column flex-sm-row mb-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                <p>{address}</p>
              </div>
              <div className="d-flex flex-column flex-sm-row mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                <p>{phone}</p>
              </div>
              <div className="d-flex flex-column flex-sm-row">
                <i className="fa-solid fa-envelope me-2"></i>
                <p>{email}</p>
              </div>
            </>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 mt-md-0">
          {!isEditing && (
            <>
              <i
                className="fa-solid fa-pen text-primary me-2"
                onClick={handleEdit}
                style={{ cursor: 'pointer' }}
              ></i>
              <i
                className="fa-solid fa-trash text-danger"
                onClick={handleDelete}
                style={{ cursor: 'pointer' }}
              ></i>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
