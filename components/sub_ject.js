//equivalent to solar system.js
import React from 'react';
import {
  asset,
  Pano,
  View,
  Scene,
  AmbientLight,
  DirectionalLight
} from 'react-vr';
import subjects from '../data/subjects';
import MyHeader from './myHeader';
import Subject from './subject';
import Menu from './menu';
import Info from './info';

export default class Sub_ject extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSubject: 'Earth'
    };
  }

  switchSubject = (subject) => {
    this.setState({currentSubject: subject});
  };

  render() {
    const {
      currentSubject
    } = this.state;

    return (
      <View>
        <Scene style={{ transform: [ {translate: [0,0,600]} ] }}/>

        <Pano source={asset('stars.jpg')}/>

        <AmbientLight intensity={1}/>
        <DirectionalLight intensity={0.5}/>

        <MyHeader currentSubject={currentSubject} />

        <Subject currentSubject={currentSubject}/>

        <Menu
          subjects={subjects}
          switchSubject={this.switchSubject}
          currentSubject={currentSubject} />

        <Info currentSubject={currentSubject} />


      </View>
    );
  }
};