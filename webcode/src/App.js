import React, { useEffect, useState } from 'react';
import Loader from './loader';
import Home from './home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Show for 5 seconds
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;

