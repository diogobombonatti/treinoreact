import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './src/routes/Home/index.jsx'
import Produtos from './src/routes/Produtos/index.jsx'
import Error from './src/routes/Error/index.jsx'
import EditarProduto from './src/routes/EditarProduto/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto />
      }
    ]
  }
]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
