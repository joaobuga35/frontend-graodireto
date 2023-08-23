import styled from "styled-components";

const MainDashboard = styled.main`
  margin-top: 35px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    max-width: 1260px;
    margin: 0 auto;
  }
`;

const DivTitleDashboard = styled.div`
  h1 {
    color: var(--color-primary);
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    color: var(--gray-300);
    font-size: 14px;
  }
`;
export { MainDashboard, DivTitleDashboard };
