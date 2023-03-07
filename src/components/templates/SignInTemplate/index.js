import { useState } from "react"

import { Form } from "../../molecules/Form"
import { FormInput } from "../../molecules/FormInput"
import { TextInput } from "../../atoms"

export const SignInTemplate = ({ handleSignIn }) => {
    const [form, setForm] = useState({ username: "", password: "" })

    return (
        <Form label="Sign In" onSubmit={() => handleSignIn(form)}>
            <FormInput label="User Name">
                <TextInput 
                    name="username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}>
                </TextInput>
            </FormInput>
            <FormInput label="password">
                <TextInput 
                    password
                    name="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}>
                </TextInput>
            </FormInput>
        </Form>
    )
}
