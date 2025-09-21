import { useRef } from "react";

function InputFocus() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus() {
        inputRef.current?.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={()=> handleFocus()}>Click to enter info</button>
        </div>
    );
}

export default InputFocus;
