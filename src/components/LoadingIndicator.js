// @flow
import React from 'react';

type Props = {
  isLoading:boolean,
  error: string,
  timedOut: boolean
};

const LoadingIndicator = ({isLoading, error, timedOut} : Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } 
  else if (timedOut) {
    return <div>Taking a long time...</div>;
  }
  else {
    return null;
  }
};

export default LoadingIndicator;