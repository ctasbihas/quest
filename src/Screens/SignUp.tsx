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

const SignUp = ({ navigation }) => {
	const [formValues, setFormValues] = React.useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [show, setShow] = React.useState({
		pass: false,
		confirmPass: false,
	});

	const hanldeSignUp = () => {
		console.log(formValues);
	};
	return (
		<ScrollView>
			<Text textAlign={'center'} paddingX={6} fontSize={'lg'}>
				Get started chatting with friends and families by signing up on
				our app.
			</Text>

			<Stack space={5} w="100%" alignItems="center" marginTop={10}>
				<VStack>
					<Text color={'#24786D'} fontSize={'xl'}>
						Your Name
					</Text>
					<Input
						placeholder="John Doe"
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
						autoCapitalize="words"
						maxLength={30}
						value={formValues.name}
						onChangeText={text =>
							setFormValues({ ...formValues, name: text })
						}
					/>
				</VStack>
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
						type={show.pass ? 'text' : 'password'}
						InputRightElement={
							<Pressable
								onPress={() =>
									setShow({ ...show, pass: !show.pass })
								}>
								<Icon
									as={
										<MaterialIcons
											name={
												show.pass
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
				<VStack>
					<Text color={'#24786D'} fontSize={'xl'}>
						Confirm Password
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
						type={show.confirmPass ? 'text' : 'password'}
						InputRightElement={
							<Pressable
								onPress={() =>
									setShow({
										...show,
										confirmPass: !show.confirmPass,
									})
								}>
								<Icon
									as={
										<MaterialIcons
											name={
												show.confirmPass
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
						value={formValues.confirmPassword}
						onChangeText={text =>
							setFormValues({
								...formValues,
								confirmPassword: text,
							})
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
					Create Account
				</Text>
			</Pressable>

			<Text>
				Already have an account?{' '}
				<Text underline onPress={() => navigation.replace('SignIn')}>
					Sign In
				</Text>
			</Text>
		</ScrollView>
	);
};

export default SignUp;
