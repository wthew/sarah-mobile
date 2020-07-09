import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  flex: 1;
  max-height: 50px;
  padding: 15px;
  border-radius: 25px;
  border-color: #039be5;
  background-color: white;
  border-width: 2px;
  align-items: center;
`

const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #039be5;
`

const Component = ({ labelText, handlePress, handleLongPress }) => {
  return <Container 
    onPress={handlePress}
    onLongPress={handleLongPress}>
      <Label>{labelText}</Label>
  </Container>
}

export default Component;
