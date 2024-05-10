type Props = {
    name: String
}

export function ButtonLinkMenu({name}: Props){
    return (
        <button className="hover:text-contrast-green py-2">
            <span>{name}</span>
        </button>
    )
}