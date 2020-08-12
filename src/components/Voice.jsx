import React, { useEffect, useState } from 'react';
import { Row, SwitchComponent } from "./Containers";

import Storage from "../services/storage";
const components = () => {
  const [enable, setEnable] = useState(Storage.get('use_voice') || false)

  return <Row>
    <SwitchComponent
      toggleSwitch={(value) => { setEnable(value); Storage.set('use_voice', value) }}
      value={enable}
      label={'Usar Voz?'} />
  </Row>
}

export default components;