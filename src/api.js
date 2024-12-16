import axios from "axios";

const AxiosInstace=axios.create({
    baseURL:"http://127.0.0.2:8080",
    withCredentials:"true",
    headers:{
        Authorization:`Bearer ${!localStorage.getItem("ACCESS_TOKEN")?"null":localStorage.getItem("ACCESS_TOKEN")}`}
    });

export async function login(formData){
    const response=await axios({
        baseURL:"http://127.0.0.2:8080",
        withCredentials:"true",
        method:"POST",
        data:formData,
        url:'/login'
    });
    return response.data;
};

export async function logout(){
    localStorage.removeItem("ACCESS_TOKEN");
    const res=AxiosInstace({
        method:"GET",
        url:"/logout"
    });
    return res.status=="ok";
};

export async function verifyToken(){
    try
        {    
        const accessToken=localStorage.getItem("ACCESS_TOKEN");
        if(!accessToken)
            return;
        const res=await AxiosInstace({
            method:"GET",
            url:"refreshtoken"
        });
        return res.data;
    }
    catch(err){
        console.log(err);
    }

};

