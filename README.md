# SearchableList 

A React component featuring a searchable, grouped list with expandable sections. Built with TypeScript, styled-components, and documented with Storybook.

## 🎯 Features

- 🔍 Real-time search functionality across all groups
- 👥 Collapsible group sections
- 📱 Responsive design that works across all devices
- 🎯 TypeScript support
- 📚 Storybook documentation
- ✅ Unit testing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies with npm or yarn:

```bash
# Using npm
npm install

# Using yarn
yarn
```

## 💻 Example Usage

```tsx
import { SearchableList } from '../components/SearchableList/SearchableList';

const contacts = [
  {
    title: 'Attended',
    items: [
      {
        id: '1',
        primaryText: 'Dianne Russell',
        secondaryText: 'dianne@example.com',
        avatarUrl: 'https://example.com/avatar1.jpg',
        highlighted: true,
      },
    ],
  },
];

function App() {
  const handleItemSelect = (item) => {
    console.log('Selected:', item);
  };

  const handleSectionToggle = (sectionTitle, expanded) => {
    console.log('Section toggled:', sectionTitle, expanded);
  };

  return (
    <SearchableList
      contacts={contacts}
      onItemSelect={handleItemSelect}
      onSectionToggle={handleSectionToggle}
      placeholder="Search contacts..."
      showEmail={true}
    />
  );
}
```

### Running Tests

The component includes comprehensive tests using Jest and React Testing Library:

```bash
# Run tests
yarn test

# Run tests with coverage
yarn test --coverage

# Run tests in watch mode
yarn test --watch
```

## 📚 Storybook Documentation

The component is documented using Storybook. To view the documentation:

1. Start Storybook:
```bash
yarn storybook
```

2. Open your browser and navigate to `http://localhost:6006`

## 📄 License

MIT © Andrew Finlayson
