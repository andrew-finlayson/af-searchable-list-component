import { render, fireEvent, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  const mockSection = {
    title: 'Test Section',
    items: [
      {
        id: '1',
        primaryText: 'Test Item 1',
        secondaryText: 'test1@example.com',
        avatarUrl: 'test1.jpg',
        highlighted: false,
      },
      {
        id: '2',
        primaryText: 'Test Item 2',
        secondaryText: 'test2@example.com',
        avatarUrl: 'test2.jpg',
        highlighted: true,
      },
    ],
  };

  const mockOnToggle = jest.fn();
  const mockOnItemSelect = jest.fn();

  beforeEach(() => {
    mockOnToggle.mockClear();
    mockOnItemSelect.mockClear();
  });

  it('renders section header with title', () => {
    render(
      <Section
        section={mockSection}
        expanded={false}
        onToggle={mockOnToggle}
        onItemSelect={mockOnItemSelect}
      />
    );

    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  it('shows items when expanded', () => {
    render(
      <Section
        section={mockSection}
        expanded={true}
        onToggle={mockOnToggle}
        onItemSelect={mockOnItemSelect}
      />
    );

    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('Test Item 2')).toBeInTheDocument();
  });

  it('hides items when collapsed', () => {
    render(
      <Section
        section={mockSection}
        expanded={false}
        onToggle={mockOnToggle}
        onItemSelect={mockOnItemSelect}
      />
    );

    expect(screen.queryByText('Test Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Item 2')).not.toBeInTheDocument();
  });

  it('calls onToggle when header is clicked', () => {
    render(
      <Section
        section={mockSection}
        expanded={false}
        onToggle={mockOnToggle}
        onItemSelect={mockOnItemSelect}
      />
    );

    fireEvent.click(screen.getByText('Test Section'));
    expect(mockOnToggle).toHaveBeenCalled();
  });

  it('calls onItemSelect when item is clicked', () => {
    render(
      <Section
        section={mockSection}
        expanded={true}
        onToggle={mockOnToggle}
        onItemSelect={mockOnItemSelect}
      />
    );

    fireEvent.click(screen.getByText('Test Item 1'));
    expect(mockOnItemSelect).toHaveBeenCalledWith(mockSection.items[0]);
  });
}); 