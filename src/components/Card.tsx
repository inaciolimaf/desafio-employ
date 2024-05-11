type Props = {
    titulo: String,
    preco: String,
    descricao: String,
}

export function Card({titulo, preco, descricao}: Props){
    return (
        <>
            <h2 className="font-semibold font-mont my-2 text-2xl tracking-wider py-4">{titulo}</h2>
            <span className=" text-2xl">R$ {preco}/mês</span>
            <button className="mx-5 my-3 px-16 p-2 rounded-3xl bg-second-green text-lg text-white hover:bg-second-green-hover">SAIBA MAIS</button>
            <p className="whitespace-pre-line text-sm text-left px-4">{descricao}</p>
        </>
    )
}