import { render, fireEvent, screen } from '@testing-library/react';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with default placeholder', () => {
    render(
      <SearchField
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(
      <SearchField
        value=""
        onChange={mockOnChange}
        placeholder="Custom placeholder"
      />
    );

    expect(screen.getByPlaceholderText('Custom placeholder')).toBeInTheDocument();
  });

  it('calls onChange when input changes', () => {
    render(
      <SearchField
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test value' } });

    expect(mockOnChange).toHaveBeenCalledWith('test value');
  });

  it('renders search icon', () => {
    render(
      <SearchField
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });
}); 