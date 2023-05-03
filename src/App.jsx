import { useState } from "react";

import Sidbar from "./component/Sidbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidbar />
    </>
  );
}

export default App;
