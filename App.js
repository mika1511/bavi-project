import { StatusBar } from 'expo-status-bar';
// import { Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet, Text, View, Button,
  TouchableOpacity,Image,ToastAndroid,TextInput,
} from 'react-native';
import SVG1 from './assets/eclipse.svg';
import Logo from './assets/Logo.svg';
import Personicon from './assets/personicon.svg';

import { NavigationContainer,useNavigation  } from '@react-navigation/native';

export default function App() {

  // return (

  //   <View >
  //   {/* <Image style={styles.image} source={require("C:\Users\hp\Downloads\Rectangle 25 ().svg")} /> */}
  //   <View style={{
  //     flex:1,
  //     backgroundColor:'red',

  //   }}>
  //   <SVG1></SVG1>
  //   <View style={{
  //     zIndex:20,
  //     backgroundColor:'blue',
  //     flexGrow:1
  //   }}>
      

  //   <TouchableOpacity>
  //     <Text style={styles.forget_button}>ADMIN</Text>
  //   </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
  //       <Text style={styles.logintext}>CUSTOMER</Text>
  //     </TouchableOpacity>
  //     </View>
  //     </View>

  //  </View>


  // );

  const Stack = createNativeStackNavigator()

  

  return <NavigationContainer><Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' options={{
      headerShown:false
    }} component={MainScreen}/>
     <Stack.Screen name='Home2' options={{
      headerShown:false
    }} component={Screen2}/>
  </Stack.Navigator>

  </NavigationContainer>
}

function Screen2(){
  const NAV = useNavigation();
  return <View style={{
    flex:1,
    flexGrow:1,
   position:'relative'
 }}>
   <View style={{
    position: "absolute",
    flex: 1,
    bottom: 0,
    transform: [{rotateX: '180deg'}, {rotateY: '180deg'}]
   }}><SVG1/> 
   </View>
   <View style={{
    position: "absolute",
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
   }}>
    
    <View  style={{
        
        marginTop:100,
        alignItems:'center',
      }}>
        

      <Personicon/>
        </View>  
      

    <View style={{

     
  }}>
       <View styles={[styles.container]}>
      <View styles = {{
        alignItems : "center"

      }}>
        
        
        <Text> Create Account</Text>
         </View>
        
        <TextInput style={[styles.forget_button1,styles.shadow ]}
        placeholder = "First Name"
        />
        
        <TextInput style={[styles.forget_button1,styles.shadow]}
        placeholder = "Last Name "
        />    
            <TextInput style={[styles.forget_button1 , styles.shadow]}
        placeholder = "Phone No."
        />

      </View></View>
   </View>
   </View>
//   <View style={{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }}>
//     <Text>
//       Screen2
//       </Text>
//       <Button title='Go Back' onPress={()=>{
// NAV.goBack()
//       }}/>
//   </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  forget_button: {
    width: "80%",
    borderRadius: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:40,
    borderRadius: 11,
    backgroundColor: "#2AACAC",
    textAlign : "center",
    textAlignVertical :"center",
    
  },
  forget_button1: {
    width: "80%",
    borderRadius: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:40,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    textAlign : "center",
    textAlignVertical :"center",

  },
  shadow : {
    shadowOffset :{width : 4 , height : 4},
    shadowColor : "#2AACAC",
    shadowOpacity : 20,
    shadowRadius : 2,
    elevation: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 11,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft:40,
    backgroundColor: "#2AACAC",
  },
  image: {
    marginBottom: 40,
  },
});

function MainScreen({navigation}){
  return  <>
  <View style={{
     flex:0.3,
     flexGrow:1,
    position:'relative'
  }}>
    <SVG1/>
    <View style={{
      position:'absolute',
      flex:1,
      height:'100%',
      width:"100%",
    }}>
      <View  style={{
        // justifyContent:'center',
        marginTop:220,
        alignItems:'center'
      }}>
        

      <Logo />
        </View>
       
<TouchableOpacity onPress={()=>{
  navigation.navigate('Home2')
}}>
     <Text style={styles.forget_button}>ADMIN</Text>
    </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
         <Text style={styles.logintext}>CUSTOMER</Text>
       </TouchableOpacity>
    </View>
  </View>
  </>
}