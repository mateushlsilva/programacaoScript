export interface LoteriaProps {
    megasena: Props;
    timemania: Props;
    quina: Props;
    setMegasena: Function;
    setTimemania: Function;
    setQuina: Function;
}

export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
}