import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoBlogStyles } from "./InfoBlog.styles";

export function InfoBlog() {
  return (
    <Info variant="blog" useStyles={getInfoBlogStyles}>
      <InfoEyebrow>28 MAR 2019</InfoEyebrow>
      <InfoTitle>What is Git ?</InfoTitle>
      <InfoSubtitle>
        Git is a distributed version control system. Every dev has a working
        copy of the code and...
      </InfoSubtitle>
    </Info>
  );
}
