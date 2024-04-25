import { Avatar, VStack } from 'native-base';
import React from 'react';
import Messages from '../components/Chats/Messages';
import Stories from '../components/Chats/Stories';
import Header from '../components/PageHeader/Header';

const Chats = () => {
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
							uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
						}}>
						Me
					</Avatar>
				}
			/>
			<Stories />
			<Messages />
		</VStack>
	);
};

export default Chats;
