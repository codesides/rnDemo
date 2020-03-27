import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

function Details({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
      <Button
        title="to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default Details;
