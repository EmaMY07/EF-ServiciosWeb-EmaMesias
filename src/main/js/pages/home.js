const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { varitas: [], magos: [], casas: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/varitas' }).done(response => {
			this.setState({ varitas: response.entity._embedded.varitas });
		});
		client({ method: 'GET', path: '/api/magos' }).done(response => {
			this.setState({ magos: response.entity._embedded.magos });
		});
		client({ method: 'GET', path: '/api/casas' }).done(response => {
			this.setState({ casas: response.entity._embedded.casas });
		});
	}
	render() {
		return (
			<>
                <h1>Aplicación de Harry Potter</h1>

				<div style={{"width": "100%","display": "flex"}} >

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Varita" />
						<VaritaList varitas={this.state.varitas} />
						<br />
						<Link to="/nuevo-varita">Nueva Varita</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Mago"  />
						<MagoList magos={this.state.magos} />
						<br />
						<Link to="/nuevo-mago">Nuevo Mago</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Casa"  />
						<CasaList casas={this.state.casas} />
						<br />
						<Link to="/nueva-casa">Nueva Casa</Link>
					</div>

				</div>



			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class VaritaList extends React.Component {
	render() {
		const varitas = this.props.varitas.map(varita =>
			<Varita key={varita._links.self.href} varita={varita} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{varitas}
				</tbody>
			</table>
		)
	}
}
class MagoList extends React.Component {
	render() {
		const magos = this.props.magos.map(mago =>
			<Mago key={mago._links.self.href} mago={mago} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{magos}
				</tbody>
			</table>
		)
	}
}
class CasaList extends React.Component {
	render() {
		const casas = this.props.casas.map(casa =>
			<Casa key={casa._links.self.href} casa={casa} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{casas}
				</tbody>
			</table>
		)
	}
}

class Varita extends React.Component {
	render() {
		const id = this.props.varita._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.varita.nombre}</td>
				<td>
					<Link to={'/editar-varita/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Mago extends React.Component {
	render() {
		const id = this.props.mago._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.mago.nombre}</td>
				<td>
					<Link to={`/editar-mago/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Casa extends React.Component {
	render() {
		const id = this.props.casa._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.casa.nombre}</td>
				<td>
					<Link to={`/ver-casa/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;