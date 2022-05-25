// import styled components
import styled, { css } from "styled-components";

const Button = styled.button`
  /* padding: 0.8rem 2rem; */
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  background-color: ${({ theme, variant }) =>
    theme.colors[variant] || theme.colors.primary};

  padding: ${({ theme, size }) =>
    theme.buttonSize[size] || theme.buttonSize.md};

  font-size: ${({ theme, size }) =>
    theme.fontSize[size] || theme.buttonSize.md};
`;

export default Button;
