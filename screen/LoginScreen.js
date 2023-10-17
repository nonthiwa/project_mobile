import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput } from 'react-native';
import iconfood from '../assets/iconfood.jpg';

const LoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Image style={{ height: 200, width: 200 }} source={iconfood} />
        <Text style={{ color: '#3f2406', fontSize: 30, fontWeight: '600' }}>เข้าสู่ระบบ</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={iconfood} style={styles.icon} /> {/* แสดงรูปภาพที่ต้องการ */}
          <TextInput
            placeholder={"อีเมล"}
            // onChangeText={(text) => setEmail(text)}
            // value={email}
            style={styles.input}
          />
        </View>
        <TouchableHighlight style={styles.button_login} onPress={() => navigation.navigate('login')} underlayColor="#f4eeee">
          <Text style={styles.buttonTextLogin}>เข้าสู่ระบบ</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4eeee',
  },
  inputContainer: {
    flexDirection: 'row', // เพิ่มการจัดวางแนวนอน
    backgroundColor: '#d9d9d9',
    borderColor: '#d9d9d9',
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1, // ให้ TextInput ขยายตามพื้นที่ที่เหลือ
  },
  button_login: {
    height: 50,
    width: 300,
    backgroundColor: '#3f2406',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  buttonTextLogin: {
    color: '#f4eeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextRegister: {
    color: '#3f2406',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default LoginScreen;
