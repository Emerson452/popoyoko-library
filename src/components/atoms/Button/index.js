import './index.css'

export const Button = ({ children, play, playing, ...rest }) => {
    return (
        <button {...rest}>{children}</button>
    )
}
