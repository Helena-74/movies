import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  margin-bottom: 10px;
`;

export const HomeContainer = styled.div`
  margin: 20px;
`;