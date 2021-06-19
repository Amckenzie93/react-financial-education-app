import { DataHandler } from "../Services/clientDataHandler";
import React from "react";
import Transitions from "../utility/transitions";
import { motion } from "framer-motion";

class EduCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      complete: false,
      lessonData: null,
    };
  }

  componentDidMount(){
    let data = DataHandler.getInstance();
    this.createArray(this.props.lessonId, data);
  }

  render() {
    let transition = Transitions.getInstance();
    let data = DataHandler.getInstance();

    //this.createArray(this.props.lessonId, data);
   
    if (this.state.expanded === false) {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.85 }}
        >
          <div
            className="container infoCard closed py-3 px-3 card margin-bottom-36px"
            onClick={this.expand}
          >
            <div className="py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                  <br></br>
                  {this.completeImage(this.state.complete, this.props.alt)}
                </div>
                <div className="col-lg-9">
                  <h2 className="mb-2 font-size-24px font-normal">{this.props.title} {this.state.complete === true ?" - Complete" : ""}</h2>
                  <h3 className="mb-3 font-size-32px font-bold">{this.props.subtitle}</h3>
                  <p className="mb-3">{this.props.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    else {
      return (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transition.getTransition()}
          transition={{ duration: 0.82 }}
        >
          <div
            className="container infoCard py-3 px-3 card margin-bottom-36px"
            onClick={this.expand}
          >
            <div className="py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                  <br></br>
                  {this.completeImage(this.state.complete, this.props.alt)}
                </div>
                <div className="col-lg-9">
                  <h2 className="mb-2 font-size-24px font-normal">{this.props.title} {this.state.complete === true ?" - Complete" : ""}</h2>
                  <h3 className="mb-3 font-size-32px font-bold">{this.props.subtitle}</h3>
                  <p className="mb-3">{this.props.paragraph}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <hr className="margin-bottom-28px" />
                  <h4>{this.props.lessonTitle}</h4>
                  <p>{this.props.lessonText}</p>
                  <ul className="ml-0 mb-4">
                    {this.props.lessonPoints.map(point => <li className="mb-2">{point}</li>)}
                  </ul>
                  {this.props.subHeading1 != null? <h4>{this.props.subHeading1}</h4>: null}
                  {this.props.subParagraph1 != null? <p>{this.props.subParagraph1}</p>: null}
                  {this.props.subHeading2 != null? <h4 className="margin-top-24px">{this.props.subHeading2}</h4>: null}
                  {this.props.subParagraph2 != null? <p>{this.props.subParagraph2}</p>: null}
                  {this.state.complete != true ? <button
                    className="btn btn-primary mt-2"
                    onClick={this.complete}
                  >Complete</button> : ""}
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
  }


  createArray(id, data){
    if(!data.hasLessonStructure()){
      data.setLessonStructure();
    }
    else if(data.getLessonStatus(id) == true){
      this.complete();
    }
  };

  renderList = (Array) => {
    if(Array != undefined){
      return(
        <ul>
          {Array.map(function(data) {
            return <li Key={data}>{data}</li>;
          })}
        </ul>
      )
    }
  }

  completeLesson = () => {
    let data = DataHandler.getInstance();
    if(!data.getLessonStatus(this.props.lessonId) == true){
      data.setLessonComplete(this.props.lessonId);
    }
  }

  complete = () => {
    this.completeLesson();
    this.setState({
      complete: true,
    });
  };

  completeImage = (complete, alt) =>{
    if(complete == true){
      return(
        <img
        className="width100 py-1 px-4 v-align tick"
        src="./Assets/Images/tick.png"
        alt={alt}
      />
      );
    }
  }

  expand = () => {
    if (this.state.expanded === true) {
      this.setState({
        expanded: false,
      });
    } else {
      this.setState({
        expanded: true,
      });
    }
  }; 
}

export default EduCard;
