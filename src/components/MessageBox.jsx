import React from 'react';
import styled from 'styled-components';

// Mini-Components

const Box = styled.View`
    margin: 5px;
    background-color: white;
    align-self: ${props => props.sender == 'bot' ? 'flex-start' : 'flex-end'};
    align-items: ${props => props.sender == 'bot' ? 'flex-start' : 'flex-end'};
    min-width: 32px;
    min-height: 32px;
    max-width: 256px;
<<<<<<< HEAD
    elevation: 5;
=======
    border-width: 2px;
    border-color: #039be5;
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
    border-radius: 25px;
    padding: 10px;
    ${({ sender }) => sender == 'bot' ? 'border-top-left-radius' : 'border-top-right-radius'}: 0px;
`;

const MesageText = styled.Text`
  margin: 5px;
  font-size: 14px;
<<<<<<< HEAD
  color: #888 ;
=======
  color: ${props => props.sender == 'bot' ? '#039be5' : '#888'} ;
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
`;

const LabelTime = styled.Text`
  margin: auto;
  font-size: 9px;
  color: #039be5;
`;

<<<<<<< HEAD
const MessageBox = (props) => {
  let { sender, text, date } = props
  date = date.replace(/\d\d\/\d\d - /, '')

  return <Box sender={sender}>
    <LabelTime>{date}</LabelTime>
    <MesageText>{text}</MesageText>
  </Box>
}
=======
const MessageBox = ({ sender, text, date }) => <Box sender={sender}>
  <LabelTime>{date}</LabelTime>
  <MesageText sender={sender}>{text}</MesageText>
</Box>
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9

export default MessageBox