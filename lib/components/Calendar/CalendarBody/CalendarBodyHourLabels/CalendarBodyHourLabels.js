import React from "react";
import styled from "styled-components";
import { HoursColumn } from "../../HoursColumn";
import { HOUR_HEIGHT } from "../CalendarBodyDay/CalendarBodyHour";

const labels = [
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const LabelContainer = styled.div`
  height: ${HOUR_HEIGHT}px;
  position: relative;
  border: 1px solid transparent;
  border-top: none;
`;

const Label = styled.p`
  position: absolute;
  bottom: -8px;
  right: 10px;

  margin: 0;

  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 0.75rem;
  color: ${(props) => props.theme.fonts.colors.grey};
`;

function CalendarBodyHourLabels() {
  return (
    <HoursColumn>
      {labels.map((label) => (
        <LabelContainer key={label}>
          <Label>{label}</Label>
        </LabelContainer>
      ))}
    </HoursColumn>
  );
}

export { CalendarBodyHourLabels };
