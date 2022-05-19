// import styled components
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #4361ee;
  cursor: pointer;

  background-color: ${({ theme, variant }) =>
    theme.colors[variant] || theme.colors.primary};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
