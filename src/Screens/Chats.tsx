import { VStack } from 'native-base';
import React from 'react';
import Messages from '../components/Chats/Chats';
import Header from '../components/Chats/Header';
import Stories from '../components/Chats/Stories';

const Chats = () => {
	return (
		<VStack bgColor={'#000E08'} flex={1}>
			<Header />
			<Stories />
			<Messages />
		</VStack>
	);
};

export default Chats;
