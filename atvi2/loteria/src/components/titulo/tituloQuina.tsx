import './titulo.css'

function Titulo({ titulo }: any) {
    return (
        <div className="tituloQuina">
            <h1>
                {titulo}
            </h1>
        </div>
    )
}

export default Titulo;
