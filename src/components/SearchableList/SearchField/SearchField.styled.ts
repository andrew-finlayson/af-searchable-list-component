import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #FFFFFF;
  border-radius: 6px;
  width: 100%;
  height: 40px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  svg {
    width: 18px;
    height: 18px;
    color: #8E9AA5;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #20374B;
  
  &::placeholder {
    color: #8E9AA5;
  }
`; 