const balanceBankTotal = (bankTotal = 10000, action) => {
    switch (action.type) {
        case "CREATE_USER" :
            return bankTotal + action.payload.amount;
        case "REMOVE_USER" :
            return bankTotal + action.payload.amount;
        case "DEPOSIT_AMOUNT" :
            return bankTotal + action.payload.amount;
        case "WITHDRAW_AMOUNT" :
            return bankTotal - action.payload.amount;
        default :
            return bankTotal;
    }
}

export default balanceBankTotal;