import React from 'react'
import jwtDecode from 'jwt-decode'

function useLogin(){
    const refreshPage = () => {
        window.location.reload();
    } 

    const login = (token) => {
        let jwt = token;
        localStorage.setItem("token", jwt)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
    }

    const isAuthenticated = () => {
        return localStorage.getItem("token") !== null
    }

    const getUserId = () => {
        let jwt = localStorage.getItem("token")
        if(jwt != null){
            let decoded = jwtDecode(jwt)
            let userId = decoded.sub
    
            return userId
        }
        
    }

    const token =  localStorage.getItem("token")
    const userId = getUserId()

    return {
        login, 
        logout,
        isAuthenticated,
        token,
        userId,
        getUserId,
        refreshPage
    }
}

export default useLogin