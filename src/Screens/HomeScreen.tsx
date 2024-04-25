import { VStack } from 'native-base';
import React from 'react';
import Header from '../components/HomeScreen/Header';
import Messages from '../components/HomeScreen/Messages';
import Stories from '../components/HomeScreen/Stories';

const HomeScreen = () => {
	return (
		<VStack bgColor={'#000E08'} flex={1}>
			<Header />
			<Stories />
			<Messages />
		</VStack>
	);
};

export default HomeScreen;
