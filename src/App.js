
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './component/Layout/Main';
import { routers } from './component/Router/Router';

function App() {
  
  return (
    <div >
    <RouterProvider router={routers}>
      
      </RouterProvider>
    </div>
  );
}

export default App;
