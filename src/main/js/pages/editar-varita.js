const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarVaritaPage = () => {

    const [varita, setVarita] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/varitas/' + id
        }).done(response => {
            setVarita(response.entity);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/varitas/' + id,
            entity: varita,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = "/");
    }


    return (
        <>
            <h1>Editar Varita</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={varita.nombre} onChange={(e)=>setVarita({...varita, nombre: e.target.value})} />
                <input type="submit" value="Editar Varita" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = EditarVaritaPage;