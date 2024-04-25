import {
	Avatar,
	FlatList,
	HStack,
	Icon,
	IconButton,
	Text,
	VStack,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { recentCalls } from '../../utils/fakeData';

const RecentCalls = () => {
	return (
		<>
			<FlatList
				backgroundColor={'#FFFFFF'}
				borderTopRadius={20}
				ListHeaderComponent={
					<Text color={'#000E08'} fontSize={22} marginBottom={4}>
						Recent Calls
					</Text>
				}
				// eslint-disable-next-line react-native/no-inline-styles
				contentContainerStyle={{ padding: 15, paddingBottom: 95 }}
				data={recentCalls}
				renderItem={({ item, index }) => (
					<HStack
						justifyContent={'space-between'}
						alignItems={'center'}
						marginTop={index && '5'}>
						<HStack alignItems={'center'}>
							<Avatar
								width={12}
								height={12}
								source={{
									uri: item.userImage,
								}}>
								<Avatar.Badge bg={'red.500'} />
							</Avatar>
							<VStack marginLeft={2}>
								<Text
									fontSize={20}
									color={
										item.callStatus === 'missed'
											? 'red.500'
											: 'gray.500'
									}>
									{item.userName}
								</Text>
								<HStack alignItems={'center'} space={2}>
									{item.callStatus === 'outgoing' ? (
										<Icon
											as={MaterialCommunityIcons}
											name={'phone-outgoing-outline'}
											size={4}
											color={'violet.500'}
										/>
									) : item.callStatus === 'incoming' ? (
										<Icon
											as={MaterialCommunityIcons}
											name={'phone-incoming-outline'}
											size={4}
											color={'green.500'}
										/>
									) : (
										<Icon
											as={MaterialCommunityIcons}
											name={'phone-cancel-outline'}
											size={4}
											color={'red.500'}
										/>
									)}
									<Text fontSize={16} color={'gray.500'}>
										{item.callTime}
									</Text>
								</HStack>
							</VStack>
						</HStack>
						<IconButton
							colorScheme="gray"
							variant={'ghost'}
							borderRadius={'full'}
							_icon={{
								as: MaterialCommunityIcons,
								name:
									item.callType === 'video'
										? 'video-outline'
										: 'phone-in-talk-outline',
								color: 'gray.500',
								size: 8,
							}}
						/>
					</HStack>
				)}
			/>
		</>
	);
};

export default RecentCalls;
