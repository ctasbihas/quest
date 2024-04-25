import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Screens from './Screens/Screens';
import { UserProvider } from './context/UserContext';

const App = () => {
	return (
		<NativeBaseProvider>
			<UserProvider>
				<Screens />
			</UserProvider>
		</NativeBaseProvider>
	);
};

export default App;
