

export const getContacts = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/monkey/contacts")
    console.log(response);
    if (!response.ok) {
        createAgenda(dispatch)
        return
    }
    const data = await response.json()
    console.log(data);
    dispatch({type: "set_contacts", payload: data.contacts})
    
}

export const createAgenda = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/monkey", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(response);
    if (response.ok) {
        getContacts(dispatch)
        return
    }
    
}

export const addContact = async (dispatch, contact) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/monkey/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    
    if (response.ok) {
        getContacts(dispatch)
        return
    }
}

export const editContact = async (dispatch, id, contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/monkey/contacts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    
    if (response.ok) {
        getContacts(dispatch)
        return
    }
}

export const deleteContact = async (dispatch, id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/monkey/contacts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    if (response.ok) {
        getContacts(dispatch)
        return
    }
}