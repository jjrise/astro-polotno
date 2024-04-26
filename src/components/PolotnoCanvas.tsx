"use client";

import {
  PolotnoContainer,
  SidePanelWrap,
  WorkspaceWrap,
} from "polotno/polotno-app.js";
import { Toolbar } from "polotno/toolbar/toolbar.js";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons.js";
import { SidePanel } from "polotno/side-panel/side-panel.js";
import { Workspace } from "polotno/canvas/workspace.js";

// import css styles from blueprint framework (used by polotno)
// if you bundler doesn't support such import you can use css from CDN (see bellow)
import "@blueprintjs/core/lib/css/blueprint.css";

import { createStore } from "polotno/model/store.js";

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});

store.setSize(1000, 1000);

const PolotnoCanvas = () => {
  return (
    <>
      <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </>
  );
};

export default PolotnoCanvas;
