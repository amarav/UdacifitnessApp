import React from 'react';
import { View , Text } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

export default class App extends React.Component {
  store = createStore(reducer);
	render() {
		return (
			<View>
			<Provider store={this.store}>
				<View style={{ flex: 1 }}>
					<AddEntry />
				</View>
			</Provider>
			</View>
		);
	}
}