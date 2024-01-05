import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Color from "color"; // v3.2.1

const CardActionAreaActionArea = styled(CardActionArea)(() => ({
  borderRadius: 16,
  transition: "0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledCard = styled(Card)(({ color }) => ({
  minWidth: 256,
  borderRadius: 16,
  boxShadow: "none",
  "&:hover": {
    boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
  },
}));

const CardContentContent = styled(CardContent)(({ color }) => {
  return {
    backgroundColor: color,
    padding: "1rem 1.5rem 1.5rem",
  };
});

const TypographyTitle = styled(Typography)(() => ({
  fontFamily: "Keania One",
  fontSize: "2rem",
  color: "#fff",
  textTransform: "uppercase",
}));

const TypographySubtitle = styled(Typography)(() => ({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  marginTop: "2rem",
  fontWeight: 500,
  fontSize: 14,
}));

const CustomCard = ({
  color,
  image,
  title,
  subtitle,
}: {
  color: string;
  image: string;
  title: string;
  subtitle: string;
}) => (
  <CardActionAreaActionArea>
    <StyledCard color={color}>
      <CardMedia
        image={image}
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "75%",
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      />
      <CardContentContent color={color}>
        <TypographyTitle variant={"h2"}>{title}</TypographyTitle>
        <TypographySubtitle>{subtitle}</TypographySubtitle>
      </CardContentContent>
    </StyledCard>
  </CardActionAreaActionArea>
);

export function CardSolidGame() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <CustomCard
          color={"#203f52"}
          title={"Dota 2"}
          subtitle={"Be a Legend!"}
          image={
            "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png"
          }
        />
      </Grid>
      <Grid item>
        <CustomCard
          color="#4d137f"
          title={"Fortnite"}
          subtitle={"Time to choose side!"}
          image={
            "https://static1.millenium.org/articles/0/31/21/20/@/713589-calamity-article_list_m-1.jpg"
          }
        />
      </Grid>
      <Grid item>
        <CustomCard
          color="#ff9900"
          title={"Overwatch"}
          subtitle={"What are you waiting?"}
          image={"https://images5.alphacoders.com/690/thumb-1920-690653.png"}
        />
      </Grid>
      <Grid item>
        <CustomCard
          color="#34241e"
          title={"PUBG"}
          subtitle={"Are you ready?"}
          image={
            "https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
          }
        />
      </Grid>
    </Grid>
  );
}
