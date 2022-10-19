import { NextPage } from 'next';
import React from 'react';

const Restricted = () => {
  return <div>restricted</div>;
};
Restricted.auth = {
  role: 'admin',
  loading: <h1>loading</h1>,
  unauthorized: '/',
};

export default Restricted;
