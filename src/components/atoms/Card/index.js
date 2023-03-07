import "./index.css";

export const Card = ({className, children, refe}) => {
    return (
        <span className={"card " + className} ref={refe}>
            {children}
        </span>
    )
}
