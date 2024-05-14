import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import './loading.css';

export default function Loading({ loading, color }) {

  return (
    <div className='loadingContainer'>
      <DotLoader
        color={color}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}