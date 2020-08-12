<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
import styled from 'styled-components';

const Container = styled.TextInput`
  flex: 1;
  width: auto;
  height: 50px;
<<<<<<< HEAD
  background-color: #fff2;
  color: #888;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #ccc7;
`

const Component = (props) => {
  const { value, handleChangeText, placeholder } = props
  const [_value, setValue] = useState(value)

  useEffect( () => {
    setValue(value)
  }, [value] )
=======
  background-color: #fff;
  color: #333;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #ccc;
`

const Component = ({ value, handleChangeText, placeholder }) => {
  const [_value, setValue] = useState(value)
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
  
  return <Container 
    value={_value} 
    onChangeText={(text) => {
      setValue(text)
      handleChangeText(text)
    }} 
    placeholderTextColor="#999"
    placeholder={placeholder} />
}

export default Component