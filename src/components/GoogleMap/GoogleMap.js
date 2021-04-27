import "./GoogleMap.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import { CurrentLocation } from "./Map";
import { AddWalk } from "..";
import getConfig from "../../modules/Config";
import axios from "axios";


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
            lat: [],
            lng: [],
            location: [],
            mapsStatus: "waiting",
            mapsResponse: []
        };
        this.onClick = this.onClick.bind(this);
        this.props = props;
    }

    onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat().toString().match(/-?\d+\.\d{1,6}/g);
        const lng = latLng.lng().toString().match(/-?\d+\.\d{1,6}/g);
        this.callLocationApi(lat, lng);
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
                lat: lat,
                lng: lng
            };
        });
    }

    callLocationApi(lat, lng) {
        axios.get(getConfig("gmaps-api") + "?latlng=" + lat + "," + lng + "&key=AIzaSyCqT-9wGFmTpsxwvVMApOZquHIVmgFc_FY")
        .then(
            (response) => {
                console.log("We got a response");
                this.setState(
                    () => {
                        return {
                            mapsStatus: "fulfilled",
                            mapsResponse: response.data
                        }
                    }
                );
            }
        )
        .catch((error) => {
            
        });
    }

    extractLocationName(mapsJson) {
        let locationName = "(location not found)";
        if (mapsJson.status === "OK") {
            console.log(mapsJson);
            for (let i = 0; i < mapsJson.results.length; i++) {
                const result = mapsJson.results[i];
                if (result.types.includes("sublocality")
                || result.types.includes("locality")
                || result.types.includes("postal_town")) {
                    locationName = result.formatted_address;
                    break;
                }
            }
        }
        return locationName;
    }

    render() {
        let location = {};
        if (this.state.mapsStatus === "fulfilled") {
            location.name = this.extractLocationName(this.state.mapsResponse);
            location.lat = this.state.lat;
            location.lng = this.state.lng;
        }
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
                <AddWalk location={location}/>
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
