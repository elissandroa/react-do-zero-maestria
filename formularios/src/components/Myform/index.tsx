import React, { useState } from 'react'
import './styles.css';



function MyForm({ user }) {
    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        email: {
            value: "",
            id: "name",
            name: "name",
            type: "email",
            placeholder: "Nome",

        },
        bio: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",

        },
        role: {
            value: "",
            id: "name",
            name: "name",
            placeholder: "Nome",
        },
    });

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        user = {
            "name": formData.name,
            "email": formData.email,
            "bio": formData.bio,
            "role": formData.role,
        }

        alert(JSON.stringify(user));


    }


    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        onChange={handleInputChange}
                        type='text'
                        name='name'
                        placeholder='Digite seu nome'
                        value={formData.name.value}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        onChange={handleInputChange}
                        name='email'
                        type="email"
                        placeholder='Digite seu email'
                        value={formData.email.value}
                    />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea
                        onChange={handleInputChange}
                        value={formData.bio.value}
                        name='bio'
                        placeholder='Descrição do usuário'
                    />
                </label>
                <label>
                    <span>Função no sistema</span>
                    <select name="role"
                        onChange={handleInputChange}
                        value={formData.role.value}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Adminstrador</option>
                    </select>
                </label>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}

export default MyForm