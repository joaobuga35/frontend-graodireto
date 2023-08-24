import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: var(--color-background);
  border-radius: 8px;

  animation: ${slideDown} 1s ease-in-out;

  @media (min-width: 768px) {
    width: 740px;
  }
`;

const TitleModal = styled.header`
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  background-color: var(--color-primary);
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 18px;
    color: var(--color-background);
  }

  span {
    font-size: 18px;
    color: var(--color-background);
    cursor: pointer;
  }
`;

const DivImageAndAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  img {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: 18px;
    color: var(--gray-600);

    span {
      display: block;
      text-align: center;
      margin-top: 8px;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    gap: 30px;

    img {
      width: 220px;
      height: 220px;
    }
  }
`;

const ListFood = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-width: 80%;
  overflow-y: auto;

  @media (min-width: 768px) {
    height: auto;
    max-width: 90%;
    padding-left: 24px;
  }
`;

export {
  ModalWrapper,
  ModalContainer,
  TitleModal,
  DivImageAndAddress,
  ListFood,
};
