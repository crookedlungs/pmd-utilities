import * as pmd from "../utilities.ts";

describe("dateFromString", () => {
  test("parses mmddyyyy string to US date", () => {
    expect(pmd.DateUtilities.dateFromString("05092025", "en-US")).toBe(
      "5/9/2025"
    );
  });

  test("parses mmddyyyy string to UK date", () => {
    expect(pmd.DateUtilities.dateFromString("12312024", "en-GB")).toBe(
      "31/12/2024"
    );
  });
});

describe("isSameDay", () => {
  test("returns true for same day", () => {
    const d1 = new Date("2025-01-01");
    const d2 = new Date("2025-01-01");
    expect(pmd.DateUtilities.isSameDay(d1, d2)).toBe(true);
  });

  test("returns false for different days", () => {
    const d1 = new Date("2025-01-01");
    const d2 = new Date("2025-01-02");
    expect(pmd.DateUtilities.isSameDay(d1, d2)).toBe(false);
  });
});

describe("getTimeAgo", () => {
  const RealDateNow = Date.now;

  beforeEach(() => {
    jest
      .spyOn(Date, "now")
      .mockImplementation(() => new Date("2025-01-01T12:00:00Z").getTime());
  });

  afterEach(() => {
    Date.now = RealDateNow;
  });

  test("returns 'just now' for recent timestamps", () => {
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 4000)).toBe("just now");
  });

  test("returns seconds ago", () => {
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 10000)).toBe(
      "10 seconds ago"
    );
  });

  test("returns minutes ago", () => {
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 60000)).toBe(
      "1 minute ago"
    );
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 180000)).toBe(
      "3 minutes ago"
    );
  });

  test("returns hours ago", () => {
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 7200000)).toBe(
      "2 hours ago"
    );
  });

  test("returns days ago", () => {
    expect(pmd.DateUtilities.getTimeAgo(Date.now() - 172800000)).toBe(
      "2 days ago"
    );
  });

  test("returns date string for old timestamps", () => {
    const oldDate = new Date("2024-01-01");
    expect(pmd.DateUtilities.getTimeAgo(oldDate.getTime())).toBe(
      oldDate.toLocaleDateString()
    );
  });
});
