import React, { FC, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useStyles } from "../../constants/styles";
import { Button, Grid, TextField } from "@mui/material";
import Success from "./Success";
import Failed from "./Failed";
import { ClassNames } from "@emotion/react";

interface IFormInput {
  fullName: string;
  company: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [openSucces, setOpenSucces] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormInput>({
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
          response.status ? setOpenSucces(true) : setOpenFail(true);
        },
        function (error) {
          setOpenFail(true);
          console.log("FAILED...", error);
        }
      )
      .catch((err) => {
        setOpenFail(true);
        console.log(err);
      });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullName: "",
        company: "",
        email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const styles = useStyles();

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container direction="column" xs={12} md={6} spacing={2}>
          <Grid item>
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
                  className={styles.contactInput}
                  label="Full Name"
                  variant="outlined"
                  name="fullName"
                  required
                  color="primary"
                  fullWidth
                ></TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={styles.contactInput}
                  label="Company"
                  variant="outlined"
                  name="company"
                  required
                  color="primary"
                  fullWidth
                ></TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  {...register("email")}
                  className={styles.contactInput}
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                  color="primary"
                  fullWidth
                ></TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={styles.contactInput}
                  label="Message"
                  variant="outlined"
                  name="message"
                  required
                  color="primary"
                  fullWidth
                ></TextField>
              )}
            />
          </Grid>
          <Button type="submit">Send</Button>
        </Grid>
      </Grid>
      {openSucces ? <Success /> : null}
      {openFail ? <Failed /> : null}
    </form>
  );
};

export default ContactForm;
