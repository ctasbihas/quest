import {
	Divider,
	NativeBaseProvider,
	Pressable,
	Text,
	View,
} from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import SocialButton from '../components/Buttons/SocialButton';

const Onboarding = ({ navigation }: { navigation: any }) => {
	const screenWidth = Dimensions.get('window').width;
	return (
		<NativeBaseProvider>
			<View backgroundColor={'#1A1A1A'} flex={1} paddingX={'5'}>
				<Text color={'white'} fontSize={'5xl'} textAlign={'center'}>
					Quest
				</Text>
				<Text color={'white'} fontSize={'8xl'} lineHeight={'xs'}>
					Connect friends easily & quickly
				</Text>
				<Text
					color={'#B9C1BE'}
					fontSize={'xl'}
					marginTop={2}
					marginBottom={10}>
					Our chat app is the perfect way to stay connected with
					friends and family.
				</Text>
				<SocialButton />
				<View
					flexDirection={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					marginY={5}>
					<Divider w={screenWidth * 0.4} />
					<Text fontSize={'lg'} color={'white'}>
						Or
					</Text>
					<Divider w={screenWidth * 0.4} />
				</View>
				<Pressable
					onPress={() => navigation.navigate('Auth')}
					backgroundColor={'white'}
					paddingY={3}
					borderRadius={'md'}>
					<Text fontSize={24} textAlign={'center'}>
						Continue With Email
					</Text>
				</Pressable>
			</View>
		</NativeBaseProvider>
	);
};

export default Onboarding;
