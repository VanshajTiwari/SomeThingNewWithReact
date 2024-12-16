import { useEffect } from "react";
import { login } from "../api";
import { useUserContext } from "../context/usercontext";
import {useNavigate } from "react-router-dom";
export default function Form(){
    const context=useUserContext();
    const navigate=useNavigate();
    async function Submission(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        const res=await login({
            username:formData.get("username"),
            password:formData.get("password")
        });
        localStorage.setItem("ACCESS_TOKEN",res.accessToken);
        context.user=JSON.stringify(res.user);
        context.funAuth(true);
    }
    useEffect(()=>{
        console.log("ON FORM PAGE");
        if(context.isAuth){
           navigate("/me");
        }
    },[context.isAuth]);

    return <form onSubmit={e=>Submission(e)}>
        <input type="text" name="username" id="username" />
        <input type="text" name="password" id="password"/>
        <input type="submit" />
    </form>
}