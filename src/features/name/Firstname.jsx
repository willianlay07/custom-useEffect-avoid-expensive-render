import { useState } from "react";

const Firstname = () => {
  const [fn, setFn] = useState("");

  return (
    <div>
      <input type="text" value={fn} onChange={(e) => setFn(e.target.value)} />
    </div>
  );
};

export default Firstname;
