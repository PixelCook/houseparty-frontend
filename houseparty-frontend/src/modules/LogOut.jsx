import React, { useEffect } from 'react'

export default function LogOut() {
    useEffect(() => {
        localStorage.removeItem("token")
        window.location = '/home'
    }, [])

    return null

}
