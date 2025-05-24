import styled from 'styled-components';

interface StyledProps {
  expanded?: boolean;
  highlighted?: boolean;
  src?: string;
}

const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  width: 400px;
  background: #FFFFFF;
  border: 1px solid #E4E5E8;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EmptyMessage = styled.div`
  padding: 16px;
  text-align: center;
  color: #5A6D80;
  font-size: 14px;
  font-family: 'Inter';
  background: #FFFFFF;
`;

export {
  Container,
  List,
  EmptyMessage
}; 