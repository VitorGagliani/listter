import "./style.css";

export const InputForm = (props) =>{
  return(
    <div>
      <label className="form-label">
        {props.label}
      </label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}