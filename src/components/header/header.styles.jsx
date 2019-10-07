import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: rgb(46, 189, 189);
  border: 1px solid rgb(96, 96, 119);
  border-radius: 8px;
  transition: background 1.2s;

  &:hover {
    background: rgb(26, 89, 189);
  }
`;

export const LogoContainer = styled(Link)`
  height: 80%;
  width: 30px;
  margin-bottom: 40px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  transition: 0.8s color;

  &:hover {
    color: yellow;
  }
`;

