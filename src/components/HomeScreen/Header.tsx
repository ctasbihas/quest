import { HStack, IconButton, Image, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
	const { width } = Dimensions.get('screen');
	return (
		<HStack
			alignItems={'center'}
			justifyContent={'space-between'}
			bgColor={'#000E08'}
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
			<Image
				width={12}
				height={12}
				resizeMode="cover"
				borderRadius={'full'}
				borderWidth={2}
				borderColor={'emerald.700'}
				source={{
					uri: 'https://wallpaperaccess.com/full/317501.jpg',
				}}
				alt={'Alternate Text ' + 'xs'}
			/>
		</HStack>
	);
};

export default Header;
