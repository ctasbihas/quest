import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

interface User {
	id: String;
	name: String;
	profilePic: String;
	email: String;
	emailVerified: Boolean;
	password: String;
	createdAt: Date;
	updatedAt: Date;
}

interface UserContextProps {
	user: User | null;
	isLoading: Boolean;
	storeUserData: (data: User) => void;
	removeUserData: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getUserData = async () => {
			try {
				const userData = await AsyncStorage.getItem('user');

				if (userData) {
					const parsedUser = JSON.parse(userData);
					setUser(parsedUser);
				} else {
					setUser({
						id: '',
						name: '',
						profilePic: '',
						email: '',
						emailVerified: false,
						password: '',
						createdAt: new Date(),
						updatedAt: new Date(),
					});
				}
			} catch (error) {
				console.error('Error fetching user data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		getUserData();
	}, []);

	const storeUserData = async (data: User) => {
		try {
			await AsyncStorage.setItem('user', JSON.stringify(data));
			setUser(data);
		} catch (error) {
			console.error('Error storing user data:', error);
		}
	};

	const removeUserData = async () => {
		try {
			await AsyncStorage.removeItem('user');
			setUser({
				id: '',
				name: '',
				profilePic: '',
				email: '',
				emailVerified: false,
				password: '',
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		} catch (error) {
			console.error('Error removing user data:', error);
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				isLoading,
				storeUserData,
				removeUserData,
			}}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return context;
};
