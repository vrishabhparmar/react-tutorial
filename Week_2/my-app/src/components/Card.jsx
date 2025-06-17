
import Profile from "./Profile"

function Card(props){
    return (
        <div>
            <Profile {...props}/>
        </div>
    )
}

export default Card;