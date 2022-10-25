import './App.css';

import React, { useState, lazy, Suspense } from 'react';


const LazyloadParentComponent = lazy(() => import('./Component/lazyloadParent'));

function App() {

  const [lazyloadParentTag, setLazyloadParentTag] = useState(0);

  const loadLazyParentBottom = () => {
    setLazyloadParentTag(1);
  }
  
  function loadLazyParentTop() {}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">          
          <h3>Lazy Loading</h3>
          <button onClick={loadLazyParentTop}>Lazy Load Button On Top</button>
          <button onClick={loadLazyParentBottom}>Lazy Load Button On Bottom</button>
          {lazyloadParentTag ? (<Suspense fallback={<>Loading..</>}> <LazyloadParentComponent /> </Suspense>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
