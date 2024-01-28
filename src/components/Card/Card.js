import './Card.css'

const Card = (props) => {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../../images/${props.item.coverImg}`)} className='card-image' alt='cardImage' />
            <div className='card-stats'>
                <img src={require("../../images/star.png")} className='star' alt='star' />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) •</span>&nbsp;
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'> <span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;

// Practice .map()

/* const names = ["alice", "bob", "charlie", "danielle"]
const Names = names.map(function(item){
    return item[0].toUpperCase() + item.slice(1)
}) */

/* const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const result = pokemon.map((name) =>{
    return `<p>${name}</p>`
}) */