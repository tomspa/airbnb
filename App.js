import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text></Text>
			</View>
		);
	}
};

export default createBottomTabNavigator({
	Home: App
},
	{
		navigationOptions: ({ navgation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Home':
						iconName = 'search';
				}
				return <FontAwesome name={iconName} size={25} color={tintColor} />
			}
		}),
		tabBarOptions: {
			activeTintColor: '#fd5c63',
			inactiveTintColor: 'gray',
		}
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
