import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log(
      `React start environment server ${process.env.REACT_APP_SERVER_URI}`
    );
  });

  return <section className="text-4xl text-cyan-600">Hello Wold</section>;
};

export default App;
