import { renderHook } from "@testing-library/react-hooks";
import { DateTime } from "luxon";
import { useCurrentWeek } from "../useCurrentWeek";

describe("useCurrentWeek", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const getExpectedWeek = (currentDate) => [
    {
      day: "Sunday",
      date: "17",
      startTime: "2021-01-17T00:00:00.000Z",
      endTime: "2021-01-17T23:59:59.999Z",
      isCurrentDay: currentDate === "17",
    },
    {
      day: "Monday",
      date: "18",
      startTime: "2021-01-18T00:00:00.000Z",
      endTime: "2021-01-18T23:59:59.999Z",
      isCurrentDay: currentDate === "18",
    },
    {
      day: "Tuesday",
      date: "19",
      startTime: "2021-01-19T00:00:00.000Z",
      endTime: "2021-01-19T23:59:59.999Z",
      isCurrentDay: currentDate === "19",
    },
    {
      day: "Wednesday",
      date: "20",
      startTime: "2021-01-20T00:00:00.000Z",
      endTime: "2021-01-20T23:59:59.999Z",
      isCurrentDay: currentDate === "20",
    },
    {
      day: "Thursday",
      date: "21",
      startTime: "2021-01-21T00:00:00.000Z",
      endTime: "2021-01-21T23:59:59.999Z",
      isCurrentDay: currentDate === "21",
    },
    {
      day: "Friday",
      date: "22",
      startTime: "2021-01-22T00:00:00.000Z",
      endTime: "2021-01-22T23:59:59.999Z",
      isCurrentDay: currentDate === "22",
    },
    {
      day: "Saturday",
      date: "23",
      startTime: "2021-01-23T00:00:00.000Z",
      endTime: "2021-01-23T23:59:59.999Z",
      isCurrentDay: currentDate === "23",
    },
  ];

  it("should return the days of the current week when the current day is the start of the week (Sunday)", () => {
    const currentDate = "17";

    const mockCurrentTime = DateTime.fromObject({
      year: 2021,
      month: 1,
      day: currentDate,
      hour: 12,
      zone: "UTC+0",
    });

    jest.spyOn(DateTime, "local").mockImplementation(() => mockCurrentTime);

    const { result } = renderHook(useCurrentWeek);

    expect(result.current).toEqual(getExpectedWeek(currentDate));
  });

  it("should return the days of the current week when the current day is the middle of the week (Wednesday)", () => {
    const currentDate = "20";

    const mockCurrentTime = DateTime.fromObject({
      year: 2021,
      month: 1,
      day: currentDate,
      hour: 12,
      zone: "UTC+0",
    });

    jest.spyOn(DateTime, "local").mockImplementation(() => mockCurrentTime);

    const { result } = renderHook(useCurrentWeek);

    expect(result.current).toEqual(getExpectedWeek(currentDate));
  });

  it("should return the days of the current week when the current day is the end of the week (Saturday)", () => {
    const currentDate = "23";

    const mockCurrentTime = DateTime.fromObject({
      year: 2021,
      month: 1,
      day: currentDate,
      hour: 12,
      zone: "UTC+0",
    });

    jest.spyOn(DateTime, "local").mockImplementation(() => mockCurrentTime);

    const { result } = renderHook(useCurrentWeek);

    expect(result.current).toEqual(getExpectedWeek(currentDate));
  });
});
