import React from "react";
import Email from "email";
import { Row } from "react-bootstrap";

function Email() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                <strong className="purple">Coding</strong>
            </h1>
            <Email
                username="oros.radu93@yahoo.com"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
        </Row>
    );
}

export default Email;