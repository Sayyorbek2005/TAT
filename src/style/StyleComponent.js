import styled from 'styled-components'

export const Title = styled.h1`
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-500);
  color: var(--dark-primary-color);
  text-align: center;
  padding: 100px 0px 20px 0px;
  max-width: 1000px;
  margin: auto;
  font-family: 'MyCustomFont';
    
`

export const Button = styled.button`
  padding: 10px 20px;       
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 5px;
    

    &:hover {
        background-color: var(--dark-primary-color);
    }
`       
