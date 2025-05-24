import React, { useState, useMemo } from 'react';
import type { SearchableListProps } from './SearchableListProps';
import { SearchField } from './SearchField/SearchField';
import { Section } from './Section/Section';
import {
  ContainerStyled,
  ListStyled,
  EmptyMessageStyled,
} from './SearchableList.styled';

export const SearchableList: React.FC<SearchableListProps> = ({
  contacts,
  onItemSelect,
  onSectionToggle,
  placeholder = 'Search...',
  showEmail = true
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    contacts.reduce((acc, section) => {
      acc[section.title] = section.expanded !== false; // Default to expanded if not specified
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Filter contacts and items based on search term
  const filteredContacts = useMemo(() => {
    if (!searchTerm.trim()) {
      return contacts;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();
    
    return contacts
      .map(section => {
        // Filter items within the section
        const filteredItems = section.items.filter(item => 
          item.primaryText.toLowerCase().includes(normalizedSearchTerm) || 
          (item.secondaryText && item.secondaryText.toLowerCase().includes(normalizedSearchTerm))
        );
        
        // Return a new section with only the filtered items
        return {
          ...section,
          items: filteredItems
        };
      })
      .filter(section => section.items.length > 0); // Only include sections that have matching items
  }, [contacts, searchTerm]);

  const handleSectionToggle = (sectionTitle: string) => {
    const newExpandedState = !expandedSections[sectionTitle];
    
    setExpandedSections({
      ...expandedSections,
      [sectionTitle]: newExpandedState
    });

    if (onSectionToggle) {
      onSectionToggle(sectionTitle, newExpandedState);
    }
  };

  return (
    <ContainerStyled>
      <SearchField
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder={placeholder}
      />
      
      <ListStyled>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((section) => (
            <Section
              key={section.title}
              section={section}
              expanded={expandedSections[section.title]}
              onToggle={() => handleSectionToggle(section.title)}
              onItemSelect={onItemSelect}
              showEmail={showEmail}
            />
          ))
        ) : (
          <EmptyMessageStyled>No results found</EmptyMessageStyled>
        )}
      </ListStyled>
    </ContainerStyled>
  );
}; 