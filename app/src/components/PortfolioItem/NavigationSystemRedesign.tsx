// src/posts/NavigationSystemRedesign.tsx
import React from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Grid,
  Card,
  Stack,
  Group,
  Badge,
  List,
} from "@mantine/core";

export const navigationSystemRedesignMeta = {
  slug: "/navigation-system-redesign",
  title: "Navigation System Redesign",
  dateISO: "2025-01-01", // put the real date here
  dateDisplay: "January 1, 2025", // put the real date here
  tags: ["UX", "UI", "Case Study"],
  featureImage: "/img/posts/COSMOS-Dashboard-CS.png",
};

const NavigationSystemRedesign: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      {/* Hero */}
      <Stack gap="xs" mb="xl">
        <Title order={1}>Navigation System Redesign</Title>
        <Text size="lg" c="dimmed">
          Rethinking a Navigation System for an internal Service
        </Text>
      </Stack>

      {/* Project Overview */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Project Overview</Title>
        <Text>
          <Text span fw={600}>
            Navigation System Redesign
          </Text>{" "}
          was a UX/UI-driven project focused on reimagining the internal
          navigation for a service platform. The previous system struggled with
          scalability, clarity, and mobile usability. Our objective was to
          create a modern, intuitive, and user-centered navigation framework
          that could grow with the platform&apos;s evolving needs.
        </Text>
        <Text>
          During my first weeks as a UX Designer at{" "}
          <Text span fw={600}>
            T-Systems
          </Text>
          , I noticed the sidebar&apos;s interaction was clunky, oversized, and
          misaligned with modern UI principles. The collapsed state lacked
          tooltips and context, rendering it nearly unusable. This kickstarted
          an initiative to redesign the navigation system for improved
          usability, alignment with corporate identity, and better content space
          utilization.
        </Text>
      </Stack>

      {/* Role & Responsibilities */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Role &amp; Responsibilities</Title>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Research &amp; Analysis
              </Title>
              <Text size="sm">
                Initiated first analysis and evaluated existing navigation based
                on user behavior and company guidelines.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Design &amp; Prototyping
              </Title>
              <Text size="sm">
                Led design efforts in{" "}
                <Text span fw={600}>
                  Figma
                </Text>
                , focusing on layout structure, component reduction, and
                seamless transitions.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Design System
              </Title>
              <Text size="sm">
                Implemented company design principles and modern UI best
                practices.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Development Collaboration
              </Title>
              <Text size="sm">
                Coordinated with dev team to implement changes with minimal
                rollout friction.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>

      {/* Tools Used */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Tools Used</Title>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Figma
              </Title>
              <Text size="sm">Design, wireframing, prototyping.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                React
              </Title>
              <Text size="sm">Front-end implementation.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                CSS
              </Title>
              <Text size="sm">Responsive styling and layout.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Notion &amp; FigJam
              </Title>
              <Text size="sm">Documentation and collaboration.</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>

      {/* Design Process */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Design Process</Title>

        <Card withBorder radius="md" mb="sm">
          <Group align="flex-start" gap="md">
            <Badge radius="xl" variant="filled">
              1
            </Badge>
            <Stack gap={4}>
              <Title order={3}>Discovery &amp; Research</Title>
              <Text size="sm">
                Observed early friction with sidebar interaction. Conducted
                informal user feedback and aligned design needs with internal
                guidelines. Noted that navigation components were outdated and
                visually cluttered.
              </Text>
            </Stack>
          </Group>
        </Card>

        <Card withBorder radius="md" mb="sm">
          <Group align="flex-start" gap="md">
            <Badge radius="xl" variant="filled">
              2
            </Badge>
            <Stack gap={4}>
              <Title order={3}>Wireframing &amp; Prototyping</Title>
              <Text size="sm">
                Redesigned the sidebar in{" "}
                <Text span fw={600}>
                  Figma
                </Text>{" "}
                to improve usability in both expanded and collapsed states.
                Emphasis was placed on minimizing space consumption, adding
                tooltips, and applying the corporate color palette subtly for a
                seamless visual experience.
              </Text>
            </Stack>
          </Group>
        </Card>

        <Card withBorder radius="md" mb="sm">
          <Group align="flex-start" gap="md">
            <Badge radius="xl" variant="filled">
              3
            </Badge>
            <Stack gap={4}>
              <Title order={3}>Visual Design System</Title>
              <Text size="sm">
                Engaged with the design team to ensure adherence to company
                guidelines. Rebuilt the footer design to accommodate a height
                increase mandated by guidelines, which led to a switch from a
                sticky to a bottom-fixed footer, visually decluttering the
                interface.
              </Text>
            </Stack>
          </Group>
        </Card>

        <Card withBorder radius="md">
          <Group align="flex-start" gap="md">
            <Badge radius="xl" variant="filled">
              4
            </Badge>
            <Stack gap={4}>
              <Title order={3}>Implementation</Title>
              <Text size="sm">
                Thanks to low component complexity, frontend updates were
                rapidly implemented. The rollout was smooth, and collaboration
                with developers ensured pixel-perfect execution using{" "}
                <Text span fw={600}>
                  React
                </Text>{" "}
                and{" "}
                <Text span fw={600}>
                  CSS
                </Text>
                .
              </Text>
            </Stack>
          </Group>
        </Card>
      </Stack>

      {/* Results */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Results</Title>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Improved usability
              </Title>
              <Text size="sm">
                Clearer navigation and better collapsed-state experience.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                User satisfaction
              </Title>
              <Text size="sm">
                Positive internal feedback and less user frustration.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Title order={4} mb="xs">
                Modernized system
              </Title>
              <Text size="sm">
                Navigation updated to current UI standards and branding.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>

      {/* Key Takeaways */}
      <Stack gap="sm" mb="xl">
        <Title order={2}>Key Takeaways</Title>
        <Card withBorder radius="md">
          <List type="ordered" spacing="sm">
            <List.Item>
              Always question defaults; clunky navigation is often just a sign
              of old decisions left unchecked.
            </List.Item>
            <List.Item>
              Collaborating early with design stakeholders ensures alignment and
              speeds up iteration cycles.
            </List.Item>
            <List.Item>
              Even small UI changes, like improved collapse behavior, can
              significantly affect perception.
            </List.Item>
          </List>
        </Card>
      </Stack>

      {/* Image Showcase */}
      <Stack gap="sm">
        <Title order={2}>Screenshots</Title>
        <Group gap="md" wrap="wrap">
          <Image
            src="/img/posts/COSMOS-Dashboard-CS.png"
            alt="Navigation System Screenshot"
            radius="md"
            w={{ base: "100%", md: "48%" }}
          />
          <Image
            src="/img/posts/COSMOS-Dashboard-OS.png"
            alt="Navigation System Screenshot"
            radius="md"
            w={{ base: "100%", md: "48%" }}
          />
        </Group>
      </Stack>
    </Container>
  );
};

export default NavigationSystemRedesign;
