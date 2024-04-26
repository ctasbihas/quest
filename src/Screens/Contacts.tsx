import { IconButton, VStack } from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactsList from '../components/Contacts/ContactsList';
import Header from '../components/PageHeader/Header';

const Contacts = () => {
	return (
		<VStack bgColor={'#000E08'} flex={1}>
			<Header
				title="Contacts"
				rightContent={
					<IconButton
						colorScheme="light"
						borderRadius={'full'}
						variant={'outline'}
						width={12}
						height={12}
						_icon={{
							as: Ionicons,
							name: 'person-add-outline',
							color: 'white',
							size: 'xl',
						}}
					/>
				}
			/>
			<ContactsList />
		</VStack>
	);
};

export default Contacts;
