import * as pmd from "../utilities.ts";

describe("Auth Utilities", () => {
  describe("isValidEmail", () => {
    it("returns true for valid email", () => {
      expect(pmd.AuthUtilities.isValidEmail("user@example.com")).toBe(true);
    });

    it("returns false for invalid email", () => {
      expect(pmd.AuthUtilities.isValidEmail("invalid-email")).toBe(false);
    });
  });

  describe("validateDomain", () => {
    it("returns true for matching domain", () => {
      expect(
        pmd.AuthUtilities.validateDomain("user@example.com", "example.com")
      ).toBe(true);
    });

    it("returns false for non-matching domain", () => {
      expect(
        pmd.AuthUtilities.validateDomain("user@another.com", "example.com")
      ).toBe(false);
    });

    it("returns false for malformed email", () => {
      expect(
        pmd.AuthUtilities.validateDomain("user@@example.com", "example.com")
      ).toBe(false);
    });
  });

  describe("generateRandomPassword", () => {
    it("generates a strong password of the correct length", () => {
      const password = pmd.AuthUtilities.generateRandomPassword(12);
      expect(password.length).toBe(12);
      expect(pmd.AuthUtilities.isStrongPassword(password)).toBe(true);
    });
  });

  describe("isStrongPassword", () => {
    it("returns true for a strong password", () => {
      expect(pmd.AuthUtilities.isStrongPassword("aA1!xYz@")).toBe(true);
    });

    it("returns false for a weak password", () => {
      expect(pmd.AuthUtilities.isStrongPassword("password")).toBe(false);
    });
  });

  describe("hasRole", () => {
    it("returns true if role is present", () => {
      expect(pmd.AuthUtilities.hasRole(["admin", "editor"], "admin")).toBe(
        true
      );
    });

    it("returns false if role is not present", () => {
      expect(pmd.AuthUtilities.hasRole(["viewer"], "admin")).toBe(false);
    });
  });

  describe("hashPassword & comparePassword", () => {
    it("hashes and verifies a password correctly", async () => {
      const password = "MySecurePass123!";
      const hashed = await pmd.AuthUtilities.hashPassword(password);
      expect(await pmd.AuthUtilities.comparePassword(password, hashed)).toBe(
        true
      );
    });

    it("fails to match an incorrect password", async () => {
      const password = "MySecurePass123!";
      const hashed = await pmd.AuthUtilities.hashPassword(password);
      expect(
        await pmd.AuthUtilities.comparePassword("wrongpassword", hashed)
      ).toBe(false);
    });
  });
});
