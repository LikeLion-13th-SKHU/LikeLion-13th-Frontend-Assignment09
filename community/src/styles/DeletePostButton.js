import styled from "styled-components";

export const DeletePostButton = styled.button`
  background: #ef4444;
  color: #fff;
  border: 0;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: filter .15s ease, transform .05s ease;
  &:hover { filter: brightness(0.95); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .5; cursor: not-allowed; }
`;


