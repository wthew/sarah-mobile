import React from 'react';
import styled from 'styled-components';

// Mini-Components

const Box = styled.View`
    margin: 5px;
    background-color: ${props => props.theme.background};
    align-self: ${props => props.sender == 'bot' ? 'flex-start' : 'flex-end'};
    align-items: ${props => props.sender == 'bot' ? 'flex-start' : 'flex-end'};
    min-width: 32px;
    min-height: 32px;
    max-width: 256px;
    elevation: 5;
    border-radius: 25px;
    padding: 10px;
    ${({ sender }) => sender == 'bot' ? 'border-top-left-radius' : 'border-top-right-radius'}: 0px;
`;

const MesageText = styled.Text`
  margin: 5px;
  font-size: 14px;
  color: ${props => props.theme.text} ;
`;

const LabelTime = styled.Text`
  margin: auto;
  font-size: 9px;
  color: ${props => `${props.theme.text}a`};
`;

const MessageBox = (props) => {
  let { sender, text, date } = props
  date = date.replace(/\d\d\/\d\d - /, '')

  return <Box sender={sender}>
    <LabelTime>{date}</LabelTime>
    <MesageText>{text}</MesageText>
  </Box>
}

export default MessageBox