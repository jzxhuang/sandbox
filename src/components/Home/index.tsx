import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import AnnouncementIcon from "@material-ui/icons/Announcement";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HelpIcon from "@material-ui/icons/Help";

import PositionedTooltip from "../PositionedTooltip";

import bamboo from "../../bamboo.jpg";

import "./Home.css";

/**
 * This page contains an image and 3 tooltips at different positions with different content
 */
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        {/* The image */}
        <img src={bamboo} alt="bamboo" />

        {/* Overlaying PositionedTooltips on the image */}
        <PositionedTooltip
          arrow
          interactive
          title={TooltipContent1}
          left={50}
          top={50}
        >
          <AnnouncementIcon />
        </PositionedTooltip>

        <PositionedTooltip
          arrow
          title="I'm centered and I'm a link"
          left={"50%"}
          top={"50%"}
        >
          <Link to="/fruits/apple">
            <NotificationImportantIcon />
          </Link>
        </PositionedTooltip>

        <PositionedTooltip
          arrow
          title="I'm at the bottom right and I'm a link"
          placement="top"
          bottom={0}
          right={0}
        >
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HelpIcon />
          </a>
        </PositionedTooltip>
      </div>
    </div>
  );
};

const TooltipContent1 = (
  <div className="tooltip-content">
    <Typography color="inherit">Wowowow</Typography>
    <div>
      <em>{"And here's"}</em> <b>{"some amazing content."}</b>{" "}
      {"It's very engaging. Right?"}
    </div>

    <a
      href="https://material-ui.com/components/tooltips/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Material UI
    </a>
    <a
      href="https://material.io/resources/icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Material Icons
    </a>
  </div>
);

export default Home;
