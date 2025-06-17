import luffy from '../assets/img/Luffy.jpg'

const baseUrl = '../assets/img/'
const person = {
  name: 'Luffy',
  img : {
    name: 'Luffy',
  }
}

function Profile(props){
  let person = props.person
    return (
      <div>
        <img width={person.size} height={person.size} 
        src={luffy} 
            alt={person.name}
          />
          <h2>Name: {person.name}</h2>
      </div>
    )
  }

export default Profile
