export default function ProductCard(attributes) {
    return (
        <div>
            <img src={attributes.img}/>
            <h2>{attributes.name}</h2>
            <h3>{attributes.price}</h3>
        </div>
    )
}