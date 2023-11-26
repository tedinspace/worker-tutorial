import { Box, Grommet, grommet } from "grommet";
import { TedHead } from "./shared/TedHead";
import { deepMerge } from "grommet/utils";
import { theme } from "./shared/theme";
import React from "react";
import { fetchThemeSetting, updateThemeSetting } from "./shared/storage";
import {App} from "../App";

const theme_merged = deepMerge(grommet, theme);

export function Root() {
  const [darkMode, toggleDarkLight] = React.useState(fetchThemeSetting(true));
  return (
    <Grommet
      full
      theme={theme_merged}
      id="scroller"
      themeMode={darkMode ? "dark" : "light"}
    >
      <Box fill>
        <TedHead
          darkMode={darkMode}
          toggleDarkLight={() => {
            toggleDarkLight(!darkMode);
            updateThemeSetting(!darkMode);
          }}
        />
        <Box fill align="center" justify="center">
          <App />
        </Box>
      </Box>
    </Grommet>
  );
}
