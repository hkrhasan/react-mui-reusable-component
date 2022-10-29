import React from 'react'

export const RawCodeLayout = (props) => {
    return <pre style={{
        color: "#f8f8f2",
        backgroundColor: "#272822",
        padding: 20,
        margin: 20,
        borderRadius: 10
    }}>
        <code class="language-javascript" data-lang="javascript" style={{ whiteSpace: "pre-line" }}>
            {props.children}
        </code>
    </pre>
}
