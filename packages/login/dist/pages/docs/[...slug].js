import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
const DemoBlock = ({ children }) => {
    const [visible, setVisible] = useState(false);
    return (React.createElement("div", { className: "demo-block" }, children.map((child) => {
        if (child.type === "pre") {
            return (React.createElement("div", { key: child.key },
                React.createElement("div", { className: "demo-block-button", onClick: () => setVisible(!visible) }, !visible ? "显示代码" : "收起代码"),
                visible && child));
        }
        return child;
    })));
};
const components = {
    DemoBlock,
};
export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { slug: ["login"] } },
            { params: { slug: ["user-selecter"] } },
        ],
        fallback: false, // SSG mode
    };
}
export async function getStaticProps({ params, }) {
    const slug = params?.slug.join("/");
    return {
        props: {
            slug,
        },
    };
}
export default function Page({ slug }) {
    const Content = dynamic(() => import(`packages/${slug}/docs/index.mdx`), {
        ssr: false,
    });
    return (React.createElement("div", null,
        React.createElement(MDXProvider, { components: components },
            React.createElement(Content, null))));
}
