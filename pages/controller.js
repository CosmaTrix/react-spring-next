import React from "react";
import { Controller } from "react-spring";

import Pane from "../components/Pane";
import { nativeRender } from "../utils/renderers";

class NativeController extends React.Component {
  ctrl = new Controller({ opacity: 0, y: 50 });

  render() {
    const props = this.ctrl.update({ opacity: 1, y: 0 });
    return nativeRender(props);
  }
}

export default () => (
  <div>
    <Pane title="Native animation" notes="✅ Works as expected">
      <NativeController />
    </Pane>
  </div>
);
