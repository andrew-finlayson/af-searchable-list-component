import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchableList } from './SearchableList';
import type { ContactSection } from './SearchableListProps';

describe('SearchableList', () => {
  const mockContacts: ContactSection[] = [
    {
      title: 'Attended',
      items: [
        {
          id: '1',
          primaryText: 'John Smith',
          secondaryText: 'john@example.com',
          avatarUrl: 'avatar1.jpg',
          highlighted: true,
        },
        {
          id: '2',
          primaryText: 'Jane Doe',
          secondaryText: 'jane@example.com',
          avatarUrl: 'avatar2.jpg',
          highlighted: false,
        },
      ],
    },
    {
      title: 'Absent',
      expanded: false,
      items: [
        {
          id: '3',
          primaryText: 'Bob Wilson',
          secondaryText: 'bob@example.com',
          avatarUrl: 'avatar3.jpg',
          highlighted: false,
        },
      ],
    },
  ];

  const mockOnItemSelect = jest.fn();
  const mockOnSectionToggle = jest.fn();

  beforeEach(() => {
    mockOnItemSelect.mockClear();
    mockOnSectionToggle.mockClear();
  });

  it('renders all sections', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        onSectionToggle={mockOnSectionToggle}
      />
    );

    expect(screen.getByText('Attended')).toBeInTheDocument();
    expect(screen.getByText('Absent')).toBeInTheDocument();
  });

  it('renders search field with default placeholder', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
      />
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders search field with custom placeholder', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        placeholder="Find contacts..."
      />
    );

    expect(screen.getByPlaceholderText('Find contacts...')).toBeInTheDocument();
  });

  it('filters contacts based on search term', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
      />
    );

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'john' } });

    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });

  it('shows "No results found" when search has no matches', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
      />
    );

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('calls onItemSelect when an item is clicked', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
      />
    );

    fireEvent.click(screen.getByText('John Smith'));
    expect(mockOnItemSelect).toHaveBeenCalledWith(mockContacts[0].items[0]);
  });

  it('calls onSectionToggle when a section is toggled', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        onSectionToggle={mockOnSectionToggle}
      />
    );

    fireEvent.click(screen.getByText('Absent'));
    expect(mockOnSectionToggle).toHaveBeenCalledWith('Absent', true);
  });

  it('shows/hides email addresses based on showEmail prop', () => {
    const { rerender } = render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        showEmail={true}
      />
    );

    expect(screen.getByText('john@example.com')).toBeInTheDocument();

    rerender(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        showEmail={false}
      />
    );

    expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
  });

  it('maintains expanded state after search', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
        onSectionToggle={mockOnSectionToggle}
      />
    );

    // Toggle the Absent section
    fireEvent.click(screen.getByText('Absent'));

    // Perform a search that matches items in both sections
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: '@example.com' } });

    // Both sections should still show their items
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();

    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });

    // Sections should maintain their expanded state
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
  });

  it('filters by both primary and secondary text', () => {
    render(
      <SearchableList
        contacts={mockContacts}
        onItemSelect={mockOnItemSelect}
      />
    );

    const searchInput = screen.getByPlaceholderText('Search...');
    
    // Search by email
    fireEvent.change(searchInput, { target: { value: 'jane@' } });
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.queryByText('John Smith')).not.toBeInTheDocument();

    // Search by name
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
  });
}); 