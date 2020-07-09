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
    border-width: 2px;
    border-color: #039be5;
    border-radius: 25px;
    padding: 10px;
    ${({ sender }) => sender == 'bot' ? 'border-top-left-radius' : 'border-top-right-radius'}: 0px;
`;

const MesageText = styled.Text`
  margin: 5px;
  font-size: 14px;
  color: ${props => props.sender == 'bot' ? '#039be5' : '#888'} ;
`;

const LabelTime = styled.Text`
  margin: auto;
  font-size: 9px;
  color: #039be5;
`;

const MessageBox = ({ sender, text, date }) => <Box sender={sender}>
  <LabelTime>{date}</LabelTime>
  <MesageText sender={sender}>{text}</MesageText>
</Box>

export default MessageBox