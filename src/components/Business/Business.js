import React from "react";
import "./Business.css";

export class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.businesses.imageSrc} alt="" />
        </div>
        <h2>{this.props.businesses.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.businesses.address}</p>
            <p>{this.props.businesses.city}</p>
            <p>
              {this.props.businesses.state} , {this.props.businesses.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.businesses.category}</h3>
            <h3 className="rating">{this.props.businesses.rating}</h3>
            <p>{this.props.businesses.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}
