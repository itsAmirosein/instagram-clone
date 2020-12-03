import styled from "styled-components";

export const Header = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  > img {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  width: 220px;
  height: 28px;
  border: 1px solid #ccc;
  outline: none;
  margin: 0 210px;
  border-radius: 3px;
  padding: 0 4px;
`;
export const Toolbar = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  svg {
    font-size: 1.4rem;
    margin-right: 30px;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-size: contain;
  background-image: url("./images/Avatar.svg");
`;
