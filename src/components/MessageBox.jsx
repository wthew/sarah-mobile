import React from 'react';
import styled from 'styled-components';

const Box = styled.View`
    margin: 5px;
    background-color: white;
    align-self: ${props => props.sender == 'bot'? 'flex-start': 'flex-end'};
    align-items: ${props => props.sender == 'bot'? 'flex-start': 'flex-end'}
    min-width: 32px;
    min-height: 32px;
    max-width: 256px;
    elevation: 4;
    border-radius: 15px;
    padding: 10px;
    border-top-${props => props.sender == 'bot'? 'left': 'right'}-radius: 0px;
`;

const MesageText = styled.Text`
  margin: 5px
  font-size: 14px;
  color: #888;
`;

const LabelTime = styled.Text`
  margin: auto
  font-size: 9px;
  color: #aaa;
`;

export default function ({ sender, text, date }) {
  return (
    <Box sender={sender}>
      <LabelTime>{date}</LabelTime>
      <MesageText>{text}</MesageText>
    </Box>
  );
}
