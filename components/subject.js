import React from 'react';
import {
  asset,
  View,
  Model,
  Animated,
  StyleSheet
} from 'react-vr';

export default class Subject extends React.Component {
  constructor() {
    super();

    this.state = {
      rotation: 0,
      bounceValue: new Animated.Value(1)
    };

    this.lastUpdate = Date.now();

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentSubject !== nextProps.currentSubject) {
      // animate the subject
      const subjectConfig = {
        value: this.state.bounceValue,
        initial: 0.3,
        toValue: 1,
        friction: 5
      };

      this.bounce(subjectConfig);
    }
  }

  // cancel the rotate animation
  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  // subject rotate animation
  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;

    this.time++;

    this.lastUpdate = now;
    this.setState({
      rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  // bounce animation
  bounce({value, initial, toValue, friction = 1.5}) {
    value.setValue(initial);

    Animated.spring(
      value,
      {
        toValue,
        friction,
      }
    ).start();
  }

  render() {
    const {currentSubject} = this.props;
    const {rotation} = this.state;
    const scale = this.state.bounceValue;

    return (
      <View style={styles.subject}>
        <Animated.View style={{transform: [{scale}]}}>
          <Model
            source={{obj: asset(`models/${currentSubject}.obj`)}}
            texture={asset(`textures/${currentSubject}.png`)}
            lit={true}
            style={[{
              transform: [
              {translate: [0, 0, 0]},
              {scale: 9},
              {rotateY: rotation}
            ]}, styles.model]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subject: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 1400,
    height: 500,
    transform: [{translate: [-700, 0, 0]}]
  },
  model: {
    position: 'absolute'
  }
});