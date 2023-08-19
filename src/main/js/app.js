const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMago = require('./pages/nuevo-mago');
const PageEditarMago = require('./pages/editar-mago');
const PageEditarVarita = require('./pages/editar-varita');
const PageNuevoVarita = require('./pages/nuevo-varita');
const PageVerCasa = require('./pages/ver-casa');
const PageNuevaCasa = require('./pages/nueva-casa');
const NuevoAlumnoPage = require('./pages/nuevo-alumno');


const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/editar-mago/:id', element: <PageEditarMago /> },
	{ path: '/nuevo-mago', element: <PageNuevoMago /> },
	{ path: '/editar-varita/:id', element: <PageEditarVarita /> },
	{ path: '/nuevo-varita', element: <PageNuevoVarita /> },
	{ path: '/nueva-casa', element: <PageNuevaCasa /> },
	{ path: '/ver-casa/:id', element: <PageVerCasa /> },
	{ path: '/ver-casa/:id/nuevo-alumno', element: <NuevoAlumnoPage /> },

]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)