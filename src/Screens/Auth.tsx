import { useNavigation } from '@react-navigation/native';
import {
	Box,
	HStack,
	Icon,
	Input as NbInput,
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

type Variant = 'Register' | 'Login';

const Auth = () => {
	const navigation = useNavigation();
	const { storeUserData } = useUserContext();
	const [option, setOption] = React.useState<Variant>('Register');
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [show, setShow] = React.useState({
		pass: false,
		confirmPass: false,
	});
	const [loading, setLoading] = React.useState(false);

	const toast = useToast();

	const handleSubmit = () => {
		setLoading(true);
		const query = `email=${email}&password=${password}`;
		const url =
			option === 'Register'
				? `${process.env.SERVER_URL}/register`
				: `${process.env.SERVER_URL}/login?${query}`;
		const method = option === 'Register' ? 'POST' : 'GET';
		const f = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		};

		const fetchData = () => {
			if (option === 'Register') {
				return fetch(url, f);
			} else {
				return fetch(url, { method });
			}
		};

		fetchData()
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
						description:
							option === 'Register'
								? 'Registration Complete'
								: 'Login Successful',
						placement: 'bottom',
						avoidKeyboard: true,
					});
					storeUserData(data);
				}
			})
			.catch(() => {
				toast.show({
					description: 'An error occurred. Please try again.',
					placement: 'top',
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<ScrollView>
			<HStack
				justifyContent="space-between"
				alignItems="center"
				paddingX={4}
				paddingY={2}
				backgroundColor="white"
				borderBottomWidth={1}
				borderColor="gray.200">
				<MaterialIcons
					name="arrow-back"
					size={24}
					color="black"
					onPress={() => navigation.goBack()}
				/>
				<Text fontSize={18} fontWeight="bold">
					{option}
				</Text>
				<MaterialIcons name="more-vert" size={24} color="black" />
			</HStack>
			<Text textAlign={'center'} paddingX={6} fontSize={'lg'}>
				{option === 'Register'
					? 'Get started chatting with friends and families by registering on our app.'
					: 'Welcome back! Login to continue chatting with friends and family.'}
			</Text>

			<Stack space={5} w="100%" alignItems="center" marginTop={10}>
				{option === 'Register' && (
					<Input
						label="Name"
						placeholder="Full Name"
						setState={setName}
						state={name}
						show={true}
					/>
				)}
				<Input
					label="Email"
					placeholder="example@gmail.com"
					setState={setEmail}
					state={email}
					show={true}
				/>

				<Input
					label="Password"
					placeholder="********"
					setState={setPassword}
					state={password}
					show={show.pass}
					setShow={() => setShow({ ...show, pass: !show.pass })}
					isPassword={true}
				/>
				{option === 'Register' && (
					<Input
						label="Confirm Password"
						placeholder="********"
						state={confirmPassword}
						setState={setConfirmPassword}
						isPassword={true}
						show={show.confirmPass}
						setShow={() =>
							setShow({ ...show, confirmPass: !show.confirmPass })
						}
					/>
				)}
			</Stack>

			<Pressable
				marginTop={'10'}
				paddingY={4}
				paddingX={10}
				rounded={'xl'}
				alignSelf={'center'}
				backgroundColor={'emerald.600'}
				_pressed={{ opacity: 80 }}
				onPress={handleSubmit}
				disabled={loading}>
				{loading ? (
					<Spinner color="white" />
				) : (
					<Text
						fontSize={20}
						color={'white'}
						fontWeight={'bold'}
						textAlign={'center'}>
						{option}
					</Text>
				)}
			</Pressable>

			<Text textAlign={'center'} marginTop={20} fontSize={20}>
				{option === 'Register'
					? 'Already have an account?'
					: "Don't have an account?"}{' '}
				<Text
					underline
					fontWeight={'black'}
					onPress={() =>
						setOption(option === 'Register' ? 'Login' : 'Register')
					}>
					{option === 'Register' ? 'Login' : 'Register'}
				</Text>
			</Text>
		</ScrollView>
	);
};

const Input = ({
	label,
	placeholder,
	state,
	setState,
	isPassword = false,
	show,
	setShow,
}: {
	label: string;
	placeholder: string;
	state: string;
	setState: (text: string) => void;
	isPassword?: boolean;
	show?: boolean;
	setShow?: () => void;
}) => {
	return (
		<VStack>
			<Text color={'#24786D'} fontSize={'xl'}>
				{label}
			</Text>
			<NbInput
				placeholder={placeholder}
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
				keyboardType={label === 'Email' ? 'email-address' : 'default'}
				autoCapitalize={label === 'Name' ? 'words' : 'none'}
				value={state}
				onChangeText={setState}
				type={show ? 'text' : 'password'}
				InputRightElement={
					isPassword ? (
						<Pressable onPress={setShow}>
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
					) : (
						<></>
					)
				}
			/>
		</VStack>
	);
};

export default Auth;
