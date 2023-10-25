import React from "react";

import { Renderer } from "@vivliostyle/react";

function App() {
  const [page, setPage] = React.useState(1);

  function next() {
    setPage((page) => page + 1);
  }

  function prev() {
    setPage((page) => page - 1);
  }

  function onLoad(state) {
    console.log(state.epageCount, state.docTitle);
  }

  //https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3
  //http://127.0.0.1:5500
  const sample =
    "https://github.com/YunTaoLin/epub_example/";

  return (
    <div>
      <Renderer source={sample} page={page} onLoad={onLoad} bookMode={true}  />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
