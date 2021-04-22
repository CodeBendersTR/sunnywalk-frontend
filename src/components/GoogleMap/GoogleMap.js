import "./GoogleMap.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { CurrentLocation } from "./Map";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {
                    title: "London - City Center",
                    name: "London - this doesn't",
                    position: { lat: 51.507347593630605, lng: -0.1291331607829911 },
                },
                {
                    title: "Skate Place",
                    name: "Skate Place",
                    position: { lat: 51.50396982239765, lng: -0.07964758569819358 },
                },
                {
                    title: "Wheelchair Accessible Park",
                    name: "Skate Place",
                    position: { lat: 51.51699454189082, lng: -0.0430490864531763 },
                },
                {
                    title: "Playground",
                    name: "Skate Place",
                    position: { lat: 51.53491595039047, lng: -0.06959877186435219 },
                },
                {
                    title: "Dog Park",
                    name: "Skate Place",
                    position: { lat: 51.49748169990848, lng: -0.10281244511195696 },
                },
                {
                    title: "Current Location",
                    name: "Skate Place",
                    position: { CurrentLocation },
                },
            ],
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState((previousState) => {
            return {
                markers: [
                    ...previousState.markers,
                    {
                        title: "",
                        name: "",
                        position: { lat, lng },
                    },
                ],
            };
        });
    }
    state = {
        showingInfoWindow: true, // Hides or shows the InfoWindow
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
                defaultCenter={{ lat: 51.507347593630605, lng: -0.1291331607829911 }}
                Marker={{ lat: 51.49748169990848, lng: -0.10281244511195696 }}
                zoom={13}
                className={"map"}
                onClick={this.onClick}
            >
                {this.state.markers.map((marker, index) => (

                    <Marker
                        color="orange"
                        key={index}
                        title={marker.title}
                        name={marker.name}
                        position={marker.position}
                        draggable={true}
                    >
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    />
                    /
                    </Marker>
                ))}
            </Map>
        );
    }
}

export default GoogleApiWrapper((props) => ({
    apiKey: "AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY",
}))(MapContainer);
