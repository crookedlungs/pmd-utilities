import * as pmd from "../utilities.ts";

describe("ImageUtilities", () => {
  describe("getAspectRatio", () => {
    it("calculates the correct aspect ratio for 1920x1080", () => {
      expect(pmd.ImageUtilities.getAspectRatio(1080, 1920)).toBeCloseTo(
        1.77778,
        5
      );
    });

    it("returns 1 for a square (1000x1000)", () => {
      expect(pmd.ImageUtilities.getAspectRatio(1000, 1000)).toBe(1);
    });
  });

  describe("getHeightFromAR", () => {
    it("calculates width from height and aspect ratio", () => {
      expect(pmd.ImageUtilities.getHeightFromAR(1080, 1.77778)).toBe(1920);
    });
  });

  describe("getWidthFromAR", () => {
    it("calculates height from width and aspect ratio", () => {
      expect(pmd.ImageUtilities.getWidthFromAR(1920, 1.77778)).toBe(1080);
    });
  });
});
