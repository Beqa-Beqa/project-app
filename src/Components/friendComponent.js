import './friendComponent.css';

// Single friend component from which friend list is created

let FriendComp = (props) => {
    // Checking if last name is too long to fit in component
    let last;
    {(props.name + " " + props.lastName).length > 19 
    ? last = false 
    : last = true}
    let friend = () => {
        props.setFriendDetails({
            name: props.name,
            lastName: props.lastName,
            phone: props.phone,
            adress: props.adress,
            email: props.email,
            imageLarge: props.imageLarge
        });
    }
    return (
        <div onClick={friend} className='friend__container'>
            <img className='friend__container-img' src={props.image} alt="person-image" />
            <span className='friend__container-name'>{props.name} {last ? props.lastName : null}</span>
        </div>
    );
}

export default FriendComp;