import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../services/APIServices";

export const ContactCard = ({ contact }) => {

     const {store, dispatch} =useGlobalReducer()

    return (
        <li className="row contact">
            <div className="col-md-3 photo">
                <img 
                    src="https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg" 
                    className=" rounded-circle " 
                    alt="" 
                    srcSet="" 
                    style={{ width: "150px", height: "150px", objectFit: "cover" }} 
                />
            </div>
            <div className="col-md-7 col-10 my-auto">
                <div className="name fw-bold fs-3 text">{contact.name}</div>
                <div className="address"><i className="fa-solid fa-location-dot me-2"></i>{contact.address}</div>
                <div className="phone"><i className="fa-solid fa-phone me-2"></i>{contact.phone}</div>
                <div className="email"><i className="fa-solid fa-envelope me-2"></i>{contact.email}</div>
            </div>
            <div className="col-md-2 col-2">
                <Link to={`/edit/${contact.id}`} className="col-6">
                    <i className="fa-solid fa-pen-to-square" ></i>
                </Link>


                {/* <FontAwesomeIcon icon={faTrashCan} onClick={()=>{actions.deleteContact(contact.id)}} className="col-6" /> */}
                <i className="fa-solid fa-trash col-6" data-bs-toggle="modal" data-bs-target={`#modal-${contact.id}`} onClick={() => {
                    //actions.contactToDelete(contact);
                }} ></i>


                <div className="modal fade" id={`modal-${contact.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                Are you sure you want delete {contact.name} ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                    deleteContact(dispatch, contact.id)
                                }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}