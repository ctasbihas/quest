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
import { width } from '../../utils';
import { stories } from '../../utils/fakeData';

const Stories = () => {
	return (
		<HStack paddingY={5} style={{ width }}>
			<FlatList
				data={stories}
				horizontal
				keyExtractor={story => story.id.toString()}
				renderItem={story =>
					story.item.id === 0 ? (
						<VStack alignItems={'center'} space={2} marginLeft={5}>
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
										uri: story.item.userImage,
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
						<VStack alignItems={'center'} space={2} marginLeft={5}>
							<Avatar
								width={20}
								height={20}
								borderRadius={'full'}
								borderWidth={2}
								borderColor={'green.700'}
								padding={1}
								backgroundColor={'dark.50'}
								source={{ uri: story.item.userImage }}
							/>
							<Text fontSize={18} color={'white'}>
								{story.item.userName.split(' ')[0]}
							</Text>
						</VStack>
					)
				}
			/>
		</HStack>
	);
};

export default Stories;
