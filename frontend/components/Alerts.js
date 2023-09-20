import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Alert } from 'react-native'
import { Avatar, Card, Button, Menu, IconButton, Provider as PaperProvider } from 'react-native-paper';

class Alerts extends Component {
   state = {
   }
   render() {
      return (
         <View>
            <Card style = {styles.alert}>
               <Card.Title titleStyle={{ color: "#1059d5", fontWeight:"bold" }} subtitleStyle={{color:"#1059d5"}}
                  title="Patient Bob is at risk for attrition!"
                  subtitle="9/17/2023"
                  right={(props) => <IconButton
                     icon="trash-can-outline"
                     iconColor="#1059d5"
                     size={20}
                     onPress={showAlert}
                   />}
               />
            </Card>
            <Card style = {styles.alert}>
               <Card.Title titleStyle={{ color: "#1059d5", fontWeight:"bold" }} subtitleStyle={{color:"#1059d5"}}
                  title="Patient Rob’s injections are expiring or will soon need to be mixed"
                  subtitle="9/17/2023"
                  right={(props) => <IconButton
                     icon="trash-can-outline"
                     iconColor="#1059d5"
                     size={20}
                     onPress={showAlert}
                   />}
               />
            </Card>
            <Card style = {styles.alert}>
               <Card.Title titleStyle={{ color: "#1059d5", fontWeight:"bold" }} subtitleStyle={{color:"#1059d5"}}
                  title="Sample Alert 3"
                  subtitle="9/16/2023"
                  right={(props) => <IconButton
                     icon="trash-can-outline"
                     iconColor="#1059d5"
                     size={20}
                     onPress={showAlert}
                   />}
               />
            </Card>
            <Card style = {styles.alert}>
               <Card.Title titleStyle={{ color: "#1059d5", fontWeight:"bold" }} subtitleStyle={{color:"#1059d5"}}
                  title="Sample Alert 4"
                  subtitle="9/15/2023"
                  right={(props) => <IconButton
                     icon="trash-can-outline"
                     iconColor="#1059d5"
                     size={20}
                     onPress={showAlert}
                   />}
               />
            </Card>
            <Card style = {styles.alert}>
               <Card.Title titleStyle={{ color: "#1059d5", fontWeight:"bold" }} subtitleStyle={{color:"#1059d5"}}
                  title="Sample Alert 5"
                  subtitle="9/15/2023"
                  right={(props) => <IconButton
                     icon="trash-can-outline"
                     iconColor="#1059d5"
                     size={20}
                     onPress={showAlert}
                   />}
               />
            </Card>
            <View>
            <Button style = {styles.bottomText}>View More Alerts</Button>
            </View>
         </View>
      )
   }
}
export default Alerts

const styles = StyleSheet.create({
   alert: {
      width: Dimensions.get('window').width - 30,
      height: 80,
      marginLeft: 15,
      marginTop: 15,
      borderRadius: 8,
      borderWidth: 3,
      borderColor: '#1059d5'
   },
   bottomText: {
      color: '#1059d5',
      fontSize: 80,
      textAlign: 'center',
      marginTop: 20,
   }
})

const showAlert = () =>
  Alert.alert(
    'Delete this alert?',
    'This action cannot be undone.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
        //onPress: () => Alert.alert('add in delete functionality'),
      },
      {
         text: 'Yes',
         style: 'cancel',
       },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );
