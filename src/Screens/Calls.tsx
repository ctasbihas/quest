import { IconButton, VStack } from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecentCalls from '../components/Calls/RecentCalls';
import Header from '../components/PageHeader/Header';

const Calls = () => {
	return (
		<VStack bgColor={'#000E08'} flex={1}>
			<Header
				title="Calls"
				rightContent={
					<IconButton
						colorScheme="light"
						borderRadius={'full'}
						variant={'outline'}
						width={12}
						height={12}
						_icon={{
							as: MaterialIcons,
							name: 'add-call',
							color: 'white',
							size: 'xl',
						}}
					/>
				}
			/>
			<RecentCalls />
		</VStack>
	);
};

export default Calls;
