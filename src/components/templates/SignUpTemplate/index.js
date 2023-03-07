import { useState } from "react"

import { Form } from "../../molecules/Form"
import { FormInput } from "../../molecules/FormInput"
import { TextInput } from "../../atoms"

export const SignUpTemplate = ({ handleSignUp }) => {
    const [form, setForm] = useState({ username: "", password: "", password_repeat: "" })

    return (
        <Form label="Register" onSubmit={() => handleSignUp(form)}>
            <FormInput label="username">
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
            <FormInput label="confirm password">
                <TextInput 
                    password
                    name="password_repeat"
                    value={form.password_repeat}
                    onChange={(e) => setForm({ ...form, password_repeat: e.target.value })}>
                </TextInput>
            </FormInput>
        </Form>
    )
}
