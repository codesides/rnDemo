/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-26 15:56:11
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 15:51:12
 * @FilePath: /RN/myApp/src/views/Home/index.js
 */
import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
// import {_increment, _decrease} from '@src/redux/actions/counter';
import * as counterActions from '@src/redux/actions/counter';
import {bindActionCreators} from 'redux';

function Home({counterActions, counter}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="to Detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Text>{counter}</Text>
      <Button title="add" onPress={() => counterActions._increment(2)} />
      <Button title="minus" onPress={() => counterActions._decrease(2)} />
    </View>
  );
}
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//     };
//   }

//   _increment = number => {
//     this.props.counterActions._increment(number);
//   };

//   render() {
//     const {counter = 1, navigation} = this.props;
//     const {count} = this.state;
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Home!</Text>
//         <Button
//           title="to Detail"
//           onPress={() => navigation.navigate('Details')}
//         />
//         <Text>counter: {counter}</Text>
//         <Button title="add" onPress={this._increment.bind(this, count)} />
//       </View>
//     );
//   }
// }

const mapStateToProps = state => {
  return {counter: state.counterReduce.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
