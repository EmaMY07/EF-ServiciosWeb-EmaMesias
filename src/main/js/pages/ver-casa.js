const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerCasaPage = ()=>{

    let {id} = useParams();
    const [casa, setCasa] = useState({});
    const [alumnos, setAlumnos] = useState([]);

    useEffect(()=>{

        const url_casa = '/api/casas/'+id

        client({
            method: 'GET',
            path: url_casa
        }).done((response)=>{setCasa(response.entity);})

        client({
            method: 'GET',
            path: url_casa + '/formacion'
        }).done((response)=>{setAlumnos(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Casa</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{casa.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Alumnos</th>  
                    </tr>
                    <tr>
                        <th>Mago</th>
                        <th>Varita</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map(alumno => {
                        return (
                            <tr key={alumno.ID_ALUMNO}>
                                <td>{alumno.NOMBRE_MAGO}</td>
                                <td>{alumno.NOMBRE_VARITA}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-casa/${id}/nuevo-alumno`}>Nuevo Alumno</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerCasaPage;