import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, useWindowDimensions, Button, TextInput } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Toggle from 'react-native-toggle-element'
import Horoscop from './Horoscope';


const textStyles = StyleSheet.create({
    baseText:{
        color: '#ffffff',
        fontSize: 18
    },
    smallText:{
        color: '#ffffff',
        fontSize: 13
    },
    extraLarge:{
        color: '#ffffff',
        fontSize:22
    }
})

const Person = () => (
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Name</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>Durlabh Jain</Text>
            </View>
            <View style={{width: '10%'}}>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Gender</Text>
            </View>
            <View style={{width: '50%'}}>
                {/*<Text style={textStyles.baseText}>Male</Text>*/}
                <Toggle
                    disabledTitleStyle={{backgroundColor:"#000"}}
                    leftTitle={'Male'}
                    rightTitle={'Female'}
                    thumbButton={{
                        width:80,
                        activeBackgroundColor:"#e34309",
                        //inActiveColor:"#e34309",
                        //activeColor:"#e34309",
                        inActiveBackgroundColor:"#e34309"
                    }}
                    trackBar={{
                        activeBackgroundColor:"#000",
                        inActiveBackgroundColor:"#000"
                    }}
                />
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Date</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>15/07/1979</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Time</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>12.50 AM</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Country</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>India</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Place</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>Delhi</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Lat/Long</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>28.7041 N, 77.1025 E</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Language</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>English</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
    </View>
)

const Horoscope = () => (
    <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Name</Text>
            </View>
            <View style={{width: '50%'}}>
                {/*<Text style={textStyles.baseText}>Durlabh Jain</Text>*/}
                <TextInput/>
            </View>
            <View style={{width: '10%'}}>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Gender</Text>
            </View>
            <View style={{width: '50%'}}>
                {/*<Text style={textStyles.baseText}>Male</Text>*/}
                <Toggle
                    disabledTitleStyle={{backgroundColor:"#000"}}
                    leftTitle={'Male'}
                    rightTitle={'Female'}
                    thumbButton={{
                        width:80,
                        activeBackgroundColor:"#e34309",
                        //inActiveColor:"#e34309",
                        //activeColor:"#e34309",
                        inActiveBackgroundColor:"#e34309"
                    }}
                    trackBar={{
                        activeBackgroundColor:"#000",
                        inActiveBackgroundColor:"#000"
                    }}
                />
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Date</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>15/07/1979</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Time</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>12.50 AM</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Country</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>India</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Place</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>Delhi</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Lat/Long</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>28.7041 N, 77.1025 E</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Language</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText}>English</Text>
            </View>
            <View style={{width: '10%'}}>

            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                {/*<Text style={textStyles.smallText}>Get Horoscope</Text>*/}
                <Button title='Get Horoscope'
                    color={'#e34309'}
                />
            </View>
            <View>
                {/*<Text style={textStyles.smallText}>Post your question</Text>*/}
                <Button title='Post your question' color={'#e34309'}/>
            </View>
        </View>
    </View>
  )

  const MatchMaking = () => (
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:"#e34309", height:50, alignItems:'center'}}>
            <Text style={textStyles.extraLarge}>Partner 1</Text>
        </View>
        <Person/>
        <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:"#e34309", height:50, alignItems:'center'}}>
            <Text style={textStyles.extraLarge}>Partner 2</Text>
        </View>
        <Person/>
    </View>
  )
  
  const renderScene = SceneMap({
    first: Horoscop,
    second: MatchMaking
  })

export default function DataEntry() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {key: 'first', title: 'Horoscope'},
    {key: 'second', title: "Match Making"}
  ])

  const stylesTab = StyleSheet.create({
    activeTab: {
        color: "#e34309"
    },
    passiveTab: {
        color: '#ffff'
    }
  })

  const renderTabBar = props => (
    <TabBar 
        {...props}
        renderLabel={({route, focused, color}) => (
            <Text style={[focused ? stylesTab.activeTab : stylesTab.passiveTab]}>
                {route.title}
            </Text>
        )}
        indicatorStyle={{backgroundColor: '#e34309', width:140, marginHorizontal:30}}
        style={{backgroundColor:'#fff',}}
    />
  )

  return (
    <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
    />
  )
}
