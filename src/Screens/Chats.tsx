import { Avatar, VStack } from 'native-base';
import React from 'react';
import Messages from '../components/Chats/Chats';
import Stories from '../components/Chats/Stories';
import Header from '../components/PageHeader/Header';
import { useUserContext } from '../context/UserContext';

const Chats = ({ navigation }) => {
	const { user } = useUserContext();
	return (
		<VStack bgColor={'#000E08'} flex={1}>
			<Header
				title="Chats"
				rightContent={
					<Avatar
						width={12}
						height={12}
						borderRadius={'full'}
						source={{
							uri: user.profilePic as string,
						}}>
						{user.name[0]}
					</Avatar>
				}
			/>
			<Stories />
			<Messages navigation={navigation} />
		</VStack>
	);
};

export default Chats;
