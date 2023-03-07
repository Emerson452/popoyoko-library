import { Label } from '../../atoms/'
import './index.css'

export const FormInput = ({ label, children }) => (
    <span>
        <Label>{label}</Label>
        {children}
    </span>
)
