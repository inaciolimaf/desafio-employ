import { Card } from "./Card";

export function PrecosPage(){
    return (
        <div className="p-4 flex justify-center flex-col bg-backgrond-color">
            <h1 className="font-mont font-semibold text-5xl text-center pt-10">ESCOLHA O PLANO CERTO PRA VOCÊ</h1>
            <div className="pt-16 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col my-7 w-11/12 md:w-1/3 lg:w-1/4 h-96 bg-white text-center border border-solid border-[#9D9D9D] md:border-r-0 rounded-2xl md:rounded-r-none">
                    <Card titulo={"BÁSICO"} preco={"500"} descricao={"✓ Anúncios de vagas em plataformas online.\n✓ Triagem inicial de currículos.\n✓ Agendamento de entrevistas básico."}/>
                </div>
                <div className="flex flex-col relative my-7 w-11/12 md:w-1/3 lg:w-1/4 h-[30rem] bg-white text-center border-4 border-solid border-primary-green rounded-2xl py-12">
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 px-5 font-semibold text-lg bg-primary-green rounded-2xl">MAIS POPULAR</span>
                    <Card titulo={"INTERMEDIÁRIO"} preco={"1500"} descricao={"✓ Todos os serviços do Plano Básico.\n✓ Triagem avançada de currículos.\n✓ Entrevistas por competências.\n✓ Relatório de análise de candidatos."}/>
                </div>
                <div className="flex flex-col my-7 w-11/12 md:w-1/3 lg:w-1/4 h-96 bg-white text-center border border-solid border-[#9D9D9D] md:border-l-0 rounded-2xl md:rounded-l-none">
                    <Card titulo={"PREMIUM"} preco={"1500"} descricao={"✓ Todos os serviços do Plano Intermediário.\n✓ Entrevistas finais com os melhores candidatos.\n✓ Suporte na negociação com o candidato escolhido.\n✓ Garantia de reposição em caso de insucesso na contratação."}/>
                </div>
            </div>
        </div>
    )
}