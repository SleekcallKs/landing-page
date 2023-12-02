import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = ({ latitude, longitude }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [longitude, latitude],
            zoom: 15
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        return () => {
            map.current.remove();
        };
    }, [latitude, longitude]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
