export const createUser = (name, amount) => {
    return {
        type : "CREATE_USER",
        payload : {
            name : name,
            amount : amount,
        }
    }
}

export const removeUser = (name, amount) => {
    return {
        type : "REMOVE_USER",
        payload : {
            name : name,
            amount : amount,
        }
    }
}

export const withdrawMoney = (name, amount) => {
    return {
        type : "WITHDRAW_AMOUNT",
        payload : {
            name : name,
            amount : amount,
        }
    }
}

export const depositAmount = (name, amount) => {
    return {
        type : "DEPOSIT_AMOUNT",
        payload : {
            name : name,
            amount : amount,
        }
    }
}