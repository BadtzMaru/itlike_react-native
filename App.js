import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

const App: () => React$Node = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				<View>
					<Text>Hello world</Text>
				</View>
			</SafeAreaView>
		</>
	);
};

export default App;
