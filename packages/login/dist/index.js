import React, { useState } from "react";
import { Button, Modal } from "antd";
export default function Login({ className }) {
    const [open, setopen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: () => setopen(true), className: className }, "\u767B\u5F55"),
        React.createElement(Modal, { title: "\u767B\u5F55", open: open, onCancel: () => setopen(false), onOk: () => setopen(false) },
            React.createElement("p", null, "\u767B\u5F55\u5F39\u7A97"))));
}
