import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Toggle from 'react-native-toggle-element'
import {SelectList} from 'react-native-dropdown-select-list'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import DateTimePicker from '@react-native-community/datetimepicker'


export default function Horoscop() {
    const [name, setName] = useState("Durlabh Jain")
    const [language, setLanguage] = useState("English")
    const [open, setOpen] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const [items, setItems] = useState([
        {label:'English', value:'English'},
        {label:'Hindi', value:'Hindi'}
    ])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
    DateTimePicker.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
    });
    };

    const showDatepicker = () => {
    showMode('date');
    };

    const showTimepicker = () => {
    showMode('time');
    };

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

    const data = [
        {key:'1', value:'English'},
        {key:'2', value:'Hindi'}
    ]

  return (
    <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Name</Text>
            </View>
            <View style={{width: '50%'}}>
                {/*<Text style={textStyles.baseText}>Durlabh Jain</Text>*/}
                <TextInput
                    style={textStyles.baseText}
                    onChangeText={setName}
                    value={name}
                />
            </View>
            <View style={{width: '10%'}}>
                <Icon name='person'/>
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
                <Icon name='people'/>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Date</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText} /*onPress={() => setOpenDate(true)}*/ onPress={showDatepicker}>15/07/1979</Text>
                <DatePicker 
                    modal
                    open={openDate}
                    date={date}
                    onConfirm={(date) => {setOpenDate(false); setDate(date)}}
                    onCancel={() => {setOpen(false)}}/>
            </View>
            <View style={{width: '10%'}}>
                <Icon name='calendar-sharp'/>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Birth Time</Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={textStyles.baseText} onPress={showTimepicker}>12.50 AM</Text>
            </View>
            <View style={{width: '10%'}}>
                <Icon name='time-outline'/>
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
                <Icon name='globe-outline'/>
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
                <Icon name='location-sharp'/>
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
                <Icon name='navigate'/>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', height:50, padding:5}}>
            <View style={{width: '40%'}}>
                <Text style={textStyles.baseText}>Language</Text>
            </View>
            <View style={{width: '50%'}}>
                {/*<Text style={textStyles.baseText}>English</Text>*/}
                <DropDownPicker
                    open={open}
                    value={language}
                    items={items}
                    setOpen={setOpen}
                    setValue={setLanguage}
                    setItems={setItems}/>
            </View>
            <View style={{width: '10%'}}>
                <FaIcon name='language'/>
            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', paddingBottom:10}}>
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
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <FaIcon name='twitter' size={20}/>
            <FaIcon name='facebook' size={20}/>
            <FaIcon name='whatsapp' size={20}/>
            <FaIcon name='envelope-o' size={20}/>
            <EntypoIcon name='dots-three-horizontal' size={20}/>
        </View>
    </View>
  )
}
