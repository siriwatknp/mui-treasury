import React from "react";
import { Info } from "../info-basic/info";
import { InfoEyebrow } from "../info-basic/info-eyebrow";
import { InfoSubtitle } from "../info-basic/info-subtitle";
import { InfoTitle } from "../info-basic/info-title";
import { getInfoBlogStyles } from "./info-blog.styles";

export default function InfoBlog() {
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
