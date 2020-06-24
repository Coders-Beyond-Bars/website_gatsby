import React, { Component } from 'react';
import { Typography, Grid, TextField } from "@material-ui/core";

import CBBButton from "components/CBBButton"


const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};


class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      success: false
    }
  }

  handleChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email } = this.state;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "subscribe-mailing-list",
        email
      })
    }).then(() => {
      this.setState({
        email: "",
        success: true
      });
    });
  };

  render() {
    const { email, success } = this.state;

    return (
      <div>
        {success ? (
          <Typography variant="h6">
            Thank you!
          </Typography>
        ) : (
          <Typography variant="h6">
            Subscribe to our mailing list:
          </Typography>
        )}

        <form
          noValidate
          onSubmit={this.handleSubmit}
          name="subscribe-mailing-list"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" nam="form-name" value="subscribe-mailing-list" />
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
                color="white"
                fullWidth
                placeholder="Your E-mail Address"
              />
            </Grid>
            <Grid item xs={4}>
              <CBBButton size="large" variant="outlined" type="submit">
                Subscribe
              </CBBButton>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

export default SubscribeForm;
