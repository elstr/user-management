import React from 'react';
import {shallow} from 'enzyme';
import Button from '../components/Button';

it('renders the button', () => {
  const wrapper = shallow(<Button/>);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('it checks the children of the button', () => {
  const wrapper = shallow(<Button>button with text</Button>);
  expect(wrapper.text()).toEqual("button with text");
});
