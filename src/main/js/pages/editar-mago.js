const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarMago() {

    const [mago, setMago] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/magos/' + id }).done(response => {
            setMago(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/magos/' + id,
            entity: mago,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Mago</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={mago.nombre} onChange={(e) => setMago({...mago, nombre: e.target.value })} />
                <input type="submit" value="Editar Mago" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarMago;