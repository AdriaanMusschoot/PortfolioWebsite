/* React Imports */
import { useState } from 'react';

/* Style Imports */
import { Copyable } from './CopyableDiv.js';

/* HTML */
export default function CopyableDiv({ children, TextToCopy }) 
{
    const [isCopied, setIsCopied] = useState(false);

    const HandleCopyMail = (text) => {
        navigator.clipboard.writeText( text )
        .then(() => { 
            setIsCopied(true);
        })
    }

    return (
        <Copyable iscopied={isCopied} onClick={() => HandleCopyMail(TextToCopy)} onMouseLeave={() => { setIsCopied(false) }}>
            {children}
        </Copyable>
    )
};