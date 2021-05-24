
export class DataHandler  {

    dataStore = {
        "salary": localStorage.getItem("salary"),
        "userName" : localStorage.getItem("userName"),
        "savings" : localStorage.getItem("savings"),
        "savingsRate" : localStorage.getItem("savingsRate"),
        "savingsFreq" : localStorage.getItem("savingsFreq"),
        "savingsRateAmountPer" : localStorage.getItem("savingsRateAmountPer")
    };

    static singleton = null;
    
    static getInstance(){
        debugger;
        if(DataHandler.singleton == null){
            DataHandler.singleton = new DataHandler();
        }
        return this.singleton;  
    };

    getAllData = () =>{
        return this.dataStore;
    }

    setUsername = (value) =>{
        localStorage.setItem("userName", value);
    }

    setSalary = (value) =>{
        localStorage.setItem("salary", value);
    }

    setSavings = (value) =>{
        localStorage.setItem("savings", value);
    }

    setSavingsRate = (value) =>{
        localStorage.setItem("savingsRate", value);
    }

    setSavingsFreq = (value) =>{
        localStorage.setItem("savingsFreq", value);
    }

    setSavingsRateAmountPer = (value) =>{
        localStorage.setItem("savingsRateAmountPer", value);
    }
    
    //checks all entries have data
    validateAll = () => {
        for(let element in this.dataStore) {
            if(this.dataStore[element] == ""){
                return false;
            }
        };
        return true;
    }
}