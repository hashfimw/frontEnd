// import { useState } from "react";
// import StateComp from "./components/state";
// import EffectComp from "./components/effect";
// import Refcomp from "./components/ref";
// import MemoComp from "./components/MemoComp";
import { createContext } from "react";
import ContextComp from "./components/context";
import { useState } from "react";
import ReducerComp from "./components/reducer";
import CallbackComp from "./components/callback";

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("Asd");
  return (
    <div>
      <UserContext.Provider value={user}>
        {/* <StateComp/> */}
        {/* <EffectComp/> */}
        {/* <Refcomp/> */}
        {/* <MemoComp /> */}
        {/* <ContextComp /> */}
        {/* <ReducerComp /> */}
        <CallbackComp />
      </UserContext.Provider>
    </div>
  );
}

export default App;
