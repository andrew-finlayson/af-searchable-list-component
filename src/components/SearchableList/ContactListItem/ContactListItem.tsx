import React from 'react';
import type { ContactListItemProps } from './ContactListItem.props';
import {
  ListItemContainer,
  Avatar,
  ItemContent,
  PrimaryText,
  SecondaryText,
} from './ContactListItem.styled';

export const ContactListItem: React.FC<ContactListItemProps> = ({
  item,
  showEmail = true,
  onClick,
}) => {
  const containerStyle = item.highlighted ? { backgroundColor: '#F4F1FD' } : undefined;

  return (
    <ListItemContainer 
      style={containerStyle}
      onClick={() => onClick(item)}
      role="button"
      aria-label={`Select ${item.primaryText}`}
    >
      <Avatar 
        src={item.avatarUrl} 
        role="img" 
        aria-label={item.avatarUrl ? `${item.primaryText}'s avatar` : 'Default avatar'}
      />
      <ItemContent $showEmail={showEmail}>
        <PrimaryText $highlighted={item.highlighted} $showEmail={showEmail}>{item.primaryText}</PrimaryText>
        {showEmail && item.secondaryText && (
          <SecondaryText>{item.secondaryText}</SecondaryText>
        )}
      </ItemContent>
    </ListItemContainer>
  );
}; 