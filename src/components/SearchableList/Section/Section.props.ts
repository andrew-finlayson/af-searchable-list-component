import type { ContactSection, ListItem } from '../SearchableListProps';

export interface SectionProps {
  section: ContactSection;
  expanded: boolean;
  onToggle: (title: string) => void;
  onItemSelect: (item: ListItem) => void;
  showEmail?: boolean;
} 