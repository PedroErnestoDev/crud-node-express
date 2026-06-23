import { useEffect, useState } from "react"

export default function ListarUsers(){
    const url = "http://localhost:3000/usuarios";

    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }

        loadUsers();
    }, [])

    return (
        <>
            <h1>Usuarios Cadastrados</h1>
            {data.map((user) => [
                <p key={user.email}>
                    {user.nome} - {user.email}
                </p>
            ])}
        </>
    )
}