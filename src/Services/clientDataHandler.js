
export class DataHandler {
  dataStore = {
    userName: localStorage.getItem("userName"),
    salary: localStorage.getItem("salary"),
    savings: localStorage.getItem("savings"),
    savingsRate: localStorage.getItem("savingsRate"),
    savingsFreq: localStorage.getItem("savingsFreq"),
    savingsRateAmountPer: localStorage.getItem("savingsRateAmountPer"),
    lessonData: localStorage.getItem("lessonData"),
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

  // setCompletedLessons = (value) => {
  //   localStorage.setItem("lessonData", value);
  // };

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

  hasLessonStructure = () => {
    if(this.dataStore.lessonData == undefined){
      return false;
    }
    return true;
  }

  // sets base lesson json array if none have been setup.
  setLessonStructure = () => {
    let lessonStructure = {
      lessons: [{
        id: 1,
        completed: false,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
      {
        id: 4,
        completed: false,
      },
      {
        id: 5,
        completed: false,
      },
      {
        id: 6,
        completed: false,
      },
      {
        id: 7,
        completed: false,
      }]
    }
    localStorage.setItem("lessonData", JSON.stringify(lessonStructure));
    this.dataStore.lessonData = JSON.stringify(lessonStructure);
  }

  //return lesson data
  getLesson = (id) => {
    let data =  JSON.parse(this.dataStore.lessonData);
    return data.lessons[id-1];
  }

  //set lesson complete
  setLessonComplete = (id) => {
    let jsonData = JSON.parse(this.dataStore.lessonData);
    jsonData.lessons[id-1].completed = true;
    localStorage.setItem("lessonData", JSON.stringify(jsonData));
    this.dataStore.lessonData = JSON.stringify(jsonData);
  }

  getLessonStatus = (id) => {
    let jsonData = JSON.parse(this.dataStore.lessonData);
    return jsonData.lessons[id-1].completed;
    
  }

  deleteData = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("salary");
    localStorage.removeItem("savings");
    localStorage.removeItem("savingsRate");
    localStorage.removeItem("savingsFreq");
    localStorage.removeItem("savingsRateAmountPer");
    localStorage.removeItem("lessonData");
    this.dataStore = {};
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