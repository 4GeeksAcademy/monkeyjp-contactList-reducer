import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import * as API from "../services/APIServices";
import { useNavigate } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact => {
						return (
							<ContactCard contact={contact} key={contact.id}/>
						)
					})
				}
			</div>
		</div>
	);
}; 