export const multiItem = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
    arrows: true,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 3,
    arrows: true,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    arrows: false,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 75,
    arrows: false,
  },
};
export const singleItem = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 1,
    arrows: true,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 1,
    arrows: true,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    arrows: true,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 75,
    arrows: true,
  },
};
