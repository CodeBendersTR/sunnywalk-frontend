import React, { Component } from "react";
import { Map, GoogleMap, GoogleApiWrapper, Marker } from "google-maps-react";


class GetLatLng extends Component {
    constructor(props) {
      super(props);
      this.state = {
        markers: [
          {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 51.49748169990848, lng: -0.10281244511195696 }
          }
        ]
      };
      this.onClick = this.onClick.bind(this);
    }
  
    onClick(title, map, coord) {
      const { latLng } = coord;
      const lat = latLng.lat();
      const lng = latLng.lng();
  
      this.setState(previousState => {
        return {
          markers: [
            ...previousState.markers,
            {
                title: "",
                name: "",
                position: { lat, lng }
            }
          ]
        };
      });
    }
  
    render() {
      return (
        <div>
          <Map
            google={this.props.google} //Map
            style={{ width: "60%", margin: "auto" }}
            className={"map"}
            zoom={14}
            onClick={this.onClick}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                title={marker.title}
                name={marker.name}
                position={marker.position}
              />
            ))}
          </Map>
        </div>
      );
    }
  }
  

  export default GoogleApiWrapper((props) => ({
    apiKey: "AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY",
}))(GetLatLng);


