import { RouterProvider } from 'react-router-dom';
import  Routes  from "./routes/route"

export default function App() {
  return (
    <div className="App">
     <RouterProvider router={Routes} />
    </div>
  );
}


