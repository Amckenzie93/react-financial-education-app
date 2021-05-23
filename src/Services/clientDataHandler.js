
let dataStore = {
    "salary": localStorage.getItem("salary"),
    "userName" : localStorage.getItem("userName"),
    "savings" : localStorage.getItem("savings"),
    "savingsRate" : localStorage.getItem("savingsRate"),
    "savingsFreq" : localStorage.getItem("savingsFreq"),
    "savingsRateAmountPer" : localStorage.getItem("savingsRateAmountPer")
}

export default {
    getData : () => dataStore,

    setData : val => {
        dataStore = val;
    }

}

