import styled from "styled-components";

export const FormStyle = styled.form`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  div {
    width: 100%;
  }
`;

export const Button = styled.button`
  color: #000;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: inset 0 0 1px 1px #000;
  border-radius: 8px;

  &:hover {
    color: #4E60FF;
    box-shadow: inset 0 0 1px 1px #4E60FF;
  }
`;

export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  border: 1px solid #000;
  width: 400px;
  border-radius: 8px;
  padding: 20px 0;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;