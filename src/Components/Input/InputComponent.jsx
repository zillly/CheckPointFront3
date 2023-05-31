//import style from "./InputComponent.module.css";

function InputComponent({ title, type, value, fnOnChange ,onKeyUp}) {
    return (
        <>
            <label>{title ?? "Indefinido"}</label>
            <br />

            <input
                type={type ?? "text"}
                value={value}
                onChange={fnOnChange}
                onKeyUp={onKeyUp}
            />
            <br />
        </>
    );
}

export default InputComponent;