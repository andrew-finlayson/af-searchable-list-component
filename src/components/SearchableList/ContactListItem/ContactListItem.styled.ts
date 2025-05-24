import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin: 0 8px;
  border-radius: 6px;
  
  &:hover {
    background: #F7F9FA;
  }
  
  &:active {
    background: #E6ECEF;
  }
`;

export const Avatar = styled.div<{ src?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.src ? `url(${props.src})` : '#F4F1FD'};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const ItemContent = styled.div<{ $showEmail?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$showEmail ? '2px' : '0'};
  flex: 1;
  min-width: 0;
`;

export const PrimaryText = styled.div<{ $highlighted?: boolean; $showEmail?: boolean }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${props => {
    if (props.$highlighted && !props.$showEmail) return '#6B46EF';
    if (props.$highlighted && props.$showEmail) return '#20374B';
    return '#20374B';
  }};
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SecondaryText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #5A6D80;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`; 