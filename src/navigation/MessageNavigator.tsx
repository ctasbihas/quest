import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Message from '../Screens/Message';
import { useUserContext } from '../context/UserContext';

const MessageStack = createStackNavigator();

const MessageNavigator = () => {
	const { user } = useUserContext();
	const navigation = useNavigation();

	React.useEffect(() => {
		if (!user) {
			navigation.goBack();
		}
	}, [user, navigation]);

	return (
		<MessageStack.Navigator>
			<MessageStack.Screen name="Message" component={Message} />
		</MessageStack.Navigator>
	);
};

export default MessageNavigator;
