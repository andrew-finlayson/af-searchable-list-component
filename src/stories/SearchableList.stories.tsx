import type { Meta, StoryObj } from '@storybook/react';
import { SearchableList } from '../components/SearchableList/SearchableList';
import type { ContactSection, ListItem } from '../components/SearchableList/SearchableListProps';

// Import contact images
import drussel from './assets/contacts/drussel.png';
import rrichards from './assets/contacts/rrichards.png';
import amccoy from './assets/contacts/amccoy.png';
import kmurphy from './assets/contacts/kmurphy.png';
import snguyen from './assets/contacts/snguyen.png';
import aflores from './assets/contacts/aflores.png';
import jwilson from './assets/contacts/jwilson.png';
import wwarren from './assets/contacts/wwarren.png';
import bcooper from './assets/contacts/bcooper.png';
import redwards from './assets/contacts/redwards.png';

const meta = {
  title: 'Components/SearchableList',
  component: SearchableList,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#444444',
        },
      ],
    },
  },
  argTypes: {
    contacts: {
      description: 'Array of contact sections containing list items',
    },
    onItemSelect: {
      description: 'Callback when a contact is selected',
    },
    onSectionToggle: {
      description: 'Callback when a section is expanded/collapsed',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for search input',
    },
    showEmail: {
      control: 'boolean',
      description: 'Show email addresses',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof SearchableList>;

export default meta;
type Story = StoryObj<typeof SearchableList>;

// Base mock data
// Taken from figma design
const mockContacts: ContactSection[] = [
  {
    title: 'Attended',
    items: [
      {
        id: '1',
        primaryText: 'Dianne Russell',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: drussel,
        highlighted: true,
      },
      {
        id: '2',
        primaryText: 'Ronald Richards',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: rrichards,
      },
      {
        id: '3',
        primaryText: 'Arlene McCoy',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: amccoy,
      },
      {
        id: '4',
        primaryText: 'Kathryn Murphy',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: kmurphy,
      },
      {
        id: '5',
        primaryText: 'Savannah Nguyen',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: snguyen,
      },
      {
        id: '6',
        primaryText: 'Albert Flores',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: aflores,
      },
    ],
  },
  {
    title: 'Absent',
    expanded: false,
    items: [
      {
        id: '7',
        primaryText: 'Jenny Wilson',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: jwilson,
      },
      {
        id: '8',
        primaryText: 'Wade Warren',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: wwarren,
      },
      {
        id: '9',
        primaryText: 'Bessie Cooper',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: bcooper,
      },
      {
        id: '10',
        primaryText: 'Ralph Edwards',
        secondaryText: 'jane@hotmail.com',
        avatarUrl: redwards,
      },
    ],
  },
];

// Main story with all controls
export const Interactive: Story = {
  args: {
    contacts: mockContacts,
    showEmail: true,
    placeholder: 'Search...',
    onItemSelect: (item: ListItem) => console.log('Selected item:', item),
    onSectionToggle: (sectionTitle: string, expanded: boolean) => console.log('Toggled section:', sectionTitle, expanded),
  },
};

// Base state (no email)
export const BaseState: Story = {
  args: {
    ...Interactive.args,
    showEmail: false,
  },
};

// With Email
export const WithEmail: Story = {
  args: {
    ...Interactive.args,
    showEmail: true,
  },
};

// Empty State
export const Empty: Story = {
  args: {
    contacts: [],
    placeholder: 'Search...',
    onItemSelect: (item: ListItem) => console.log('Selected item:', item),
  },
}; 