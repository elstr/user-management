import React from 'react';
import {shallow} from 'enzyme';
import Button from '../components/Button/Button';

it('renders the button', () => {
  const wrapper = shallow(<Button/>);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('renders the button with text', () => {
  const wrapper = shallow(<Button label="button with text"></Button>);
  expect(wrapper.text()).toEqual("button with text");
});
