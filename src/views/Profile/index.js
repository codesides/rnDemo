import * as React from 'react';
import {Text, View, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
      <Button
        title="to Detail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default Profile;
