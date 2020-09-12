const trackCustomersList = (customers = [], action) => {
    switch(action.type) {
        case "CREATE_USER" :
            return [...customers, action.payload.name];
        case "REMOVE_USER" :
            return customers.filter(name => name !== action.payload.name);
        default :
            return customers;
    }
}

export default trackCustomersList;