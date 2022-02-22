import { Box } from "@mui/material";
import React, { FC } from "react";
import Title from "../../constants/Title";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
  return (
    <Box id="contact">
      <Title text="Contact" />
      <ContactForm />
    </Box>
  );
};

export default Contact;
