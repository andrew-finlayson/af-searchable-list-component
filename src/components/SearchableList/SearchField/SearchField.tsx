import React from 'react';
import SearchIcon from '../../icons/SearchIcon';
import type { SearchFieldProps } from './SearchField.props';
import { Container, IconContainer, Input } from './SearchField.styled';

export const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <IconContainer>
        <SearchIcon data-testid="search-icon" aria-hidden="true" />
      </IconContainer>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
}; 