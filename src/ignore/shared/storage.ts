const storageKey = "THEME";

/**
 * default setting
 * @param setTo 
 * @returns 
 */
export const fetchThemeSetting = (setTo:boolean) => {
  const setting = localStorage.getItem(storageKey);
  if (setting !== undefined && setting !== null) {
    return setting === "dark";
  }
  updateThemeSetting(setTo)
  return setTo;
};

export const updateThemeSetting = (darkMode: boolean) => {
  localStorage.setItem(storageKey, darkMode ? "dark" : "light");
};
