import React from 'react';
import type { SectionProps } from './Section.props';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { SectionContainer, ItemsContainer } from './Section.styled';

export const Section: React.FC<SectionProps> = ({
  section,
  expanded,
  onToggle,
  onItemSelect,
  showEmail = true,
}) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={section.title}
        expanded={expanded}
        onToggle={() => onToggle(section.title)}
      />
      {expanded && (
        <ItemsContainer>
          {section.items.map((item) => (
            <ContactListItem
              key={item.id}
              item={item}
              showEmail={showEmail}
              onClick={onItemSelect}
            />
          ))}
        </ItemsContainer>
      )}
    </SectionContainer>
  );
}; 