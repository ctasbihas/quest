import { useRoute } from '@react-navigation/native';
import { View } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import ChatHeader from '../components/Message/ChatHeader';
import MessageBar from '../components/Message/MessageBar';
import Messages from '../components/Message/Messages';

const Message = () => {
	const { params } = useRoute();
	const { height, width } = Dimensions.get('screen');
	return (
		<View flex={1} background={'black'}>
			<ChatHeader chatUser={params} />
			<Messages chatUser={params} />
			<MessageBar />
		</View>
	);
};

export default Message;
