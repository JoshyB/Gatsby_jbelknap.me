//there be media queries here!
const size = {
  mobileM: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
}

export const device = {
  mobile: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}
