import { renderHook } from "@testing-library/react-hooks";
import { DateTime } from "luxon";
import { useCurrentWeek } from "../useCurrentWeek";

describe("useCurrentWeek", () => {
  beforeEach(() => {
    const mockCurrentTime = DateTime.fromObject({
      year: 2021,
      month: 1,
      day: 23,
      hour: 12,
      zone: "UTC+0",
    });

    jest.spyOn(DateTime, "local").mockImplementation(() => mockCurrentTime);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the days of the current week", () => {
    const { result } = renderHook(useCurrentWeek);

    const expectedWeek = [
      {
        day: "Monday",
        date: "18",
        startTime: "2021-01-18T00:00:00.000Z",
        endTime: "2021-01-18T23:59:59.999Z",
      },
      {
        day: "Tuesday",
        date: "19",
        startTime: "2021-01-19T00:00:00.000Z",
        endTime: "2021-01-19T23:59:59.999Z",
      },
      {
        day: "Wednesday",
        date: "20",
        startTime: "2021-01-20T00:00:00.000Z",
        endTime: "2021-01-20T23:59:59.999Z",
      },
      {
        day: "Thursday",
        date: "21",
        startTime: "2021-01-21T00:00:00.000Z",
        endTime: "2021-01-21T23:59:59.999Z",
      },
      {
        day: "Friday",
        date: "22",
        startTime: "2021-01-22T00:00:00.000Z",
        endTime: "2021-01-22T23:59:59.999Z",
      },
      {
        day: "Saturday",
        date: "23",
        startTime: "2021-01-23T00:00:00.000Z",
        endTime: "2021-01-23T23:59:59.999Z",
      },
      {
        day: "Sunday",
        date: "24",
        startTime: "2021-01-24T00:00:00.000Z",
        endTime: "2021-01-24T23:59:59.999Z",
      },
    ];

    expect(result.current).toEqual(expectedWeek);
  });
});
