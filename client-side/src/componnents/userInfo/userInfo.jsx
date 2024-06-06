//import { useUser } from "../context/userContext";
import {useUser} from "../context2/useContext.jsx";

const UserInfo = () => {
    const { user } = useUser();

    return (
        <div>
            <h2>Informations utilisateur</h2>
            {user ? (
                <>
                    <p>Nom : {user.firstName}</p>
                    <p>Prénom : {user.lastName}</p>
                    <p>Email : {user.email}</p>
                </>
            ) : (
                <p>Aucun utilisateur connecté</p>
            )}
        </div>
    );
};

export default UserInfo;
