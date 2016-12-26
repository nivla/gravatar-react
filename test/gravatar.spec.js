import React from 'react';
import { shallow } from 'enzyme';
import Gravatar from '../src/index';
import { expect } from 'chai';

describe('<Gravatar />', () => {
	it('render img src corretcly', () => {
		var gravatar =  shallow(
			<Gravatar
				email="dickson.alvin@gmail.com"
				size="150"
				alt="Alvin Dickson"
			/>
		);

		var urlStringExpected = "http://www.gravatar.com/avatar/376a6a2cb18b7a26bc437119bb77358c?r=G&s=150";
		expect(gravatar.find('img').node.props).to.have.property("src", urlStringExpected);
	});

	it('accepts force params', () => {
		var gravatar = shallow(
			<Gravatar
				email="dickson.alvin@gmail.com"
				size="150"
				alt="Alvin Dickson"
				force
			/>
		);

		var urlStringExpected = "http://www.gravatar.com/avatar/376a6a2cb18b7a26bc437119bb77358c?r=G&s=150&f=y";
		expect(gravatar.find('img').node.props).to.have.property("src", urlStringExpected);
	});

	it('accepts default image params', () => {
		var gravatar = shallow(
			<Gravatar
				email="dickson.alvin@gmail.com"
				size="150"
				alt="Alvin Dickson"
				default="http://someimage.jpg"
			/>
		);

		var urlStringExpected = "http://www.gravatar.com/avatar/376a6a2cb18b7a26bc437119bb77358c?r=G&s=150&d=http%3A%2F%2Fsomeimage.jpg";
		expect(gravatar.find('img').node.props).to.have.property("src", urlStringExpected);
	});
});