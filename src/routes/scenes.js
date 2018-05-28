import React, { Component } from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import HomeContainer from './home/containers/homeContainer';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component ={ HomeContainer } title='Home'/>
    </Scene>
)
export default scenes;