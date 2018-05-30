import React, { Component  } from 'react';
import { View, Text  } from 'react-native';
import { Container } from 'native-base'
import { MapContainer } from '../components/mapContainer/index'

export default class Home extends Component {
    // componentDidMount(){
    //     this.props.setName()
    // }
    render(){
        const region ={
            latitude: 6.524379,
            longitude: 3.379206,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
        return(
            <Container >
                <MapContainer region={region}/>
            </Container>
        )
    }
};
