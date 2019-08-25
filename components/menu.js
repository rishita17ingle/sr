import React from 'react';
import {
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet
} from 'react-vr';
import subjects from '../data/subjects';

export default class Menu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      bounceValue: new Animated.Value(1),
      activeSubject: props.currentSubject
    };
  }

  // a button to swap between subjects
  subjectButton(subject) {
    const {activeSubject} = this.state;
    const selected = activeSubject === subject;
    const scale = selected ? this.state.bounceValue : 1;
    const borderColor = selected ? 'purple' : '#fff';

    return (
      <VrButton key={`button-${subject}`}
                onClick={() => this.handleClick(subject)}>
        <Animated.View style={[styles.subjectBtn, {
          transform: [{scale}], borderColor}]}>
          <Text style={styles.subjectBtnLabel}>{subject}</Text>
        </Animated.View>
      </VrButton>
    );
  }

  handleClick(subject) {
    const {switchSubject} = this.props;

    this.setState({activeSubject: subject}, () => {
      // bounce the button
      const btnConfig = {
        value: this.state.bounceValue,
        initial: 1.5,
        toValue: 1
      };

      this.bounce(btnConfig);

      // trigger parent - switchSubject
      switchSubject(subject);
    });
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
    return (
      <View
        billboarding={'on'}
        style={styles.menu}>
        { Object.keys(subjects).map((subject) =>
          this.subjectButton(subject)) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 400,
    height: 400,
    backgroundColor: 'transparent',
    position: 'absolute',
    layoutOrigin: [0, 0],
    transform: [
      {rotateY: -90},
      {translate: [400, 100, -350]}
    ],
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subjectBtn: {
    borderRadius: 10,
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subjectBtnLabel: {
    color: '#fff',
    fontSize: 20
  }
});