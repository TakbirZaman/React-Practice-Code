import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Index;