import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonList } from '../styles/BookingsStyled';

describe('Test ButtonList', () => {
//----------------------------------------------------------
test("No props on button", () => {
  render(<ButtonList>Test</ButtonList>);
  const button = screen.getByRole('button');

  expect(button).toHaveStyleRule("background: #FFFF00");
  expect(button).toHaveStyleRule("color: #135846");
});
//----------------------------------------------------------
  test('Renders button correctly', () => {
    render(<ButtonList />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
//----------------------------------------------------------
  test('Renders button with correct color', () => {
    const color = '#FF0000';
    render(<ButtonList color={color} />);
    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule(`background: ${color}`);
  });

//-----------------------------------------------------------
  test('calls onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ButtonList color="#135846" bgcolor="#ffffff" onClick={handleClick}>
        Test ButtonList
      </ButtonList>
    );
    const button = screen.getByText('Test ButtonList');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

