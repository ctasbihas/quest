import {
	Box,
	Icon,
	Input,
	Pressable,
	ScrollView,
	Spinner,
	Stack,
	Text,
	VStack,
	useToast,
} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useUserContext } from '../context/UserContext';

const SignIn = ({ navigation }: any) => {
	const { storeUserData } = useUserContext();
	const [formValues, setFormValues] = React.useState({
		email: '',
		password: '',
	});
	const [show, setShow] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const toast = useToast();

	const handleSignIn = () => {
		setLoading(true);

		const query = `email=${formValues.email}&password=${formValues.password}`;
		fetch(`${process.env.SERVER_URL}/signin?${query}`)
			.then(res => res.json())
			.then(async data => {
				if (data.error) {
					toast.show({
						render: () => {
							return (
								<Box
									bg="error.500"
									px="2"
									py="1"
									rounded="sm"
									mb={5}>
									<Text fontSize={20} color={'white'}>
										{data.error}
									</Text>
								</Box>
							);
						},
						placement: 'top',
					});
				} else {
					toast.show({
						description: 'Signed in successfully',
						placement: 'top',
					});
					storeUserData(data);
				}
				setLoading(false);
			})
			.catch(err => {
				console.log('Error signing in:', err);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
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
				onPress={handleSignIn}
				disabled={loading}>
				{loading ? (
					<Spinner color="white" />
				) : (
					<Text
						fontSize={20}
						color={'white'}
						fontWeight={'bold'}
						textAlign={'center'}>
						Sign In
					</Text>
				)}
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
