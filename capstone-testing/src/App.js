import React from "react";
// import '.../AuthKey_Y8F8JV7CXD';

function App() {

  const jwt = require('jsonwebtoken');
  const fs = require('fs');

  let now = new Date();
  let nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  let nowEpoch = Math.round(now.getTime() / 1000); // number of seconds since Epoch, in UTC
  let nextMonthEpoch = Math.round(nextMonth.getTime() / 1000); // number of seconds since Epoch, in UTC
  
  const privateKey = fs.readFileSync('../AuthKey_Y8F8JV7CXD.p8');

  const payload = { 
    iss: 'A4NXNNBMQ6',
    iat: nowEpoch,
    exp: nextMonthEpoch
  };

  const options = {
    algorithm: 'ES256',
    header: {
      alg: 'ES256',
      kid: 'Y8F8JV7CXD' // KEY ID
    }
  };
  
  jwt.sign(payload, privateKey, options, function(error, token) {
    console.log(error);
    console.log(token);
  });

  return (
      
    <div className="App">
      this should work
    </div>
  );
}

export default App;
