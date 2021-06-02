    
export default class Transition {

  tansition1 = {
    in: {
      opacity: 1,
      y: "0%",
    },
    out: {
      opacity: 0,
      y: "100%",
    },
  };


  static singleton = null;
    
  static getInstance(){
      if(Transition.singleton == null){
        Transition.singleton = new Transition();
      }
      return this.singleton;  
  };

  getTransition = () =>{
      return this.tansition1;
  }
  
}
