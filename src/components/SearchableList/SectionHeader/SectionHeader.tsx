import React from 'react';
import ChevronIcon from '../../icons/ChevronIcon';
import type { SectionHeaderProps } from './SectionHeader.props';
import { HeaderContainer, ChevronIcon as ChevronIconContainer } from './SectionHeader.styled';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  expanded,
  onToggle,
}) => {
  return (
    <HeaderContainer
      role="button"
      onClick={onToggle}
      aria-expanded={expanded}
      data-testid="section-header"
      aria-label={`${title} section, ${expanded ? 'expanded' : 'collapsed'}`}
    >
      {title}
      <ChevronIconContainer $expanded={expanded}>
        <ChevronIcon data-testid="chevron-icon" aria-hidden="true" />
      </ChevronIconContainer>
    </HeaderContainer>
  );
}; 