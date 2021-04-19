import "./GoogleMap.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import { CurrentLocation } from "./Map";

const locations = [
    {
        name: "Dog Park",
        title: {
            fillcolor: "white",
        },
        location: {
            lat: 51.49748169990848,
            lng: -0.10281244511195696,
        },
    },
    {
        name: "Skate Place",
        location: {
            lat: 51.50396982239765,
            lng: -0.07964758569819358,
        },
    },
    {
        name: "Wheelchair accessible Park",
        location: {
            lat: 51.51699454189082,
            lng: -0.0430490864531763,
        },
    },
    {
        name: "Playground",
        location: {
            lat: 51.53491595039047,
            lng: -0.06959877186435219,
        },
    },
];

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    render() {
        return (
            <Map
                centerAroundCurrentLocation={true}
                google={this.props.google}
                zoom={13}
                // style={mapStyles}
            >
                {/* These next 5 lines are to set skate, dog parks, etc. */}
                {locations.map((item) => {
                    return (
                        <Marker
                            key={item.name}
                            position={item.location}
                            label={item.name}
                            color="orange"
                            backgroundColor="white"
                        />
                    );
                })}
                <Marker onClick={this.onMarkerClick} name={"Current Location"} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper((props) => ({
    apiKey: "AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY",
}))(MapContainer);
