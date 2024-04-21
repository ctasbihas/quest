import { HStack, IconButton } from 'native-base';
import React from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';

const SocialButton = () => {
	return (
		<HStack space={5} justifyContent={'center'}>
			<IconButton
				colorScheme="muted"
				variant={'outline'}
				_icon={{
					as: Iconicons,
					name: 'logo-facebook',
					color: 'white',
					size: '2xl',
				}}
				width={16}
				height={16}
				borderRadius={'full'}
			/>
			<IconButton
				colorScheme="muted"
				variant={'outline'}
				_icon={{
					as: Iconicons,
					name: 'logo-google',
					color: 'white',
					size: '2xl',
				}}
				width={16}
				height={16}
				borderRadius={'full'}
			/>
			<IconButton
				colorScheme="muted"
				variant={'outline'}
				_icon={{
					as: Iconicons,
					name: 'logo-instagram',
					color: 'white',
					size: '2xl',
				}}
				width={16}
				height={16}
				borderRadius={'full'}
			/>
		</HStack>
	);
};

export default SocialButton;
