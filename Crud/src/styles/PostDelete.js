import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const Lead = styled.p`
  line-height: 1.6;
  margin: 12px 0 20px;
  white-space: pre-wrap;
`;

export const Button = styled.button`
  flex: 1 0 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #eee;
  }
`;