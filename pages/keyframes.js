import React from "react";
import { Keyframes } from "react-spring";

import Pane from "../components/Pane";
import { nativeRender, nonNativeRender, AnimatedDiv } from "../utils/renderers";

const ArrayKeyframes = Keyframes.Spring({
  enter: [
    { opacity: 1, y: 0 },
    { opacity: 0.5 },
    { y: 25 },
    { opacity: 1, y: 0 },
  ],
});

const AsyncKeyframes = Keyframes.Spring({
  enter: async next => {
    await next({ opacity: 1, y: 0 });
    await next({ opacity: 0 });
    await next({ opacity: 0.5 });
    await next({ y: 50 });
    await next({ opacity: 1, y: 0 });
  },
});

const NonNativeKeyframes = Keyframes.Spring({
  enter: [
    { opacity: 1, transform: "translateY(50%)" },
    { opacity: 0.5 },
    { transform: "translateY(25%)" },
    { opacity: 1, transform: "translateY(0%)" },
  ],
});

export default () => (
  <div>
    <Pane title="Array of objects keyframes" notes="✅ Works as expected">
      <ArrayKeyframes native from={{ opacity: 0, y: 50 }} state="enter">
        {nativeRender}
      </ArrayKeyframes>
    </Pane>
    <Pane title="Async keyframes" notes="✅ Works as expected">
      <AsyncKeyframes native from={{ opacity: 0, y: 50 }} state="enter">
        {nativeRender}
      </AsyncKeyframes>
    </Pane>
    <Pane title="Without from" notes="✅ Works as expected">
      <ArrayKeyframes native state="enter">
        {style => <AnimatedDiv style={style} />}
      </ArrayKeyframes>
    </Pane>
    <Pane title="Array of objects with immediate prop" notes="❌ It should render the `to` right away (opacity: 1 / transformY(0%)).">
      <ArrayKeyframes
        native
        immediate
        from={{ opacity: 0, y: 50 }}
        state="enter"
      >
        {nativeRender}
      </ArrayKeyframes>
    </Pane>
    <Pane title="Async keyframes with immediate prop" notes={() => (
      <>
        <p>❌ It should render the `to` right away (opacity: 1 / transformY(0%)).</p>
        <br/>
        <p>
          This is going to be probably the most difficult one to fix as it is not that easy to run and resolve the async function in Node.js
        </p>
      </>
    )}>
      <AsyncKeyframes
        native
        immediate
        from={{ opacity: 0, y: 50 }}
        state="enter"
      >
        {nativeRender}
      </AsyncKeyframes>
    </Pane>
    <Pane title="Non-native animation" notes="✅ Works as expected">
      <NonNativeKeyframes
        from={{ opacity: 0, transform: "translateY(50%)" }}
        state="enter"
      >
        {nonNativeRender}
      </NonNativeKeyframes>
    </Pane>
  </div>
);
