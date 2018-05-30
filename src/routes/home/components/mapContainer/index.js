import React, { Component } from 'react';
import { View } from 'native-base';
import MapView, { Marker }  from 'react-native-maps';
import styles from '../mapContainer/mapStyle'


export const MapContainer = ({region}) =>  {
    return(
        <View style ={styles.container}>
            <MapView
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
            <Marker
                coordinate={region}
                pinColor ='red'
            />
            </MapView>
        </View>
    )
};
