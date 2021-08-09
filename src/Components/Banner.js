import React from "react";
import Transitions from "../utility/transitions"

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let transition = Transitions.getInstance();
      return (
        <div className="container pt-4 px-4 text-white margin-bottom-64px">
          <div className="row">
            <div className="col-lg-6">
              <div className="v-align">
                <img className="width100 mobile mb-1" src={this.props.image} />
                {/* Trenery statement to show username or not in the 'title' message in the banner. */}
                <h1 className="mb-4 capitalise">{this.props.title} {this.props.usersName != "" ? this.props.usersName : null}</h1>
                {/* If Subtitle is passed in as a prop, render the subtitle, else render blank*/}
                {this.props.subTitle != "" ? <h2 className="mb-4">{this.props.subTitle}</h2> : null}
                <p className="mb-0">{this.props.paragraph}</p>
                {/* react function to include data notice if called upon by parent prop passed in */}
                {this.displayDataNotice(this.props.dataNotice)}
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                className="width100 desktop mb-5 v-align"
                src={this.props.image}
              />
            </div>
          </div>
        </div>
      );
    }

    //function to display data notice if bool value passed in by parent prop on call
    //this should be refactored into its own react component for use throghout as also used on Hero comp
    displayDataNotice = (propDataNotice) =>{
      if(propDataNotice){
        return(
          <div>
            <p className="margin-bottom-4px margin-top-24px">Please note: </p>
            <p className="font-size-14px">All information entered in this application will never leave 
              your device. Its stored with you and only you have access to it. You can delete your 
              data from the settings page at any time.
            </p>                      
          </div>
        )
      } 
    }

    // arrow function to return the users name to render in the component markup above dynamically.
    // now redundant.
    // renderName = (name) => {
    //   if(name != null){
    //     return(
    //       name
    //     )
    //   }
    // }

}
export default Banner;