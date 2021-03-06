import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public genero: string
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.genero = genero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public addServicos(servico?: Servico): void{
        if(!servico){
            console.log("Serviço Não Encotrado!");
            
        }
        else{
            this.servicosConsumidos.push(servico)
            console.log('Serviço Adicionado!');
            
        }
        
    }
    public addProduto(produto?: Produto): void{
        if(!produto){
            console.log("Produto Não Encontrado!");
            
        }
        else{
            this.produtosConsumidos.push(produto)
            console.log("Produto Adicionado!");
            
        }
        
    }
    public addTelefone(ddd: string, telefone: string): void{
        const novoTelefone = new Telefone(ddd, telefone)
            this.telefones.push(novoTelefone)
    }
}