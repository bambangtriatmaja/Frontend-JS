import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4261ee;
  padding: 1rem;
  color: #fff;

  h1 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 1rem;
    color: #fff;
  }

  * {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0;
    }

    ul {
      display: flex;
      flex-direction: row;
    }

    ul li {
      margin: 0 1rem;
    }
  }
`;

export default StyledNavbar;
