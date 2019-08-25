import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-vr';

const MyHeader = ({currentSubject}) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Get to Learn</Text>
    <Text style={styles.headerSubtitle}>{currentSubject}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: 600,
    transform: [{translate: [-300, 260, 0]}]
  },
  headerTitle: {
    fontSize: 60,
    textAlign: 'center',
    color: '#fff'
  },
  headerSubtitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  }
});

export default MyHeader;