
export class DataHandler {
  dataStore = {
    userName: localStorage.getItem("userName"),
    salary: localStorage.getItem("salary"),
    savings: localStorage.getItem("savings"),
    savingsRate: localStorage.getItem("savingsRate"),
    savingsFreq: localStorage.getItem("savingsFreq"),
    savingsRateAmountPer: localStorage.getItem("savingsRateAmountPer"),
    completedLessons: localStorage.getItem("completedLessons"),
  };

  static singleton = null;

  static getInstance() {
    if (DataHandler.singleton == null) {
      DataHandler.singleton = new DataHandler();
    }
    return this.singleton;
  }

  getAllData = () => {
    return this.dataStore;
  };
  
  getUsername = () => {
    return this.dataStore.userName;
  };

  setUsername = (value) => {
    localStorage.setItem("userName", value);
    this.dataStore.userName = value;
  };

  setSalary = (value) => {
    localStorage.setItem("salary", value);
  };

  setSavings = (value) => {
    localStorage.setItem("savings", value);
  };

  setSavingsRate = (value) => {
    localStorage.setItem("savingsRate", value);
  };

  setSavingsFreq = (value) => {
    localStorage.setItem("savingsFreq", value);
  };

  setSavingsRateAmountPer = (value) => {
    localStorage.setItem("savingsRateAmountPer", value);
  };

  setCompletedLessons = (value) => {
    localStorage.setItem("completedLessons", value);
  };

  setAny(input) {
    localStorage.setItem([input.target.name], input.target.value);
  }

  //checks all entries have data.
  validateAll = () => {
    for (let element in this.dataStore) {
      if (this.dataStore[element] == null) {
        return false;
      }
    }
    return true;
  };

  hasAnyData= () => {
    let hasData = false;
    for (let element in this.dataStore) {
      if (this.dataStore[element] != null) {
        hasData = true;
      }
    }
    if(hasData == true){
      return true;
    }
  }

  //simple name check validator
  validName = () =>{
    if(this.dataStore.userName != null){
      return true;
    }
    return false;
  }

  //checks saving specific properties are valid.
  validateSavings = () => {
      if(this.dataStore.savings != null
      && this.dataStore.savingsFreq != null
      && this.dataStore.savingsRate != null
      && this.dataStore.savingsRateAmountPer != null){
          return true;
      }
      return false;
  }

  deleteData = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("salary");
    localStorage.removeItem("savings");
    localStorage.removeItem("savingsRate");
    localStorage.removeItem("savingsFreq");
    localStorage.removeItem("savingsRateAmountPer");
    localStorage.removeItem("completedLessons");
  }

  // setAllFormData(data){
  //     localStorage.setItem("userName", data.get("username"));
  //     localStorage.setItem("salary", data.get("salary"));
  //     localStorage.setItem("savings", data.get("savings"));
  //     localStorage.setItem("savingsRate", data.get("savingsRate"));
  //     localStorage.setItem("savingsFreq", data.get("savingsFreq"));
  //     localStorage.setItem("savingsRateAmountPer", data.get("savingsRateAmountPer"));
  // }
}