interface IUserAuth {
    firstName: string
    lastName: string
    username: string
    email: string
    role: 'admin' | 'client' | 'agent'
}

export const useUserAuth = () => {
    const data = <IUserAuth>{
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        email: "johndoe@email.com",
        role: "admin",
    }

    return { data, isLogged: () => true }
}
