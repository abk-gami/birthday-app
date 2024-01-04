import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const CelebrateBirthday = () => {
 const [birthdayData, setBirthdayData] = useState({
    name: '',
    age: '',
    month: '',
    date: '',
    year: '',
    specialMessage: '',
 });

 const {
    name,
    age,
    month,
    date,
    year,
    specialMessage,
 } = birthdayData;

 const handleBirthdayDataChange = (name, value) => {
    setBirthdayData({...birthdayData, [name]: value});
 };

 const showBirthdayCard = () => {
    if (name !== '' && age !== '' && month !== '' && date !== '' && year !== '') {
      return (
        <View style={styles.birthdayCard}>
          <Text style={styles.cardText}>Happy Birthday {name}!</Text>
          <Text style={styles.cardText}>You are n {age} years old.</Text>
          <Text style={styles.cardText}>
            Born on {month} {date}, {year}.
          </Text>
          {specialMessage && (
            <Text style={styles.cardText}>{specialMessage}</Text>
          )}
        </View>
      );
    }
 };

 return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cake.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={text => handleBirthdayDataChange('name', text)}
          value={name}
        />
        <TextInput
          placeholder="Age"
          onChangeText={text => handleBirthdayDataChange('age', text)}
          value={age}
        />
        <TextInput
          placeholder="Month"
          onChangeText={text => handleBirthdayDataChange('month', text)}
          value={month}
        />
        <TextInput
          placeholder="Date"
          onChangeText={text => handleBirthdayDataChange('date', text)}
          value={date}
        />
        <TextInput
          placeholder="Year"
          onChangeText={text => handleBirthdayDataChange('year', text)}
          value={year}
        />
        <TextInput
          placeholder="Special Message"
          onChangeText={text => handleBirthdayDataChange('specialMessage', text)}
          value={specialMessage}
        />
        <TouchableOpacity onPress={showBirthdayCard}>
          <Text style={styles.buttonText}>Show Birthday Card</Text>
        </TouchableOpacity>
      </View>
      {showBirthdayCard()}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
 },
 formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    width: '80%',
    borderRadius: 10,
 },
 birthdayCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
 },
 buttonText: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    textAlign: 'center',
 },
 cardText: {
    fontSize: 18,
    marginBottom: 10,
 },
});

export default CelebrateBirthday;
