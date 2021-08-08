
export class DataHandler {
  // The acting database object for use throughout the system.
  // Each object property is taken from the devices local storage for this application
  dataStore = {
    userName: localStorage.getItem("userName"),
    salary: localStorage.getItem("salary"),
    savings: localStorage.getItem("savings"),
    savingsRate: localStorage.getItem("savingsRate"),
    savingsFreq: localStorage.getItem("savingsFreq"),
    savingsRateAmountPer: localStorage.getItem("savingsRateAmountPer"),
    lessonData: localStorage.getItem("lessonData"),
    budgetArray: localStorage.getItem("budgetArray"),
  };

  static singleton = null;

  // checks if this singleton object has been instanciated before,
  // if so return that rather than creating another.
  // This is done using the singleton design pattern.
  static getInstance = () => {
    if (DataHandler.singleton == null) {
      DataHandler.singleton = new DataHandler();
    }
    return this.singleton;
  };

  //list of getters and setters for each property
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

  setBudgetArray = (value) => {
    localStorage.setItem("budgetArray", JSON.stringify(value));
    this.dataStore.budgetArray = JSON.stringify(value);
  };

  getBudgetArray = () => {
    let data = JSON.parse(this.dataStore.budgetArray);
    return data;
  };

  setAny(input) {
    localStorage.setItem([input.target.name], input.target.value);
  }

  getLesson = (id) => {
    let data = JSON.parse(this.dataStore.lessonData);
    return data.lessons[id - 1];
  };

  setLessonComplete = (id) => {
    let jsonData = JSON.parse(this.dataStore.lessonData);
    jsonData.lessons[id - 1].completed = true;
    localStorage.setItem("lessonData", JSON.stringify(jsonData));
    this.dataStore.lessonData = JSON.stringify(jsonData);
  };

  getLessonStatus = (id) => {
    let jsonData = JSON.parse(this.dataStore.lessonData);
    return jsonData.lessons[id - 1].completed;
  };

  //DELETE ALL DATA - should be refactored as currently
  // its somewhat a manual process to update new items
  deleteData = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("salary");
    localStorage.removeItem("savings");
    localStorage.removeItem("savingsRate");
    localStorage.removeItem("savingsFreq");
    localStorage.removeItem("savingsRateAmountPer");
    localStorage.removeItem("lessonData");
    localStorage.removeItem("budgetArray");
    this.dataStore = {};
  };

  // should be moved out to component if possible
  validateAll = () => {
    for (let element in this.dataStore) {
      if (this.dataStore[element] == null) {
        return false;
      }
    }
    return true;
  };

  // should be moved out to component if possible
  hasAnyData = () => {
    let hasData = false;
    for (let element in this.dataStore) {
      if (this.dataStore[element] != null) {
        hasData = true;
      }
    }
    if (hasData == true) {
      return true;
    }
  };

  // should be moved out to component if possible
  validName = () => {
    if (this.dataStore.userName != null) {
      return true;
    }
    return false;
  };

  // should be moved out to component if possible
  validateSavings = () => {
    if (
      this.dataStore.savings != null &&
      this.dataStore.savingsFreq != null &&
      this.dataStore.savingsRate != null &&
      this.dataStore.savingsRateAmountPer != null
    ) {
      return true;
    }
    return false;
  };

  // should be moved out to component if possible
  hasLessonStructure = () => {
    if (this.dataStore.lessonData == undefined) {
      return false;
    }
    return true;
  };

  // sets base lesson json array if none have been setup.
  // should be moved out to component if possible
  setLessonStructure = () => {
    let lessonStructure = {
      lessons: [
        {
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
        },
      ],
    };
    localStorage.setItem("lessonData", JSON.stringify(lessonStructure));
    this.dataStore.lessonData = JSON.stringify(lessonStructure);
  };
}