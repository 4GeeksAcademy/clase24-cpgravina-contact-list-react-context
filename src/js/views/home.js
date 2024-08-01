import React, { useContext, useEffect, useState } from "react"; //importar hook use context
import "../../styles/home.css";
import { Context } from "../store/appContext"; //importar desde appContext
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
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      {console.log(store.contactList)}
      {store.contactList.map((contact) => {
        return <Contact {...contact} />;
      })}
    </div>
  );
};
