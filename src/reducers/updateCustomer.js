const updateCustomer = (customerFunds = 0, action) => {
    switch(action.type) {
        case "CREATE_USER" :
            return customerFunds + action.payload.amount;
        case "REMOVE_USER" :
            return customerFunds = 0;
        case "ADD_FUNDS" :
            return customerFunds + action.payload.amount;
        case "WITHDRAW_FUNDS" :
            return ((customerFunds - action.payload.amount) > 0) ? customerFunds - action.payload.amount : alert("You don't have enough funds");
        default :
            return customerFunds;
    }
}

export default updateCustomer;