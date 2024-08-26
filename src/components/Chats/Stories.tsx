import {
	Avatar,
	FlatList,
	HStack,
	IconButton,
	Text,
	VStack,
} from 'native-base';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useUserContext } from '../../context/UserContext';
import { width } from '../../utils';
import { stories } from '../../utils/fakeData';

const Stories = () => {
	const { user } = useUserContext();
	if (!user) {
		return null;
	}
	return (
		<HStack paddingBottom={5} style={{ width }}>
			<FlatList
				data={stories}
				showsHorizontalScrollIndicator={false}
				horizontal
				keyExtractor={story => story.id.toString()}
				renderItem={({ item, index }) =>
					!index ? (
						<VStack alignItems={'center'} space={2} marginX={5}>
							<VStack>
								<Avatar
									width={20}
									height={20}
									borderRadius={'full'}
									borderWidth={2}
									borderColor={'white'}
									backgroundColor={'#000E08'}
									padding={1}
									source={{
										uri: user.profilePic as string,
									}}
								/>
								<IconButton
									colorScheme="light"
									borderRadius={'full'}
									variant={'solid'}
									backgroundColor={'white'}
									width={7}
									height={7}
									mt={-7}
									alignSelf={'flex-end'}
									_icon={{
										as: Entypo,
										name: 'plus',
										color: 'black',
										size: 'lg',
									}}
								/>
							</VStack>
							<Text fontSize={18} color={'white'}>
								My Status
							</Text>
						</VStack>
					) : (
						<VStack alignItems={'center'} space={2} marginRight={5}>
							<Avatar
								width={20}
								height={20}
								borderRadius={'full'}
								borderWidth={2}
								borderColor={'green.700'}
								padding={1}
								backgroundColor={'dark.50'}
								source={{ uri: item.userImage }}
							/>
							<Text fontSize={18} color={'white'}>
								{item.userName.split(' ')[0]}
							</Text>
						</VStack>
					)
				}
			/>
		</HStack>
	);
};

export default Stories;
