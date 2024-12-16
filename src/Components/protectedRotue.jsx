import { Navigate, useNavigate } from "react-router-dom"
import { logout } from "../api"
import { useUserContext } from "../context/usercontext";

export default function Protect(){
    const navigate=useNavigate();
    const {funAuth}=useUserContext();
    return (
        <div>
            protected Routes
            <button onClick={async e=>{funAuth(false);logout();navigate("/")}}>logout</button>
        </div>
    )
}