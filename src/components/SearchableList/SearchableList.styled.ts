import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  width: 400px;
  background: #FFFFFF;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EmptyMessageStyled = styled.div`
  padding: 16px;
  text-align: center;
  color: #5A6D80;
  font-size: 14px;
  font-family: 'Inter';
  background: #FFFFFF;
`; 