function GenerateButton(props) {
    return <button style={{
        backgroundColor: props.color || 'black',
        color:'white',
        margin:'5px'
    }}> {props.text}  </button>

}

function PrimaryButton(props) {
    return <GenerateButton color="blue" text={props.text}/>
}

function SecondaryButton(props) {
    return <GenerateButton color="gray" text={props.text}/>
}

function DangerButton(props) {
    return <GenerateButton color="red" text={props.text}/>
}

export default GenerateButton
export {PrimaryButton,SecondaryButton,DangerButton}