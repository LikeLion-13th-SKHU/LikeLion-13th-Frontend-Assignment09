import styled from "styled-components";

export const Wrap = styled.div``;

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const Form = styled.form`
  display: grid;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  min-height: 220px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  resize: vertical;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const PrimaryButton = styled.button`
  background: #10b981;
  color: #fff;
  border: 0;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  background: #f3f4f6;
  color: #111;
  border: 0;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
`;
