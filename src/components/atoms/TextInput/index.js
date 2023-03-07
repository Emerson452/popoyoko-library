import './index.css'

export const TextInput = ({ password = false, name, value, onChange }) => (
    <input 
        type={password ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
    />
)
