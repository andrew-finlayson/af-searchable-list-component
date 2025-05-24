import type { ListItem } from '../SearchableListProps';

export interface ContactListItemProps {
  item: ListItem;
  showEmail?: boolean;
  onClick: (item: ListItem) => void;
} 