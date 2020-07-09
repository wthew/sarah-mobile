import styled from "styled-components";

const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`
const Row = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 10px;
  align-items: stretch;
`

export {
  Touchable,
  Row
}