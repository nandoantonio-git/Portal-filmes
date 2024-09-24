import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,BrowserRouter, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',element:<App/>,
    errorElement: <PageNotFound/>,
    children:[
      {index:true,path:'/home',element:<Home/>},
      {path:'movies',element:<MovieListPage/>},
      {path:'movies/:id',element:<MovieDetailPage/>},
      {path:'genero',element:<GenreListPage/>},
      {path:'genero/:id',element:<MoviesByGenrePage/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
