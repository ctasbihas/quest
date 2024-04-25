import { Container } from 'native-base';
import React from 'react';
import Header from '../components/HomeScreen/Header';
import Stories from '../components/HomeScreen/Stories';

const HomeScreen = () => {
	return (
		<Container>
			<Header />
			<Stories />
		</Container>
	);
};

export default HomeScreen;
