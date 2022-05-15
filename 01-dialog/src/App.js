import React, { useState } from 'react';
import './App.css';
import 'animate.css';

// Components
import { ButtonOption } from './components/ui';

// Utils
import Option from './utils/Option';

function App() {

  const [ type, setType ] = useState("");

  return (
    <main>
      <div>
        <ButtonOption setType={setType} />
      </div>
      <div>
        <Option type={type} actionClose={setType} />
      </div>
    </main>
  );
}

export default App;
