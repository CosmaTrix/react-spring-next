import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #d54f93;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const MenuListItem = styled.ul`
  margin: 0;
  padding: 0;
`;

const MenuLink = styled.a`
  display: inline-block;
  padding: 12px;
  margin: 0 8px;
  text-decoration: ${props => (props.active ? "underline" : "none")};
  color: #eee;

  :hover {
    text-decoration: underline;
  }
`;

const links = [
  { href: "/", label: "Spring" },
  { href: "/trail", label: "Trail" },
  { href: "/transition", label: "Transition" },
  { href: "/keyframes", label: "Keyframes" },
  { href: "/controller", label: "Controller" },
];

const Menu = ({ router }) => (
  <Container>
    <MenuList>
      {links.map(link => (
        <MenuListItem key={link.href}>
          <Link href={link.href} passHref>
            <MenuLink active={router.pathname === link.href}>
              {link.label}
            </MenuLink>
          </Link>
        </MenuListItem>
      ))}
    </MenuList>
  </Container>
);

export default withRouter(Menu);
