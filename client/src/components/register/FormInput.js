import './FormInput.css';

function FormInput(props) {

    return (
        <div className='formInput'>
            {/*<label>Username</label>*/}
            <input placeholder={props.placeholder} className='formInput'
            onChange={e=>props.setUsername(e.target.value)}/>
        </div>
    );
}

export default FormInput;