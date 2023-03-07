import { Button } from "../../atoms";
import "./index.css";

export const NotFound = () => {
    return (
        <section className="notFound">
            <h1>404</h1>
            <Button onClick={() => window.location.href = '/'}>Back Home</Button>
        </section>
    );
}
