const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const NuevoAlumnoPage = () => {

    let { id } = useParams();
    const [magos, setMagos] = useState([])
    const [varitas, setVaritas] = useState([])
    const [idMago, setIdMago] = useState('')
    const [idVarita, setIdVarita] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/alumnos',
            entity: {
                casa: 'http://localhost:8080/api/casas/'+id,
                mago: 'http://localhost:8080/api/magos/'+idMago,
                varita: 'http://localhost:8080/api/varitas/'+idVarita},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/magos'
        }).done(response=>{
            let magos2 = [];
            response.entity._embedded.magos.map(mago => {
                magos2.push({value: mago._links.self.href.split('/').slice(-1), label: mago.nombre})
            })
            setMagos(magos2)
        })
        client({
            method: 'GET',
            path: '/api/varitas'
        }).done(response=>{
            let varitas2 = [];
            response.entity._embedded.varitas.map(varita => {
                varitas2.push({value: varita._links.self.href.split('/').slice(-1), label: varita.nombre})
            })
            setVaritas(varitas2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Alumno</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='mago'>Mago</label>
                <select name="mago" id="mago" onChange={(e)=>{setIdMago(e.target.value)}}>
                    {magos.map(mago => {	
                        return (
                            <option key={mago.value} value={mago.value}>{mago.label}</option>
                        )
                    })}
                </select>
                
                <label>Varita</label>
                <select name="varita" id="varita" onChange={(e)=>{setIdVarita(e.target.value)}}>
                    {varitas.map(varita => {	
                        return (
                            <option key={varita.value} value={varita.value}>{varita.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Alumno" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoAlumnoPage;