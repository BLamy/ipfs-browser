import React from "react";
import styled from "styled-components";
import Menu from "../icons/Menu";
import Search from "../icons/Search";
import More from "../icons/More";

const Toolbar = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: #263238;
  color: white;
  font-size: 1.3125rem;
  font-weight: 500;
  white-space: nowrap;
`;

Toolbar.MenuIcon = styled(Menu)`
  margin: 20px;
`;

Toolbar.Title = styled.h1`
  font-size: 20px;
  margin: 0 20px 0 10px;
`;

Toolbar.MoreIcon = styled(More)`
  margin: 20px;
`;

Toolbar.FAB = styled.button`
  width: 54px;
  height: 54px;
  background: #2979ff;
  box-shadow: 0px 4px 8px rgba(255, 87, 34, 0.24);
  border-radius: 16px;
  border: none;
  outline: none;
  position: relative;
  top: 24px;
  color: white;
  cursor: pointer;
`;

// Search bar
const Flex1 = styled.div`
  flex: 1;
`;

const SearchInput = styled.input`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.17);
  border-radius: 4px;
  border: none;
  height: 42px;
  line-height: 42px;
  color: white;
  margin: 8px;
  width: calc(100% - 100px);
  margin: 0;
  padding: 0;
  padding-left: 60px;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 22px;
  margin-left: 20px;
`;

Toolbar.SearchBar = () => (
  <Flex1>
    <SearchIcon />
    <SearchInput />
  </Flex1>
);

Toolbar.SearchBar.Input = SearchInput;
Toolbar.SearchBar.Icon = SearchIcon;

export default Toolbar;
