import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
`;

export const Card = styled.li`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
`;

export const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  max-width: 720px;
`;

export const CardTitle = styled.strong`
  display: block;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 720px;
`;

export const CardExcerpt = styled.p`
  margin: 6px 0 0;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 720px;
`;
