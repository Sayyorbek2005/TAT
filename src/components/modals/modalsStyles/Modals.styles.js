import styled from "styled-components";

export const FormWrapper = styled.div`
 border: 1px solid var(--white);
 backdrop-filter: blur(10px);
  color: var(--white);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0px 0px 10px white;
  margin: 0px 10px;

  form {
    width: 100%;
     /* padding hisobini to‘g‘rilaydi */
  }
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  text-align: left;
  font-size: var(--font-size-14);
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")};
  outline: none;
  
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")};
  outline: none;
  
`;

