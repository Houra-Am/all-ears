import React from "react";
import PodcastDetailsCard from "./PodcastDetailsCard";

const PodDetailSection = (props) => {
  return <PodcastDetailsCard
    title={props.title}
    img={props.img}
  />;
};

export default PodDetailSection;
