import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { useUserContext } from '../context/UserContext';
import AuthScreens from './AuthScreens';
import MainScreens from './MainScreens';
import SharedScreens from './SharedScreens';

const Screens = () => {
	const { user, isLoading } = useUserContext();

	React.useLayoutEffect(() => {
		if (!isLoading) {
			SplashScreen.hide();
		}
	}, [isLoading]);
	console.log(isLoading, user);

	return (
		<NavigationContainer>
			{user.email ? <MainScreens /> : <AuthScreens />}
			{/* {user.email && <SharedScreens />} */}
		</NavigationContainer>
	);
};

export default Screens;
