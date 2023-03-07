import "./index.css";

import { Button } from '../../atoms/';

export const LandingPage = () => {
    return (
        <section className="landing">
            <h1>DSKET.IO</h1>
            <Button onClick={() => window.location.href='/signin'}>ENTER THE MATRIX</Button>
            <p>A little bit lost? {/* TO ADAPT HREF */} <a href="/about">Follow the ...</a></p>
        </section>
    );
}
