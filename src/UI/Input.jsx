export default function Input({children, labelText, className, labelStyle, ...props}) {
    return <>
        <label className={"ui-label text-center " + labelStyle}>{labelText}</label>
        <input required className={"ui-input " + className} {...props}/>
    </>
}