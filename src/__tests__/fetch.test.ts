import * as pmd from "../utilities";

// Cast global fetch to jest.Mock
global.fetch = jest.fn() as jest.Mock;

describe("pmd.FetchUtilities.proFetchGet", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear(); // Reset mock before each test
  });

  it("should make a GET request and return parsed JSON", async () => {
    const mockResponse = { data: "some data" };
    (fetch as jest.Mock).mockResolvedValueOnce({
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    });

    const result = await pmd.FetchUtilities.proFetchGet(
      "https://api.example.com",
      "users",
      [{ field: "role", value: "admin" }]
    );

    expect(fetch).toHaveBeenCalledWith(
      "https://api.example.com/users?role=admin",
      expect.objectContaining({
        method: "GET",
        headers: { Accept: "application/json" },
      })
    );
    expect(result).toEqual(mockResponse);
  });

  it("should log responses if log is true", async () => {
    const mockResponse = { data: "logged data" };
    (fetch as jest.Mock).mockResolvedValueOnce({
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    });

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

    await pmd.FetchUtilities.proFetchGet(
      "https://api.example.com",
      "users",
      [],
      true
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Raw response:",
      '{"data":"logged data"}'
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("Parsed JSON:", mockResponse);

    consoleLogSpy.mockRestore();
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(
      pmd.FetchUtilities.proFetchGet("https://api.example.com", "users", [])
    ).rejects.toThrow("Network error");
  });
});

describe("pmd.FetchUtilities.proFetchPost", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear(); // Reset mock before each test
  });

  it("should make a POST request and return parsed JSON", async () => {
    const mockResponse = { success: true };
    (fetch as jest.Mock).mockResolvedValueOnce({
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    });

    const result = await pmd.FetchUtilities.proFetchPost(
      "https://api.example.com",
      "submit",
      {
        name: "Alice",
        score: 42,
      }
    );

    expect(fetch).toHaveBeenCalledWith(
      "https://api.example.com/submit",
      expect.objectContaining({
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: '{"name":"Alice","score":42}',
      })
    );
    expect(result).toEqual(mockResponse);
  });

  it("should log responses if log is true", async () => {
    const mockResponse = { success: true };
    (fetch as jest.Mock).mockResolvedValueOnce({
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    });

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

    await pmd.FetchUtilities.proFetchPost(
      "https://api.example.com",
      "submit",
      { name: "Alice", score: 42 },
      true
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Raw response:",
      '{"success":true}'
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("Parsed JSON:", mockResponse);

    consoleLogSpy.mockRestore();
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(
      pmd.FetchUtilities.proFetchPost("https://api.example.com", "submit", {
        name: "Alice",
        score: 42,
      })
    ).rejects.toThrow("Network error");
  });
});
