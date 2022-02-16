import { Box, Typography } from "@mui/material";
import React from "react";

function AboutText() {
  const aboutText: string[] = [
    "I am a Polish front-end developer living and working in Warsaw, Poland.",
    "Ever since I was a teenager, I was interested in computer science, especially programming. Finally, in 2019 I decided to start my new career path and become a front-end developer.",
    "My adventure started with a course organised by CodersLab where I learned the basics and some more advanced programming topics such as JavaScript. Then I started an additional course at the Szkoła reacta (React School). There I learned more about solving complex problems and overcoming challenges by working with React. I continue to refine my path with my mentor, where my current focus points are: React.js, Redux, TypeScript and Next.js.",
    "I took my first professional steps at Craftware, where I currently work.",
    "Privately, I am interested in technological innovations, motorization and firefighting. I am constantly trying to develop and broaden my horizons. I am eager to learn new things and take on challenges. I never give up and always strive to achieve my current goals. I am an open, friendly person with a strong character.",
  ];
  return (
    <>
      <Box
        sx={{
          marginLeft: 2,
          marginTop: 2,
          color: "white",
          flexDirection: "row",
        }}
      >
        {aboutText.map((el: string, i: number) => {
          return (
            <Typography key={i} mt={3} variant="h5">
              {el}
            </Typography>
          );
        })}
      </Box>
    </>
  );
}

export default AboutText;
