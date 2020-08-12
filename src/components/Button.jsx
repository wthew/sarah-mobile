import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  flex: 1;
<<<<<<< HEAD
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
=======
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
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
`

const Component = ({ labelText, handlePress, handleLongPress }) => {
  return <Container 
    onPress={handlePress}
    onLongPress={handleLongPress}>
      <Label>{labelText}</Label>
  </Container>
}

export default Component;
