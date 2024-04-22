import {
	Icon,
	Input,
	Pressable,
	ScrollView,
	Stack,
	Text,
	VStack,
} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignIn = ({ navigation }) => {
	const [formValues, setFormValues] = React.useState({
		email: '',
		password: '',
	});
	const [show, setShow] = React.useState(false);

	const hanldeSignUp = () => {
		console.log(formValues);
	};
	return (
		<ScrollView>
			<Text textAlign={'center'} paddingX={6} fontSize={'lg'}>
				Welcome back! Sign in to continue chatting with friends and
				family.
			</Text>

			<Stack space={5} w="100%" alignItems="center" marginTop={10}>
				<VStack>
					<Text color={'#24786D'} fontSize={'xl'}>
						Your Email
					</Text>
					<Input
						placeholder="example@gmail.com"
						w={{
							base: '90%',
							md: '25%',
						}}
						fontSize={'2xl'}
						borderWidth={0}
						paddingLeft={'0'}
						paddingY={'2'}
						backgroundColor={'muted.100'}
						borderBottomWidth={'4'}
						borderRadius={'none'}
						keyboardType="email-address"
						autoCapitalize="none"
						value={formValues.email}
						onChangeText={text =>
							setFormValues({ ...formValues, email: text })
						}
					/>
				</VStack>
				<VStack>
					<Text color={'#24786D'} fontSize={'xl'}>
						Password
					</Text>
					<Input
						placeholder="********"
						w={{
							base: '90%',
							md: '25%',
						}}
						fontSize={'2xl'}
						borderWidth={0}
						paddingLeft={'0'}
						paddingY={'2'}
						backgroundColor={'muted.100'}
						borderBottomWidth={'4'}
						borderRadius={'none'}
						autoCapitalize="none"
						type={show ? 'text' : 'password'}
						InputRightElement={
							<Pressable onPress={() => setShow(!show)}>
								<Icon
									as={
										<MaterialIcons
											name={
												show
													? 'visibility-off'
													: 'visibility'
											}
										/>
									}
									size={10}
									mr="2"
									color="muted.400"
								/>
							</Pressable>
						}
						value={formValues.password}
						onChangeText={text =>
							setFormValues({ ...formValues, password: text })
						}
					/>
				</VStack>
			</Stack>

			<Pressable
				marginTop={'10'}
				paddingY={4}
				paddingX={10}
				rounded={'xl'}
				alignSelf={'center'}
				backgroundColor={'emerald.600'}
				_pressed={{ opacity: 80 }}
				onPress={hanldeSignUp}>
				<Text
					fontSize={20}
					color={'white'}
					fontWeight={'bold'}
					textAlign={'center'}>
					Sign In
				</Text>
			</Pressable>

			<Text textAlign={'center'} marginTop={20} fontSize={20}>
				Don't have an account?{' '}
				<Text
					underline
					fontWeight={'black'}
					onPress={() => navigation.replace('SignUp')}>
					Sign Up
				</Text>
			</Text>
		</ScrollView>
	);
};

export default SignIn;
