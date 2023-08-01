import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';

const HomeScreen = () => {
  const [messages, setMessages] = useState([]);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>
        {messages.length > 0 ? <View>Messages</View> : <Features />}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
