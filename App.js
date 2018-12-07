import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import EStylSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';

import Home from './Screens/Home';
import Profile from './Screens/Profile';

EStylSheet.build();

export default createBottomTabNavigator({
	Home,
	Profile
},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Home':
						iconName = 'search';
						break;
					case 'Profile':
						iconName = 'user-o';
						break;

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

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
