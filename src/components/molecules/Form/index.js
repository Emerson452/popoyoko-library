import { Label, Button } from '../../atoms';
import './index.css';


export const Form = ({ name, onSubmit: submit, label, children, error }) => (
    <form className="form" name={name}>
        <h1>{label}</h1>
        {children}
        <Button onClick={(e) => { e.preventDefault();submit(); }}>submit</Button>
        {error && (
            <div className="form-error">
                <Label>{error}</Label>
            </div>
        )}
    </form>
)
