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
                <h1 className="mb-2">{this.props.title} {this.props.usersName != "" ? this.props.usersName : null}</h1>
                {/* If Subtitle is passed in as a prop, render the subtitle, else render blank*/}
                {this.props.subTitle != "" ? <h2 className="mb-4">{this.props.subTitle}</h2> : null}
                <p className="mb-0">{this.props.paragraph}</p>
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

    renderName = (name) => {
      if(name != null){
        return(
          name
        )
      }
    }

}
export default Banner;