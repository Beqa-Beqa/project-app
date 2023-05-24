import './Friends.css';
import FriendComp from '../Components/friendComponent';

// Container for friend components with data about friends

let Friends = (props) => {
    let data = [
      {
        image: props.info[0].picture.medium,
        imageLarge: props.info[0].picture.large,
        name: props.info[0].name.first,
        lastName: props.info[0].name.last,
        phone: props.info[0].phone,
        adress: props.info[0].location.street.name,
        email: props.info[0].email
      },
      {
        image: props.info[1].picture.medium,
        imageLarge: props.info[1].picture.large,
        name: props.info[1].name.first,
        lastName: props.info[1].name.last,
        phone: props.info[1].phone,
        adress: props.info[1].location.street.name,
        email: props.info[1].email
      },
      {
        image: props.info[2].picture.medium,
        imageLarge: props.info[2].picture.large,
        name: props.info[2].name.first,
        lastName: props.info[2].name.last,
        phone: props.info[2].phone,
        adress: props.info[2].location.street.name,
        email: props.info[2].email
      },
      {
        image: props.info[3].picture.medium,
        imageLarge: props.info[3].picture.large,
        name: props.info[3].name.first,
        lastName: props.info[3].name.last,
        phone: props.info[3].phone,
        adress: props.info[3].location.street.name,
        email: props.info[3].email
      },
      {
        image: props.info[4].picture.medium,
        imageLarge: props.info[4].picture.large,
        name: props.info[4].name.first,
        lastName: props.info[4].name.last,
        phone: props.info[4].phone,
        adress: props.info[4].location.street.name,
        email: props.info[4].email
      },
      {
        image: props.info[5].picture.medium,
        imageLarge: props.info[5].picture.large,
        name: props.info[5].name.first,
        lastName: props.info[5].name.last,
        phone: props.info[5].phone,
        adress: props.info[5].location.street.name,
        email: props.info[5].email
      }
    ];
    return (
      // Mapping each person from data to create list of friends
      <div className='friends__container'>
          {data.map((friend, key) => (
            <FriendComp 
              key={key}
              setFriendDetails={props.setFriendDetails}
              image={friend.image}
              name={friend.name}
              lastName={friend.lastName}
              phone={friend.phone}
              adress={friend.adress}
              email={friend.email}
              imageLarge={friend.imageLarge}
            />
          ))}
      </div>
    );
}

export default Friends;