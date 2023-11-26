import { Header, Box, Text } from "grommet";
import { Deploy, Github, Home, Moon, Sun } from "grommet-icons";

export function TedHead(props: { darkMode: boolean; toggleDarkLight(): void }) {
  return (
    <Header
      pad="small"
      background={"bar_body"}
      border={{ color: "bar_accent", size: "1px", side: "bottom" }}
    >
      <Box direction="row">
        <a href="http://tedsite.com">
          <Deploy size="medium" color="logo" />
        </a>
        &nbsp;&nbsp;
        <Text size="large" color="logo_text">
          <b>
            <span>Ted</span>
          </b>
        </Text>
        <Text size="large">
          <b>Site</b>
          <i>.com</i>
        </Text>
      </Box>
      <Box direction="row">
        <a href="http://tedsite.com">
          <Home />
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/tedinspace">
          <Github />
        </a>
        &nbsp;&nbsp;
        {props.darkMode ? (
          <Moon onClick={props.toggleDarkLight} color="light_blue" />
        ) : (
          <Sun onClick={props.toggleDarkLight} color="orange_medium" />
        )}
      </Box>
    </Header>
  );
}
