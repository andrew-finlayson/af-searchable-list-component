import { render, fireEvent, screen } from '@testing-library/react';
import { ContactListItem } from './ContactListItem';

describe('ContactListItem', () => {
  const mockItem = {
    id: '1',
    primaryText: 'John Doe',
    secondaryText: 'john@example.com',
    avatarUrl: 'https://example.com/avatar.jpg',
    highlighted: false,
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders with all props', () => {
    render(
      <ContactListItem
        item={mockItem}
        showEmail={true}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', "John Doe's avatar");
  });

  it('hides email when showEmail is false', () => {
    render(
      <ContactListItem
        item={mockItem}
        showEmail={false}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(
      <ContactListItem
        item={mockItem}
        showEmail={true}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledWith(mockItem);
  });

  it('shows highlighted state', () => {
    const highlightedItem = {
      ...mockItem,
      highlighted: true,
    };

    render(
      <ContactListItem
        item={highlightedItem}
        showEmail={true}
        onClick={mockOnClick}
      />
    );

    const container = screen.getByRole('button');
    expect(container).toHaveStyle({ backgroundColor: 'rgb(244, 241, 253)' });
  });
}); 