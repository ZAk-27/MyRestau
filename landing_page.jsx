/* eslint-disable no-unused-vars */
import React from 'react';
import myPdf from '../assets/My landing page of my Website App “MyRestau”.pdf';

const MyComponent = () => (
  <div>
    <embed src={myPdf} type="application/pdf" width="100%" height="600px" />
  </div>
);

export default MyComponent;
