/* eslint-disable */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Eachbtn from '../components/Eachbtn';

afterEach(cleanup);

describe('test for button component', () => {
  test('button should render without error', () => {
    render(<Eachbtn />);
  });
  test('matches snapshot for new button', () => {
    const tree = renderer.create(<Eachbtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});