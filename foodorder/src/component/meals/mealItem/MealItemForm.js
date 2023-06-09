import React, { useRef,useState } from 'react';
import Input from '../../Ui/Input1';
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
  const [amountIsValid,SetAmountIsValid]=useState(true);
  const amountInputRef=useRef()
  const subMitHandler=event => {
    event.preventDefault()
    const enteredAmount=amountInputRef.current.value
    const enteredAmountNumber=+enteredAmount
    if(enteredAmount.trim().length===0 ||  enteredAmountNumber<1 ||enteredAmountNumber>5){
      SetAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={subMitHandler}>
      <Input
      ref={amountInputRef}
       label="Amount" input={{
        id:"amount"+props.id,
        type:"number",
        min:1,
        max:5,
        step:'1',
        defaultValue:'1',
      }}
      /> 
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter an valid amount(1-5)</p>}
    </form>
  )
}

export default MealItemForm
