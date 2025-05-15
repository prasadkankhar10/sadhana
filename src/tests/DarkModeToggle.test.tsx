// Example test for DarkModeToggle
import { render, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../components/common/DarkModeToggle';

describe('DarkModeToggle', () => {
  it('toggles dark mode on click', () => {
    const { getByRole } = render(<DarkModeToggle />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
