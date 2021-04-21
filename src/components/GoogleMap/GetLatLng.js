import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


class MainMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        markers: [
          {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 37.778519, lng: -122.40564 }
          }
        ]
      };
      this.onClick = this.onClick.bind(this);
    }
  
    onClick(t, map, coord) {
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
          <h1 className="text-center">My Maps</h1>
          <Map
            google={this.props.google}
            style={{ width: "80%", margin: "auto" }}
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
  
//   const App = GoogleApiWrapper({
//     apiKey: ("AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY")
//   })(MainMap);

  export default GoogleApiWrapper((props) => ({
    apiKey: "AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY",
}))(MainMap);


