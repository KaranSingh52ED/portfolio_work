import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [
  {
    title: "Title 1",
    description: "HElllo  iwi vwriwweiviwrgvi riiiuiu u v",
    startDate: "2022-03-27",
    endDate: "2022-03-27",
    icon: "https://kabira-portfolio.vercel.app/static/media/HeroImage.8a1d77e892e56c3a311a.jpg"
  },
  {
    title: "Title 2",
    description: "HElllo  iwi vwriwweiviwrgvi riiiuiu u v",
    startDate: "2022-03-27",
    endDate: "2022-03-27",
    icon: "https://kabira-portfolio.vercel.app/static/media/HeroImage.8a1d77e892e56c3a311a.jpg"
  }
] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.startDate} - {item.endDate}
            </TimelineOppositeContent>

            <TimelineSeparator >
              <TimelineDot>
                <img src={item.icon} style={{ width: "25px", height: "25px", borderRadius: "50%" }} alt="Event Icon" />
              </TimelineDot>
              {index !== timelines.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
