import { Avatar, VStack } from 'native-base';
import React from 'react';
import Conversations from '../components/Chats/Conversations';
import Stories from '../components/Chats/Stories';
import Header from '../components/PageHeader/Header';
import { useUserContext } from '../context/UserContext';

import { NavigationProp } from '@react-navigation/native';

const Chats = ({ navigation }: { navigation: NavigationProp<any> }) => {
	const { user } = useUserContext();

	if (user) {
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
				<Conversations navigation={navigation} />
			</VStack>
		);
	}
};

export default Chats;
