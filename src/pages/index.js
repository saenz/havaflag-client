import React from 'react';
import Loadable from 'react-loadable';
import LoadingIndicator from 'components/LoadingIndicator';

const Home = Loadable({
  loader: () => import("pages/Home"),
  loading: LoadingIndicator
});

const NotFound = Loadable({
  loader: () => import("pages/NotFound"),
  loading: LoadingIndicator
});

const Admin = Loadable({
  loader: () => import("pages/Admin"),
  loading: LoadingIndicator
});

export default { NotFound, Admin, Home }