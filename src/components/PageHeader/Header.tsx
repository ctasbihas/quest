import { HStack, IconButton, Text } from 'native-base';
import React, { ReactNode } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from '../../utils';

const Header = ({
	title,
	rightContent,
}: {
	title: string;
	rightContent: ReactNode;
}) => {
	return (
		<HStack
			alignItems={'center'}
			justifyContent={'space-between'}
			paddingX={5}
			paddingY={8}
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
				{title}
			</Text>
			{rightContent}
		</HStack>
	);
};

export default Header;
