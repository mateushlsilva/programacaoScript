import './valor.css'

function Valor({ valor }: any) {
    return (
        <div className="valorQuina">
            <h2>
                {valor}
            </h2>
        </div>
    )
}

export default Valor
