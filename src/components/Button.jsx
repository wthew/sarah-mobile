import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  padding: 15px;
  border-radius: 25px;
  border-color: #039be5;
  background-color: #fff2;
  border-width: 2px;
  align-items: center;
  justify-content: center;
`

const Label = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #039be5;
  font-weight: bold;
`

const Component = ({ labelText, handlePress, handleLongPress }) => {
  return <Container 
    onPress={handlePress}
    onLongPress={handleLongPress}>
      <Label>{labelText}</Label>
  </Container>
}

export default Component;
