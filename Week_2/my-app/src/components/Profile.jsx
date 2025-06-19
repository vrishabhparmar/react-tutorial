import luffy from '../assets/img/Luffy.jpg'

const baseUrl = '../assets/img/'
const person = {
  name: 'Luffy',
  img : {
    name: 'Luffy',
  }
}

const people = ['Creola Katherine Johnson: mathematician',
'Mario José Molina-Pasquel Henríquez: chemist',
'Mohammad Abdus Salam: physicist',
'Percy Lavon Julian: chemist',
'Subrahmanyan Chandrasekhar: astrophysicist']

const peopleFunc = people.map(val => 
  <div key={val}>
    <img width={100} height={100} 
    src={luffy} 
        alt={person.name}
      />
      <h2>Name: {person.name}</h2>
      <p>{val}</p>
  </div>)

function Profile(props){
  let person = props.person
    return (
      <div>
          {
            peopleFunc
          }
      </div>
      
      
    )
  }

export default Profile
