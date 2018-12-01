import React from "react";
import { Transition } from "react-spring";

import Pane from "../components/Pane";
import { nativeRender, nonNativeRender, AnimatedDiv } from "../utils/renderers";

export default () => (
  <div>
    <Pane title="from and enter as objects" notes="✅ Works as expected">
      <Transition
        native
        from={{ opacity: 0, y: 50 }}
        enter={{ opacity: 1, y: 0 }}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="from as object and enter as an array of objects" notes="✅ Works as expected">
      <Transition
        native
        from={{ opacity: 0, y: 50 }}
        enter={[
          { opacity: 1, y: 25 },
          { opacity: 0.5 },
          { y: 50 },
          { opacity: 1, y: 0 },
        ]}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="from as object and enter as a function" notes="✅ Works as expected">
      <Transition
        native
        from={{ opacity: 0, y: 50 }}
        enter={() => ({ opacity: 1, y: 0 })}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="from as object and enter as an async function" notes="✅ Works as expected">
      <Transition
        native
        from={{ opacity: 0, y: 50 }}
        enter={() => async next => {
          await next({ opacity: 1, y: 25 });
          await next({ opacity: 0.5 });
          await next({ y: 50 });
          await next({ opacity: 1, y: 0 });
        }}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="from and enter as functions" notes="✅ Works as expected">
      <Transition
        native
        from={() => ({ opacity: 0, y: 50 })}
        enter={() => ({ opacity: 1, y: 0 })}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="With initial prop" notes="✅ Works as expected">
      <Transition
        native
        initial={{ opacity: 0.5, y: 25 }}
        from={{ opacity: 0, y: 50 }}
        enter={{ opacity: 1, y: 0 }}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="With immediate prop" notes="❌ It should render the `to` right away (opacity: 1 / transformY(0%)).">
      <Transition
        native
        immediate
        from={{ opacity: 0, y: 50 }}
        enter={{ opacity: 1, y: 0 }}
      >
        {() => nativeRender}
      </Transition>
    </Pane>
    <Pane title="Without from" notes="✅ Works as expected">
      <Transition native enter={{ opacity: 1 }}>
        {() => style => <AnimatedDiv style={style} />}
      </Transition>
    </Pane>
    <Pane title="Non-native animation" notes="✅ Works as expected">
      <Transition
        from={{ opacity: 0, transform: "translateY(50%)" }}
        enter={{ opacity: 1, transform: "translateY(0%)" }}
      >
        {() => nonNativeRender}
      </Transition>
    </Pane>
  </div>
);
