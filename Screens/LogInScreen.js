import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function LogInScreen() {
  return (
    <SafeAreaView style={styles.screen}>  
    <View style={styles.header}>
    <Text style={styles.headerText}>Jobizz</Text>
    </View>

    <View style={styles.welcome}>
    <Text style={styles.welcomeText}>Welcom Back 👋</Text>
    <Text style={styles.welcomeText2}>Let’s log in. Apply to jobs!</Text>
    </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "600",
    color: "#356899"
  },
  welcome: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
welcomeText: {
  fontSize: 24,
  fontWeight: "600",
},
welcomeText2: {
  fontSize: 14,
  fontWeight: "600",
  color: "#95969D"
}



})