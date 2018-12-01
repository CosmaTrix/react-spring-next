import React from "react";
import { Spring } from "react-spring";

import Pane from "../components/Pane";
import { nativeRender, nonNativeRender } from "../utils/renderers";

export default () => (
  <div>
    <Pane title="from and to as objects" notes="✅ Works as expected">
      <Spring native from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }}>
        {nativeRender}
      </Spring>
    </Pane>
    <Pane title="with immediate prop" notes="❌ It should render the `to` right away (opacity: 1 / transformY(0%)).">
      <Spring
        native
        immediate
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      >
        {nativeRender}
      </Spring>
    </Pane>
    <Pane title="without from prop" notes="✅ Works as expected">
      <Spring native to={{ opacity: 1, y: 0 }}>
        {nativeRender}
      </Spring>
    </Pane>
    <Pane title="Non-native animation" notes="✅ Works as expected">
      <Spring
        from={{ opacity: 0, transform: "translateY(50%)" }}
        to={{ opacity: 1, transform: "translateY(0%)" }}
      >
        {nonNativeRender}
      </Spring>
    </Pane>
  </div>
);
