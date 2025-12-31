// src/components/Header.tsx
import { useState } from "react";
import { Burger, Container, Group, Text, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/", label: "Home" },
  { link: "/#portfolio", label: "Portfolio" },
  { link: "/#about", label: "About" },
  { link: "/portfolio.pdf", label: "Portfolio PDF", external: true },
];

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className="link"
      data-active={active === link.link || undefined}
      onClick={(event) => {
        if (!link.external) {
          event.preventDefault();
          setActive(link.link);
          window.location.assign(link.link);
        }
      }}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className="header">
      <Container size="md" className="inner">
        <Anchor href="/" underline="never">
          <Text fw={700} size="lg">
            Hannah Müller
          </Text>
        </Anchor>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
