// PostDetail.js
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

/* 버튼 */
export const Actions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

export const PrimaryButton = styled.button`
  background: #3b82f6;
  color: #fff;
  border: 0;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  background: #f3f4f6;
  color: #111;
  border: 0;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
`;
