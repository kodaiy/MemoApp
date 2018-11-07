import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItems}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    width: '100%',
  },
  memoListItems: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
