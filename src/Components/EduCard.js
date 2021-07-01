import { DataHandler } from "../Services/clientDataHandler";
import React from "react";

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
   
    // is this lesson is coming soon render this
    if(this.props.comingSoon === true){
      return(
        <div>
        <div className="container eduCard closed py-3 px-3 card margin-bottom-36px">
          <div className="py-4 px-2 bg-white border-radius-5">
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="width100 max-width-250px margin-auto py-1 px-4 v-align"
                  src={this.props.imageUrl}
                  alt={this.props.alt}
                />
                <br></br>
              </div>
              <div className="col-lg-9">
                <h2 className="mb-2 font-size-24px font-normal">{this.props.title} - Coming Soon</h2>
                <h3 className="mb-3 font-size-32px font-bold">{this.props.subtitle}</h3>
                <p className="mb-3">Please check back in at a later date for more content coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    // collapsed state of educard markup being returned with the parent components props passed in
    else if (this.state.expanded === false) {
      return (
        <div>
          <div className="container eduCard closed py-3 px-3 card margin-bottom-36px">
            <div className="py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 max-width-250px margin-auto py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                  <br></br>
                  {/* Function to render the complete cover image if available */}
                  {this.completeImage(this.state.complete, this.props.alt)}
                </div>
                <div className="col-lg-9">
                  {/* turnary statement to render the educational cards heading as ether 'complete' if available */}
                  <h2 className="mb-2 font-size-24px font-normal">{this.props.title} {this.state.complete === true ?" - Complete" : null}</h2>
                  <h3 className="mb-3 font-size-32px font-bold">{this.props.subtitle}</h3>
                  <p className="mb-3">{this.props.paragraph}</p>
                  <button className="btn btn-primary mt-2" onClick={this.expand}>see more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // else render the educational card expanded with all content.
    else {
      return (
        <div>
          <div className="container eduCard py-3 px-3 card margin-bottom-36px">
            <div className="py-4 px-2 bg-white border-radius-5">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="width100 max-width-250px margin-auto py-1 px-4 v-align"
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                  />
                  <br></br>
                  {/* Function to render the complete image if available */}
                  {this.completeImage(this.state.complete, this.props.alt)}
                </div>
                <div className="col-lg-9">
                  {/* turnary statement to render the educational cards heading as ether 'complete' if available */}
                  <h2 className="mb-2 font-size-24px font-normal">{this.props.title} {this.state.complete === true ?" - Complete" : null}</h2>
                  <h3 className="mb-3 font-size-32px font-bold">{this.props.subtitle}</h3>
                  <p className="mb-3">{this.props.paragraph}</p>
                  <button className="btn btn-primary mt-2 invisible">see more</button>
                </div>
              </div>
              {/* expanded content */}
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <h4>{this.props.lessonTitle}</h4>
                  <p>{this.props.lessonText}</p>
                  <ul className="ml-0 mb-0">
                    {/* render any lesson point properties passed in as list items available */}
                    {this.props.lessonPoints.map((point, index) => <li className="mb-2" key={index}>{point}</li>)}
                  </ul>
                  {/* set of turnery statements to render sub content if available. */}
                  {this.props.subHeading1 != null? <h4>{this.props.subHeading1}</h4>: null}
                  {this.props.subParagraph1 != null? <p>{this.props.subParagraph1}</p>: null}
                  {this.props.subHeading2 != null? <h4 className="margin-top-24px">{this.props.subHeading2}</h4>: null}
                  {this.props.subParagraph2 != null? <p>{this.props.subParagraph2}</p>: null}
                  {this.state.complete != true ? <button
                    className="btn btn-success mt-2 mr-4"
                    onClick={this.complete}
                  >Complete</button> : ""}
                  <button className="btn btn-danger mt-2" onClick={this.expand}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  // creates lesson structure on first run otherwise if already created,
  // check if this lesson is already completed for rendering. 
  createArray(id, data){
    //if no data is set yet
    if(!data.hasLessonStructure()){
      //set the data structure for lessons
      data.setLessonStructure();
    }
    //else check if the this lesson has been completed.
    else if(data.getLessonStatus(id) == true){
      //if yes, set this lesson to complete for rendering.
      this.complete();
    }
  };

  // render any list item points passed in from the components props.
  renderList = (Array) => {
    if(Array != undefined){
      return(
        <ul>
          {Array.map((data, index) => {
            return <li Key={index}>{data}</li>;
          })}
        </ul>
      )
    }
  }

  //function to complete the lesson on call.
  complete = () => {
    let data = DataHandler.getInstance();
    if(!data.getLessonStatus(this.props.lessonId) == true){
      data.setLessonComplete(this.props.lessonId);
    }
    this.setState({
      complete: true,
    });
  };

  completeImage = (complete, alt) =>{
    if(complete == true){
      return(
        <img
        className="width100 max-width-250px py-1 px-4 v-align tick"
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
