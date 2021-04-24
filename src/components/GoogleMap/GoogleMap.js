import "./GoogleMap.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
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

        console.log(lat, lng)

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
                Lat: [ lat ],
                Lng: [ lng ],
                polyPath: [ coord]
            };
        });
    }

    render() {
        return (
            <Map
                centerAroundCurrentLocation={true}
                google={this.props.google}
                defaultCenter={{ lat: 51.499196546877556, lng: -0.07757697211526285 }}
                Marker={{ lat: 51.49748169990848, lng: -0.10281244511195696 }}
                zoom={12}
                className={"map"}
                onClick={this.onClick}

            >
                {this.state.markers.map((marker, index) => (

                    <Marker
                        key={index}
                        title={marker.title}
                        name={marker.name}
                        position={marker.position}
                        draggable={true}
                    >
                    <Polyline
                        path={this.state.polyPath}
                        options={{
                            geodesic: true,
                            strokeColor: '#669DF6',
                            strokeOpacity: '1.0',
                            strokeWeight: 2,
                            draggable: true,
                            visible: true,
                    }} />
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
