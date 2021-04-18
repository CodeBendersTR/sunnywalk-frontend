import "./GoogleMap.css"
import React from "react";
import ReactDOM from "react-dom";


const mapStyles = {
    map: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
};

export class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;

        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng,
            },
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude,
                        },
                    });
                });
            }
        } else {
            this.setState({
                currentLocation: {
                    lat: this.props.lat,
                    lng: this.props.lng,
                },
            });
        }
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // checks if google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            let { draggable } = this.props;
            let { disableDoubleClickZoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            if (!(this.props.lat === undefined || this.props.lng === undefined)) {
                lat = this.props.lat;
                lng = this.props.lng;
            }
            const center = new maps.LatLng(lat, lng);

            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom,
                    draggable: draggable,
                    disableDoubleClickZoom: disableDoubleClickZoom
                }
            );

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);
            this.map.addListener("click", (evt) => {
              this.props.onClick(this.props, this.map, evt);
          });
        }
    }
    renderChildren() {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, (c) => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation,
            });
        });
    }
    render() {
        return (
            <div
                className={
                    this.props.maptype === "addwalk"
                        ? "map_location__container--addwalk"
                        : "map_location__container--individualwalk"
                }
            >
                <div className="map_location__map" ref="map">
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        );
    }
}

GoogleMap.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: -1.2884,
        lng: 36.8233,
    },
    centerAroundCurrentLocation: false,
    visible: true,
    onClick: function () {},
};

export default GoogleMap;
