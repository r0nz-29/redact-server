import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';

export default function Guard({children}) {
  const {loggedIn} = useSelector(state => state.auth);

  if (!loggedIn) {
    return <Navigate to="/" />
  }

  return children;

}