import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

  img {
    border-radius: 20px;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  h3 {
    color: #4261ee;
    margin-bottom: 1rem;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    padding: 1rem;
    flex-basis: 25%;
  }
`;

export default StyledMovie;
