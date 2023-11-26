/**
 * custom grommet light/dark theme object
 */
export const theme = {
  global: {
    colors: {
      orange_light: "#d4a798", // POP2
      orange_medium: "#c96d4f", // POP1
      orange_dark: "#913a1d", // POP0
      light_blue: "#a4c8de", // TED
      light_blue_medium: "#77afd1",
      logo: {
        dark: "light_blue",
        light: "orange_medium",
      },
      logo_text: {
        dark: "orange_light",
        light: "light_blue_medium",
      },
      bar_body: {
        dark: "#272e38", // UPPERBAR0
        light: "#E5E8EB",
      },
      bar_accent: {
        dark: "#161b22", // UPPERBAR1
        light: "#C5CBD3",
      },
      background: {
        dark: "#111418", // DARK 0
        light: "#fff",
      },
      level1: {
        dark: "#1C2127", // DARK 0
        light: "#E5E8EB",
      },
      header: {
        dark: "#ABB3BF",
        light: "gray",
      },

      blue: {
        dark: "light_blue",
        light: "light_blue_medium",
      },
      orange: {
        dark: "orange_light",
        light: "orange_medium",
      },
      body_text: {
        dark: "#ABB3BF",
        light: "black",
      },
      swap_soft: {
        dark: "#fff",
        light: "#8F99A8",
      },
      swap_hard: {
        dark: "#fff",
        light: "#000",
      },
      no_swap: {
        dark: "#000",
        light: "#fff",
      },
      time_bar: {
        dark: "#383E47",
        light: "#D3D8DE",
      },
      warning: "#EB6847",
      success0: "#238C2C",
      success1: "#43BF4D",

      brand: "light_blue",
      "accent-1": "light_blue",
      "neutral-1": "light_blue",
      "neutral-2": "light_blue",
      "neutral-3": "light_blue",
      "neutral-4": "light_blue",
      focus: "light_blue",
      control: "light_blue",
      active: "orange_medium",
      'background-contrast': 'swap_hard'
    },
  },
  tab: {
    border: {
      color: "swap_soft",
      active: {
        color: "orange",
      },
    },
    color: "swap_soft",
    active: {
      color: "orange",
    },
  },
  card: {
    hover: {
      container: {
        elevation: "large",
      },
    },
    container: {
      elevation: "none",
      extend: `transition: all 0.2s ease-in-out;`,
    },
  },
  clock: {
    analog: {
      hour: {
        color: "light_blue",
      },
      minute: {
        color: "orange_medium",
      },
      second: {
        color: "orange_light",
      },
    },
  },
};
