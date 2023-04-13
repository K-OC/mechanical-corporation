import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-right: 3.2rem;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  @media (min-width: 768px) {
    display: none;
  }
  z-index: 10;
`;

const NavIcon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#FFFAF0")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  transition: transform 300ms, top 300ms, background-color 300ms;
  &::before,
  &::after {
    content: "";
    background-color: #fffaf0;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: transform 300ms, top 300ms, background-color 300ms;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const NavMenu = styled.div`
  position: absolute;
  top: calc(100% + 0rem);
  right: 0;
  display: flex;
  width: 9rem;
  font-size: 1.1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  border: ${(props) => (props.open ? "1px solid" : "0px solid")};
  border-color: ${(props) => (props.open ? "rgb(46, 48, 145)" : "transparent")};
  justify-content: center;
  align-items: center;
  text-align: left;

  @media (max-width: 768px) {
    margin-right: 0;
  }
  overflow: hidden;
  transition: ${(props) =>
    props.open
      ? "max-height 1000ms ease-in-out , border-color 800ms ease-in-out, border-width 800ms ease-in-out"
      : "max-height 300ms cubic-bezier(0, 1, 0, 1), border-color 600ms ease-in-out, border-width 800ms ease-in-out"};
  max-height: ${(props) => (props.open ? "100rem" : "0")};
`;

const NavItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  padding-left: .5rem;
  font-weight: bold;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  height: 2rem;
  background-color: rgb(46, 48, 145);
  border: 1px solid rgb(46, 48, 145);
  color: #fffaf0;

  cursor: pointer;
  svg {
    position: absolute;
    fill: #fffaf0;
    right: 0rem;
    padding-right: 0.5rem;
  }

  &:active {
    color: #fff200;
    svg {
      fill: #fff200;
    }
  }
`;

const Dropdown = ({ content }) => {
  const [navMenuClicked, setNavMenuClicked] = useState(false);
  const ref = useRef();

  const handleNavMenuClick = () => {
    setNavMenuClicked(!navMenuClicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavMenuClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <NavWrapper onClick={handleNavMenuClick} ref={ref}>
        <NavIcon clicked={navMenuClicked} />
        <NavMenu open={navMenuClicked}>
          {content.map((listItem) => {
            return (
              <NavItem to={`/${listItem.title}`} key={listItem + 1}>
                {listItem.title} {listItem.src}
              </NavItem>
            );
          })}
        </NavMenu>
      </NavWrapper>
    </>
  );
};

export default Dropdown;
