import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const Divider = styled.hr`
  width: 100%;
`;

export const Article = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  `;

  export const Button = styled.button`
    color: #b57f7f;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    `;