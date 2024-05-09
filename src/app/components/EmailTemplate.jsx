import * as React from "react";

export const EmailTemplate = ({ name, email, phone }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
);

export default EmailTemplate;
