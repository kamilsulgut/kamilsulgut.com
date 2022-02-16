import React, { FC } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useStyles } from "../../constants/styles";
import { Button, TextField } from "@mui/material";

interface IFormInput {
  fullName: string;
  company: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const { control, register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let serviceId: any = process.env.REACT_APP_SERVICE_ID;
    let templateId: any = process.env.REACT_APP_TEMPLATE_ID;
    let userID: any = process.env.REACT_APP_USER_ID;

    let templateParams: any = {
      from_name: "Contact Mailer",
      to_name: `${process.env.REACT_APP_TO_EMAIL}`,
      fullName: `${data.fullName}`,
      company: `${data.company}`,
      email: `${data.email}`,
      msg: `${data.message}`,
    };

    emailjs
      .send(`${serviceId}`, `${templateId}`, templateParams, `${userID}`)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const styles = useStyles();

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <TextField
            {...register("fullName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            {...field}
            label="Full Name"
            variant="outlined"
            name="fullName"
            fullWidth
          ></TextField>
        )}
      />
      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Company"
            variant="outlined"
            name="company"
            required
            fullWidth
          ></TextField>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            name="email"
            required
            fullWidth
          ></TextField>
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Message"
            variant="outlined"
            name="message"
            required
            fullWidth
          ></TextField>
        )}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ContactForm;
