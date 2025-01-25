import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LayOut from './LayOut/LayOut';

function App() {

  const Myrout=createBrowserRouter(createRoutesFromElements(
 
    <Route path='/'element={<LayOut/>}>

<Route path='/usersmanager' element={<h2>UsersManager</h2>}/>
<Route path='/adduser' element={<h2>AddUser</h2>}/>

    </Route>
     
  )

)
  return (
<div className="app">
  <RouterProvider router={Myrout}/>
    </div>
  );
}

export default App;
