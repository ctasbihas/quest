import { Avatar, FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { width } from '../../utils';
import { contacts } from '../../utils/fakeData';
import { groupContactsByInitials } from '../../utils/sortContacts';

const ContactsList = () => {
	const sections = groupContactsByInitials(contacts);

	return (
		<FlatList
			backgroundColor={'#FFFFFF'}
			borderTopRadius={20}
			contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
			data={sections}
			keyExtractor={item => item.initialLetter}
			ListHeaderComponent={
				<Text color={'#000E08'} fontSize={32}>
					My Contacts
				</Text>
			}
			renderItem={({ item }) => (
				<VStack>
					<Text
						color={'#000E08'}
						fontSize={28}
						marginTop={8}
						fontWeight={'bold'}>
						{item.initialLetter}
					</Text>
					<FlatList
						data={item.data}
						keyExtractor={item => item.id}
						renderItem={({ item }) => (
							<HStack
								alignItems={'center'}
								shadow={2}
								marginTop={4}>
								<Avatar
									width={16}
									height={16}
									source={{
										uri: (item as { userImage: string })
											.userImage,
									}}
								/>
								<VStack marginLeft={2}>
									<Text fontSize={22} color="black">
										{
											(item as { userName: string })
												.userName
										}
									</Text>
									<Text
										fontSize={16}
										color={'gray.500'}
										numberOfLines={1}
										maxWidth={width * 0.8}>
										{(item as { about: string }).about}
									</Text>
								</VStack>
							</HStack>
						)}
					/>
				</VStack>
			)}
		/>
	);
};

export default ContactsList;
