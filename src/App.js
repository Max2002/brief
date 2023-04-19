import { Route, Routes } from 'react-router-dom';
import Form from './sections/Form';
import Results from "./sections/Results";

function App() {
  const styles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Routes style={styles}>
      <Route index element={<Form />} />
      <Route path='/results' element={<Results />} />
    </Routes>
  );
}

export default App;
