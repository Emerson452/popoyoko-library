import { Button } from "../../atoms";

import "./index.css";

export const About = () => {
    return (
        <section className="landing">
            <h1>what DSKET.IO ?</h1>
            <p>another project for music on the web</p>
            <div className="buttons">
                <Button className="secondary" onClick={() => window.location.href = '/welcome'}>back</Button>
                <Button onClick={() => window.location.href = '/signin'}>sign in</Button>
            </div>
        </section>
    );
}
