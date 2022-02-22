import React, { FC, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useStyles } from "../../constants/styles";
import { Box, Button, Grid, TextField } from "@mui/material";
import Success from "./Success";
import Failed from "./Failed";

interface Template {
  from_name?: string;
  to_name?: string;
  fullName: string;
  company: string;
  email: string;
  msg: string;
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
  } = useForm<Template>({
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      msg: "",
    },
  });
  const onSubmit: SubmitHandler<Template> = (data) => {
    let serviceId: string = process.env.REACT_APP_SERVICE_ID as string;
    let templateId: string = process.env.REACT_APP_TEMPLATE_ID as string;
    let userID: string = process.env.REACT_APP_USER_ID as string;
    let toEmail: string = process.env.REACT_APP_TO_EMAIL as string;

    let templateParams: any = {
      from_name: "Contact Mailer",
      to_name: `${toEmail}`,
      fullName: `${data.fullName}`,
      company: `${data.company}`,
      email: `${data.email}`,
      msg: `${data.msg}`,
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
        msg: "",
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
              name="msg"
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
          <Grid item justifyContent="center" alignItems="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button type="submit" className={styles.contactSubmit}>
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {openSucces ? <Success /> : null}
      {openFail ? <Failed /> : null}
    </form>
  );
};

export default ContactForm;
