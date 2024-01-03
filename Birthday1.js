import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Pressable, Modal, Alert } from 'react-native'
import React, {useState} from 'react'

const Birthday1 = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.first}>
            <Text style={styles.text}>Choose the Correct Option from the ones below:</Text>
        </View>

        <View style={styles.second}>
            <Text style={styles.text1}>Gravenberch is .........</Text>
        </View>

        <View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Wrong Answer') }><Text style={styles.buttonText}>
                 A midfielder in NPFL
                    </Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Wrong Answer')}><Text style={styles.buttonText}>
                 A midfielder in Spain
                    </Text></TouchableOpacity>
                    
            </View>
            <View  style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={()=> setIsModalVisible(true)}><Text style={styles.buttonText}>
                 A midfielder in England
                    </Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('Wrong Answer')}><Text style={styles.buttonText}>
                 A midfielder in Germany
                    </Text></TouchableOpacity>
                    
            </View>
        </View>
        <Modal visible={isModalVisible}
            onRequestClose={()=> setIsModalVisible(false)}
            animationType='slide'
        >
            <View style={styles.modalContainer}>
                <Text> Modal Content</Text> 
                <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}><Text style={styles.modalButtonText}>Close</Text></TouchableOpacity>
            </View>
        </Modal>
    </View>
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
    modalContainer: {
        // paddingTop: 45,
        // paddingHorizontal: 10,
        flex: 1,
        // height: 100,
        backgroundColor: '#00ff1e',
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
    modalButton:{
        alignItems:'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 13,
        borderRadius: 8,
        width: '45%',
    },
    modalButtonText: {
        color: '#201c1c',
        fontWeight: '800'
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