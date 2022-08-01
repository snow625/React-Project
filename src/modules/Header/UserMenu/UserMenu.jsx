import { useDispatch, useSelector } from "react-redux/es/exports";
import { userLogout } from "../../../redux/auth/auth-operation";
import { userName } from "../../../redux/auth/auth-selector";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(userName);
  const handleClick = () => {
    dispatch(userLogout());
  };
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
