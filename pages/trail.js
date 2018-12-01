import React from "react";
import { Trail } from "react-spring";

import Pane from "../components/Pane";
import { nativeRender, nonNativeRender, AnimatedDiv } from "../utils/renderers";

export default () => (
  <>
    <Pane title="Native animation" notes="✅ Works as expected">
      <Trail
        native
        items={[0, 1]}
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      >
        {() => nativeRender}
      </Trail>
    </Pane>
    <Pane title="Without from" notes="✅ Works as expected">
      <Trail items={[0, 1]} to={{ opacity: 1 }}>
        {() => style => <AnimatedDiv style={style} />}
      </Trail>
    </Pane>
    <Pane title="With immediate prop" notes="❌ It should render the `to` right away (opacity: 1 / transformY(0%)).">
      <Trail
        native
        items={[0, 1]}
        immediate
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      >
        {() => nativeRender}
      </Trail>
    </Pane>
    <Pane title="Non-native animation" notes="✅ Works as expected">
      <Trail
        items={[0, 1]}
        from={{ opacity: 0, transform: "translateY(50%)" }}
        to={{ opacity: 1, transform: "translateY(0%)" }}
      >
        {() => nonNativeRender}
      </Trail>
    </Pane>
  </>
);
