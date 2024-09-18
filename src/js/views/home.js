import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Contact } from "./contact";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContactList();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-end w-100">
        <Link to="/addcontact">
          <button className="btn btn-success btn-lg me-3 mt-5">Add new contact</button>
        </Link>
      </div>
      <h1 className="text-center mb-5">Contact list</h1>
      {console.log(store.contactList)}
      {store.contactList.map((contact) => (
        <Contact
          key={contact.id} // Add unique key prop here
          id={contact.id}
          name={contact.name}
          address={contact.address}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
};

