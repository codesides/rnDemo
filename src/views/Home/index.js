import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {_increment, _decrease} from '@src/redux/actions/counter';

function Home({navigation, _increment, _decrease, counter}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="to Detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Text>{counter}</Text>
      <Button title="add" onPress={() => _increment(2)} />
      <Button title="minus" onPress={() => _decrease(2)} />
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
//     this.props._increment(number);
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

export default connect(mapStateToProps, {_increment, _decrease})(Home);
