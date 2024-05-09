import * as React from "react";


export const EmailTemplate = ({ name,cargo, email, phone }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{cargo}</p>
    <p>{phone}</p>
  </div>
);

export default EmailTemplate;

