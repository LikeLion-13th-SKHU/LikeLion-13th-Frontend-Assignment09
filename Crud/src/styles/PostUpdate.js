import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 0 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: block;
`;

export const LabelText = styled.div`
  margin-bottom: 6px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  outline: none;
  resize: vertical;
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