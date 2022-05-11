import { useState } from "react";
import { AppShell, Navbar, Header, Text, MediaQuery, Burger, useMantineTheme } from "@mantine/core";

import { Customers } from "./Customers";

export function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          height: "100vh",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Customers</Text>
        </Navbar>
      }
      // header={
      //   <Header height={70} p="md">
      //     <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      //       <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      //         <Burger
      //           opened={opened}
      //           onClick={() => setOpened((o) => !o)}
      //           size="sm"
      //           color={theme.colors.gray[6]}
      //           mr="xl"
      //         />
      //       </MediaQuery>
      //     </div>
      //   </Header>
      // }
    >
      <Customers />
    </AppShell>
  );
}
