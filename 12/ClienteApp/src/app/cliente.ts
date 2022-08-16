import { Funcionario } from "./funcionario";

export interface Cliente {
    nome: string;
    funcionarios: Funcionario[] | string[];
    endereco: string;
    bairro: string;
    cidade: string;
    _id?: string;
}
