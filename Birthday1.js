import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Modal, Button } from 'react-native'
import React, {useState} from 'react'

const Birthday1 = () => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>

        <Modal animationType='slide' visible={!modalVisible}>
            <View style={styles.body}>
                <Text style={{fontSize:20}}>Wrong Answer!</Text>


                <Button title='OK' onPress={() => setModalVisible(!modalVisible)}/>
            </View>
        </Modal>

        <View style={styles.first}>
            <Text style={styles.text}>Choose the Correct Option from the ones below:</Text>
        </View>

        <View style={styles.second}>
            <Text style={styles.text1}>Gravenberch is .........</Text>
        </View>


        <View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}><Text style={styles.buttonText}>
                 A midfielder in NPFL
                    </Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>
                 A midfielder in Spain
                    </Text></TouchableOpacity>
                    
            </View>
            <View  style={styles.body}>
                <TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>
                 A midfielder in England
                    </Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>
                 A midfielder in Germany
                    </Text></TouchableOpacity>
                    
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Birthday1

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: '#ff00d0',
    },
    text:{
        color: '#fff',
        fontSize: 17,
        fontWeight: '400'
    },
    text1:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 25,
    },
    button:{
        alignItems:'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 13,
        borderRadius: 8,
        width: '45%',
    },
    buttonText: {
        color: '#201c1c',
        fontWeight: '800'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    first: {
        marginTop: "30%",
    },
    second: {
        marginTop: '20%'
    }

})