import React from 'react';
import { mount } from 'enzyme';
import App from './App.jsx';

it('renders without crashing', () => {
	mount(<App />);
});