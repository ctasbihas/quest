import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import React from 'react';
import ChatHeader from '../components/Message/ChatHeader';

const Message = ({ navigation }) => {
	const { params } = useRoute();
	return (
		<VStack>
			<ChatHeader chatUser={params} navigation={navigation} />
		</VStack>
	);
};

export default Message;
