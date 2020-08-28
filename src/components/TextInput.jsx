import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.TextInput`
  flex: 1;
  width: auto;
  height: 50px;
  border-color: ${props => props.theme.border};
  background-color: ${props => props.theme.background};
  color: #888;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  border-radius: 25px;
  border-width: 2px;
`

const Component = (props) => {
  const { value, handleChangeText, placeholder } = props
  const [_value, setValue] = useState(value)

  useEffect( () => {
    setValue(value)
  }, [value] )
  
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