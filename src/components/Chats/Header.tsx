import { Avatar, HStack, IconButton, Text } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from '../../utils';

const Header = () => {
	return (
		<HStack
			alignItems={'center'}
			justifyContent={'space-between'}
			paddingX={5}
			paddingY={3}
			style={{ width }}>
			<IconButton
				colorScheme="light"
				borderRadius={'full'}
				variant={'outline'}
				width={12}
				height={12}
				_icon={{
					as: AntDesign,
					name: 'search1',
					color: 'white',
					size: 'xl',
				}}
			/>
			<Text fontSize={24} color={'white'}>
				Home
			</Text>
			<Avatar
				width={12}
				height={12}
				borderRadius={'full'}
				source={{
					uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				}}>
				Me
			</Avatar>
		</HStack>
	);
};

export default Header;
