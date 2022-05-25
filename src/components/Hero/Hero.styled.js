import styled from "styled-components";

const StyledHero = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
    color: #4261ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #4261ee;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Button {
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    border: none;
    background-color: #4261ee;
    color: #fff;
    margin-bottom: 1rem;
  } */

  img {
    max-width: 100%;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .left {
      flex-basis: 40%;
      margin-left: 5rem;
    }

    .right {
      flex-basis: 60%;
      margin-left: 18rem;
    }
  }
`;

export default StyledHero;
