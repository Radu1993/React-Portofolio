import React from "react";
import Linkedin from "linkedin";
import { Row } from "react-bootstrap";

function Linkedin() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Coding</strong>
            </h1>
            <Linkedin
                username="linkedin.com/in/radu-oros-769890183"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
        </Row>
    );
}

export default Linkedin;