export const Z_VIEWBOX = "0 0 8 6";
export const Z_MARK_WIDTH = 140;
export const Z_MARK_HEIGHT = Math.round(Z_MARK_WIDTH * (6 / 8));
export const Z_BAR_HEIGHT = Math.round(Z_MARK_HEIGHT / 6);

// Exact polygons from Zurich brand Z mark (viewBox 0 0 8 6)
export const Z_POLYGONS = {
  top: "0,1 8,1 8,0 0,0",
  diagonal: "8,2 0,3 0,4 8,3",
  bottom: "8,5 0,5 0,6 8,6",
} as const;
