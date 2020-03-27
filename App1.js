// In App.js in a new project

import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      alert(route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost', {name: 'haha'})}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: postText});
        }}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam = 'default params'} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="go Back" onPress={() => navigation.goBack()} />
      <Button title="go Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  let someData = {};
  return (
    <NavigationContainer>
      <Stack.Navigator
        //屏幕共享样式
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        {/* <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props}
              extraData={someData}
            />
          )}
        </Stack.Screen> */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 1}}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={({route}) => ({
            title: route.params.name,
            //单个设置头部样式
            headerStyle: {
              backgroundColor: 'blue',
            }, //标头的样式对象。例如，您可以在此处指定自定义背景色。
            headerTintColor: '#fff', //标头的色调颜色
            headerTitleStyle: {
              fontWeight: 'bold',
            }, //标题组件的样式对象
            // headerShown: false, //隐藏标题
            headerTitleAlign: 'center', //对齐标题，默认为center iOS和left Android。
            headerTitle: props => <Title {...props} />,
            headerTitleAllowFontScaling: false, //标头标题字体是否应缩放以符合“文本大小”辅助功能设置。默认为false。
            headerBackAllowFontScaling: false, //后退按钮标题字体是否应缩放以符合“文本大小”辅助功能设置。默认为false。
            // headerBackImage 该函数返回一个React Element以在标题的后退按钮中显示自定义图像。使用函数时，它将tintColor在其参数对象中接收。默认为带有背面图像源的Image组件，它是平台的默认背面图标图像（iOS上为人字形，Android上为箭头）。
            headerBackTitle: 'headerBackTitle', //iOS上的后退按钮使用的标题字符串。默认为上一个场景的headerTitle。
            // headerBackTitleStyle 标题的样式对象
            headerBackTitleVisible: true, //为后退按钮标题是否可见提供了一个合理的默认值，但是如果您想覆盖它，则可以使用true或false在此选项中使用。
            // headerRight 该函数返回一个React元素以显示在标题的右侧。
            // headerLeft返回React元素以显示在标题左侧的函数。使用函数时onPress，在呈现时它会接收许多参数（label，labelStyle和more-检查types.tsx以获取完整列表）。
            // headerLeftContainerStyle 自定义headerLeft组件容器的样式，例如添加填充。
            // headerRightContainerStyle 自定义headerRight组件容器的样式，例如添加填充。
            // headerTitleContainerStyle 自定义headerTitle组件容器的样式，例如添加填充。默认情况下，headerTitleContainerStyle是具有绝对位置的风格和偏移量都left和right。这可能导致的空白或之间重叠headerLeft和headerTitle如果定制headerLeft被使用。可以通过在中和中进行调整left和right样式来解决。headerTitleContainerStylemarginHorizontalheaderTitleStyle
            // headerPressColorAndroid 材料波纹的颜色（仅适用于Android> = 5.0）
            // headerTransparent 默认为false。如果为true，则标题将没有背景，除非您明确为其提供背景headerBackground。标头也将浮动在屏幕上，使其与下面的内容重叠。如果要渲染半透明的标题或模糊的背景，这很有用。
            // headerBackground 返回React元素以呈现为标题背景的函数。这对于使用背景（例如图像或渐变）很有用。
            // headerStatusBarHeight 在标题顶部添加额外的填充以说明半透明的状态栏。默认情况下，它使用设备安全区域插图中的最大值。传递0或自定义值以禁用默认行为，并自定义高度。
            // cardShadowEnabled 使用此道具在过渡期间具有可见的阴影。默认为true。
            // cardOverlayEnabled 使用此道具可以在过渡期间在卡下看到半透明的深色覆盖层。默认为trueAndroid和falseiOS。
            // cardOverlay 该函数返回一个React Element来显示为卡的叠加层。使用此功能时请确保设置cardOverlayEnabled为true。
            // cardStyle: {backgroundColor: 'transparent'},
            // cardStyle 堆栈中卡的样式对象。您可以在此处提供自定义背景色，以代替默认背景。
            // 您还可以指定{ backgroundColor: 'transparent' }使前一个屏幕在下面可见（对于透明模式）。这对于实现模态对话框之类的东西很有用。mode: 'modal'使用透明背景时，还应该在堆栈视图配置中指定，这样以前的屏幕就不会分离并且在下面保持可见。
            // animationEnabled 屏幕上是否应启用过渡动画。如果将其设置为false，则按下或弹出时屏幕不会动画。默认为true。
            animationTypeForReplace: 'pop', //push -将使用推送新屏幕的动画,pop -将使用弹出屏幕的动画
            // gestureEnabled 是否可以使用手势关闭此屏幕。默认为trueiOS，falseAndroid。
            // gestureResponseDistance 从屏幕边缘开始覆盖触摸距离的对象，以识别手势。该对象可以包含以下：horizontal- 数字 -水平方向的距离。默认为25。vertical- 数字 -垂直方向的距离。默认值为135。
            // gestureVelocityImpact 决定手势速度相关性的数字。默认值为0.3。
            // gestureDirection 手势的方向。有关详细信息，请参见“ 动画”部分。
            // transitionSpec 屏幕过渡的配置对象。有关详细信息，请参见“ 动画”部分。
            // cardStyleInterpolator 插卡各部分的插补样式。有关详细信息，请参见“ 动画”部分。
            // headerStyleInterpolator 标头各部分的内插样式。有关详细信息，请参见“ 动画”部分。
            // safeAreaInsets 屏幕的安全区域插图。这用于避免使用诸如缺口和状态栏之类的元素。默认情况下，将自动检测设备的安全区域插图。您可以使用此选项覆盖行为。接受包含以下可选属性的对象：top- 数字 -顶部插图的值，例如包含状态栏和槽口的区域。right- 数字 -左插图的值。bottom- 数字 -顶部插图的值，例如底部的区域导航栏。left。- 数字 -右插图的值。
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Title() {
  return <Text>自定义title</Text>;
}
export default App;
