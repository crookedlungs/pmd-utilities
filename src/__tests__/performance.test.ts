import * as pmd from "../utilities.ts";

describe("debounce", () => {
  jest.useFakeTimers();

  it("should delay function invocation by the specified wait time", () => {
    const mockFn = jest.fn();
    const debouncedFn = pmd.PerformanceUtilities.debounce(mockFn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("throttle", () => {
  it("should only allow the function to be called once within the throttle window", () => {
    const mockFn = jest.fn();
    const throttledFn = pmd.PerformanceUtilities.throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

/* describe("wait", () => {
  it("should resolve after the specified time", async () => {
    const start = Date.now();

    await pmd.PerformanceUtilities.wait(1000);

    const duration = Date.now() - start;
    expect(duration).toBeGreaterThanOrEqual(1000); // Ensures at least 1 second passed
  }, 30000);
}); */
