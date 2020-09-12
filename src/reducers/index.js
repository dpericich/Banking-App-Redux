import {combineReducers} from 'redux';

import balanceBankTotal from './balanceBankTotal'
import updateCustomer from './updateCustomer';
import trackCustomersList from './trackCustomerList';

const allReducers = combineReducers({
    balanceBankTotal: balanceBankTotal,
    updateCustomer: updateCustomer,
    trackCustomersList: trackCustomersList,
})

export default allReducers;