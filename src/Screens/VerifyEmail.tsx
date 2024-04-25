import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Pressable, Text, VStack, View } from 'native-base';
import React from 'react';

type User = {
	id: string;
	name: string;
	email: string;
	emailVeified: boolean;
	password: string;
	createdAt: Date;
	updatedAt: Date;
};

const VerifyEmail = () => {
	const [user, setUser] = React.useState<User | null>(null);
	const [OTP, setOTP] = React.useState<string>('');

	React.useEffect(() => {
		(async function () {
			const stringifiedUser = await AsyncStorage.getItem('user');
			if (stringifiedUser) {
				const userData = JSON.parse(stringifiedUser);

				setUser(userData);
			}
		})();
	}, []);
	return (
		<View>
			<Text textAlign={'center'} fontSize={16} marginX={10} marginY={5}>
				Enter OTP sent to{' '}
				<Text fontWeight={'black'}>{user?.email}</Text>
			</Text>

			<VStack alignItems={'center'} space={10}>
				<Input
					keyboardType="numeric"
					maxLength={6}
					fontSize={'2xl'}
					color={'black'}
					width={'32'}
					letterSpacing={'2xl'}
					textAlign={'center'}
					value={OTP}
					onChangeText={setOTP}
				/>

				<Pressable
					backgroundColor={'emerald.600'}
					rounded={'lg'}
					_pressed={{ opacity: 80 }}>
					<Text
						marginY={3}
						marginX={7}
						color={'white'}
						fontWeight={'bold'}
						fontSize={16}>
						Confirm
					</Text>
				</Pressable>
			</VStack>
		</View>
	);
};

export default VerifyEmail;
