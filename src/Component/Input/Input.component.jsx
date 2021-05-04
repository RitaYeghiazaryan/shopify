import s from "./input.module.scss";

const Input = (props) => {
  const {value,placeholder, ...restProps } = props;


  return (
    <div className={s.container}>
      <input className={s.input} value={value} placeholder={placeholder} {...restProps}  />
      
    </div>
  );
};

export default Input;
