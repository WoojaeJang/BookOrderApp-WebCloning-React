import React, { useRef, useState } from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input'
import classes from './AddBookForm.module.css'
import _uniqueId from 'lodash/uniqueId'

const AddBookForm = (props) => {

    const [id] = useState(_uniqueId('prefix-'));

    const inputRef = useRef();
    // console.log(inputRef);
  
    const submitHandler = (event) => {
      event.preventDefault();
      // console.log('submitHandler called');
      // console.log(event.target.value);
      // console.log(inputRef.current.value);
      
      // const amountValue = parseInt(inputRef.current.value);
      // console.log(amountValue);
      
      const amountValue = inputRef.current.value;
      // console.log(typeof amountValue);
      const amountValueToNumver = +amountValue
      // console.log(typeof amountValueToNumver);


      props.onAddToCart(amountValueToNumver)


    };

  return (
    <form className={classes.form}>
        <Input ref={inputRef} label='amount' input={{id: id, type: 'number', defaultValue: 1}}/>
        <Button type="submit" onClick={submitHandler}>Add</Button>

    </form>
  )
}

export default AddBookForm