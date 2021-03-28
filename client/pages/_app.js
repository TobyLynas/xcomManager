import '../styles/globals.css'
import React, { Component } from 'React'


function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp