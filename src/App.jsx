import React, { useRef } from "react";

const Index = () => {

  const demoRef = useRef(null);

  const Change = () => {
    demoRef.current.src = "https://placehold.co/600x400/000000/FFF";

    demoRef.current.style.height = "900px";
    demoRef.current.style.width = "600px";
  };

  return (
    <div>
      <img
        src="https://placehold.co/600x400/000000/FFF"
        ref={demoRef}
        alt="demo"
      />

      <button onClick={Change}>Submit</button>
    </div>
  );
};

export default Index;