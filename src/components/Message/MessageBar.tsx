import { HStack, Icon, Input } from 'native-base';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUserContext } from '../../context/UserContext';

const MessageBar = () => {
	const { height } = Dimensions.get('window');
	const { removeUserData } = useUserContext();
	const [message, setMessage] = useState('');

	const handleSend = () => {
		if (message.trim()) {
			console.log('Sending message:', message);
			setMessage('');
		}
	};

	return (
		<HStack
			space={3}
			alignItems="center"
			justifyContent="space-between"
			bg="white"
			rounded="full"
			paddingY={2}
			paddingX={3}
			margin={2}
			height={height * 0.07}>
			<Icon as={Entypo} name="attachment" size={7} />
			<Input
				placeholder="Write your message"
				flex={1}
				flexWrap={'wrap'}
				fontSize={18}
				borderWidth={0}
				p={2}
				height={height * 0.05}
				value={message}
				onChangeText={setMessage}
				returnKeyType="send"
				onSubmitEditing={handleSend}
			/>
			{message.trim() ? (
				<Icon
					as={MatComIcons}
					name="send-circle"
					size={10}
					color="#20A090"
					onPress={handleSend}
				/>
			) : (
				<HStack space={3}>
					<Icon as={Entypo} name="camera" size={7} />
					<Icon
						as={Feather}
						name="mic"
						size={7}
						onPress={removeUserData}
					/>
				</HStack>
			)}
		</HStack>
	);
};

export default MessageBar;
