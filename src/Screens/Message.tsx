import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import React from 'react';
import ChatHeader from '../components/Message/ChatHeader';
import Messages from '../components/Message/Messages';

const Message = () => {
	const { params } = useRoute();
	return (
		<VStack flex={1}>
			<ChatHeader chatUser={params} />
			<Messages chatUser={params} />
		</VStack>
	);
};

export default Message;
