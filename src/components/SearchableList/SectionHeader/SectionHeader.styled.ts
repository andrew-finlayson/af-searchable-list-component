import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #20374B;
  background: #FFFFFF;
  border-top: 1px solid #E4E5E8;
  border-bottom: 1px solid #E4E5E8;

  &:hover {
    background: #F2F5F7;
  }

  &:active {
    background: #E6ECEF;
  }
`;

export const ChevronIcon = styled.div<{ $expanded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
    color: #8E9AA5;
    transform: ${props => props.$expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
    transition: transform 0.2s ease-in-out;
  }
`; 