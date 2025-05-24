import { render, screen, fireEvent } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';
import 'jest-styled-components';

describe('SectionHeader', () => {
  const mockOnToggle = jest.fn();
  const defaultProps = {
    title: 'Test Section',
    expanded: false,
    onToggle: mockOnToggle,
  };

  beforeEach(() => {
    mockOnToggle.mockClear();
  });

  it('renders correctly with default props', () => {
    render(<SectionHeader {...defaultProps} />);
    const header = screen.getByTestId('section-header');
    const chevron = screen.getByTestId('chevron-icon');

    expect(header).toHaveStyleRule('background', '#FFFFFF');
    expect(header).toHaveStyleRule('border-top', '1px solid #E4E5E8');
    expect(header).toHaveStyleRule('border-bottom', '1px solid #E4E5E8');
    expect(chevron.parentElement).toHaveStyleRule('transform', 'rotate(-90deg)', {
      modifier: 'svg'
    });
  });

  it('renders correctly when expanded', () => {
    render(<SectionHeader {...defaultProps} expanded={true} />);
    const chevron = screen.getByTestId('chevron-icon');

    expect(chevron.parentElement).toHaveStyleRule('transform', 'rotate(0deg)', {
      modifier: 'svg'
    });
  });

  it('applies hover styles', () => {
    render(<SectionHeader {...defaultProps} />);
    const header = screen.getByTestId('section-header');

    expect(header).toHaveStyleRule('background', '#F2F5F7', {
      modifier: ':hover'
    });
  });

  it('applies active styles', () => {
    render(<SectionHeader {...defaultProps} />);
    const header = screen.getByTestId('section-header');

    expect(header).toHaveStyleRule('background', '#E6ECEF', {
      modifier: ':active'
    });
  });

  it('calls onToggle when clicked', () => {
    render(<SectionHeader {...defaultProps} />);
    const header = screen.getByTestId('section-header');

    fireEvent.click(header);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct ARIA attributes', () => {
    render(<SectionHeader {...defaultProps} />);
    const header = screen.getByTestId('section-header');

    expect(header).toHaveAttribute('role', 'button');
    expect(header).toHaveAttribute('aria-expanded', 'false');
    expect(header).toHaveAttribute('aria-label', 'Test Section section, collapsed');
  });
}); 