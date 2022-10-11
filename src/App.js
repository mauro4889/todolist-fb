import { Grid, Stack } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { auth, createUserProfile } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/userAction";
import { Routes } from "./routes/Routes";


const onChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async user => {
    if (user) {
      const snapshot = await createUserProfile(user);
      dispatch(action({ id: snapshot.id, ...snapshot.data() }));
    } else {
      dispatch(action(null));
    }
  });
};

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsuscribe = onChange(dispatch, setCurrentUser)
    return () => unsuscribe()
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Menu />
      <Routes />
    </>
  );
}

export default App;
