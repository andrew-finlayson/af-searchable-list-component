// Define interfaces
interface ListItemInterface {
  /**
   * Primary text to display (e.g., name)
   */
  primaryText: string;
  
  /**
   * Secondary text to display (e.g., email)
   */
  secondaryText?: string;
  
  /**
   * URL or path to the avatar image
   */
  avatarUrl?: string;
  
  /**
   * Unique identifier for the item
   */
  id: string;
  
  /**
   * Whether the item should be highlighted
   */
  highlighted?: boolean;
}

interface ContactSectionInterface {
  /**
   * Title of the section
   */
  title: string;
  
  /**
   * List of contacts in this section
   */
  items: ListItemInterface[];
  
  /**
   * Whether the section is expanded or collapsed
   */
  expanded?: boolean;
}

interface SearchableListPropsInterface {
  /**
   * Array of contact sections to display in the list
   */
  contacts: ContactSectionInterface[];
  
  /**
   * Callback function when an item is selected
   */
  onItemSelect: (item: ListItemInterface) => void;
  
  /**
   * Callback function when a section is toggled (expanded/collapsed)
   */
  onSectionToggle?: (sectionTitle: string, expanded: boolean) => void;
  
  /**
   * Placeholder text for the search input
   * @default "Search..."
   */
  placeholder?: string;

  /**
   * Whether to show email addresses
   * @default true
   */
  showEmail?: boolean;

}

// Export types
export type ListItem = ListItemInterface;
export type ContactSection = ContactSectionInterface;
export type SearchableListProps = SearchableListPropsInterface; 