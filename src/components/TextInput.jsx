import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.TextInput`
  flex: 1;
  width: auto;
  height: 50px;
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