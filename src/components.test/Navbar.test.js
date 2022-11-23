import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from './__mock__/Navbar';

afterEach(cleanup);

describe('render navbar component without error', () => {
  test('navbar should render correctly', () => {
    render(<Navbar />);
  });
  test('matches snapshot for new Header', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
