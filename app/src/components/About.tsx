import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  List,
  ThemeIcon,
  Stack,
  Badge,
  Group,
  Image,
  Code,
  Anchor,
  Divider,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      {/* Hero */}
      <Stack gap="xs" mb="xl">
        <Badge
          leftSection={<FontAwesomeIcon icon="fa-solid fa-user" />}
          variant="light"
          color="red"
          w="fit-content"
        >
          About
        </Badge>

        <Title order={1}>UX Designer &amp; Problem Solver</Title>
        <Text size="lg" c="dimmed">
          Blending interaction design, research, and collaboration to ship
          useful, usable products.
        </Text>
      </Stack>

      {/* Two-column intro */}
      <Grid gutter="xl" mb="xl">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Title order={2} mb="sm">
            Background
          </Title>
          <Text mb="sm">
            This portfolio started as a Jekyll site and has evolved into a React
            and Mantine‑based experience. It reflects a focus on navigation
            systems, internal tools, and real‑world UX constraints.
          </Text>
          <Text mb="sm">
            Work ranges from quick UX improvements and navigation redesigns to
            deeper explorations with research, prototyping, and implementation
            handoff.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card shadow="sm" radius="lg" withBorder>
            <Title order={3} mb="xs">
              At a glance
            </Title>
            <List
              spacing="xs"
              icon={
                <ThemeIcon color="red" size={22} radius="xl">
                  <IconCheck size={14} />
                </ThemeIcon>
              }
            >
              <List.Item>UX / Product design focus</List.Item>
              <List.Item>Navigation &amp; information architecture</List.Item>
              <List.Item>Design systems &amp; internal platforms</List.Item>
              <List.Item>Close collaboration with dev teams</List.Item>
            </List>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Skills & interests */}
      <Grid gutter="xl" mb="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="lg" withBorder>
            <Title order={3} mb="xs">
              What’s important in the work
            </Title>
            <Text size="sm" mb="sm">
              A few themes that show up across projects:
            </Text>
            <List spacing="xs">
              <List.Item>
                Clear problem framing before jumping into high‑fidelity design.
              </List.Item>
              <List.Item>
                Measurable improvements in navigation, task time, or usability.
              </List.Item>
              <List.Item>
                Communication that makes handoff and implementation smoother.
              </List.Item>
            </List>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="lg" withBorder>
            <Title order={3} mb="xs">
              Tools &amp; methods
            </Title>
            <Group gap="xs" mb="sm">
              <Badge>Figma</Badge>
              <Badge>FigJam</Badge>
              <Badge>React</Badge>
              <Badge>CSS / SCSS</Badge>
            </Group>
            <Text size="sm">
              The stack behind this portfolio combines React, TypeScript, and
              Mantine UI for a flexible, component‑based setup that mirrors
              modern product teams.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Code & content snippet block – nod to original markdown/code sample */}
      <Card shadow="sm" radius="lg" withBorder mb="xl">
        <Group mb="sm" gap="xs">
          <ThemeIcon color="dark" variant="light" radius="xl">
            <IconCode size={16} />
          </ThemeIcon>
          <Title order={3}>How content is structured</Title>
        </Group>
        <Text size="sm" mb="sm">
          The original Jekyll page mixed markdown, code blocks, and tables.
          Those are now expressed as reusable React components and styled with
          Mantine for consistency.
        </Text>

        <Code block mb="sm">
          {`<About />
  ├─ Hero section
  ├─ Background & key themes
  ├─ Skills & methods
  └─ Code / content snippet nod to the original markdown`}
        </Code>

        <Text size="sm">
          This makes it easier to evolve the portfolio as skills and case
          studies grow, without being limited by static templates.
        </Text>
      </Card>

      {/* Image + details (optional illustrative section) */}
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            radius="lg"
            src="https://guides.github.com/activities/hello-world/branching.png"
            alt="Example diagram"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Title order={3} mb="xs">
            How this portfolio is used
          </Title>
          <Text size="sm" mb="sm">
            Beyond visuals, this space documents how problems are approached and
            what was learned from each project. It is meant to be read as a
            story, not just a gallery.
          </Text>
          <Text size="sm">
            If you want to dig deeper into any project or talk through process,
            feel free to reach out via the contact options in the navigation.
          </Text>
        </Grid.Col>
      </Grid>

      <Divider my="xl" />

      <Text size="sm" c="dimmed">
        Looking for case studies? Head back to the{" "}
        <Anchor href="/">home page</Anchor> or jump directly to the navigation
        system work from the portfolio.
      </Text>
    </Container>
  );
};

export default About;
