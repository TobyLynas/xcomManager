import '../styles/globals.css'
import React, { Component } from 'React'

async function callAPI () {
  await fetch("http://localhost:9000/users")
  .then(response => response.json())
  .then(data => console.log((data[0].name), (data[1].name)));
}

function MyApp({ Component, pageProps }) {
  {callAPI()}
  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp