import './FriendDetails.css';
import { useState } from 'react';

// Container of friend details after click on it 

let FriendDetails = (props) => {
    // This states check which button is clicked on
    const [visibleAbout, setVisibleAbout] = useState(false);
    const [visibleMessages, setVisibleMessages] = useState(false);
    const [visibleContacts, setVisibleContacts] = useState(false);
    // Style variables for each element 
    let messageStyl;
    let aboutStyl;
    let contactsStyl;
    // Setting styles according on which element is active 
    {visibleMessages ? messageStyl = "button__style--chosen" : messageStyl = "button__style"}
    {visibleContacts ? contactsStyl = "button__style--chosen" : contactsStyl = "button__style"}
    {visibleAbout ? aboutStyl = "button__style--chosen" : aboutStyl = "button__style"}
    return (
        <div className='friend__details'>
            <img src={props.image} alt="person image" />
            <div className='friend__details-info'>
                <h1>{props.name} {props.lastName}</h1>
                <div className='friend__details-info__buttons'>
                    {/* Such buttons activate specific one and deactivate others */}
                    <button type='button' onClick={() => {
                        setVisibleAbout(false);
                        setVisibleMessages(true);
                        setVisibleContacts(false);
                    }} className={messageStyl}>Messages</button>
                    <button type='button' onClick={() => {
                        setVisibleAbout(false);
                        setVisibleMessages(false);
                        setVisibleContacts(true);
                    }} className={contactsStyl}>Contacts</button>
                    <button type='button' onClick={() => {
                        setVisibleAbout(true);
                        setVisibleMessages(false);
                        setVisibleContacts(false);
                    }} className={aboutStyl}>About {props.name}</button>
                </div>
                <div className='friend__details-info--show'>
                    {/* Ternary operators check which button is active and 
                    shows information respectively */}
                    {visibleMessages && <div id="messages">
                        <span className='span-styl'>Messages</span>
                        <hr className='max-width-hr' />
                        <h2 className='color-opaque'>You do not have any messages with {props.name}</h2>
                    </div>}
                    {visibleContacts && <div id="contacts">
                        <span className='span-styl'>Contacts</span>
                        <hr className='max-width-hr' />
                        <h2 className='color-opaque' >No contacts to show</h2>
                    </div>}
                    {visibleAbout && <div id="about">
                        <span className='span-styl'>About</span>
                        <hr className='max-width-hr' />
                        <div className='element__container'>
                            <div className='element__container__element'>
                                <p className='bold'>Phone</p>
                                <p className='bold' id="phone">{props.phone}</p>
                            </div>
                            <div className='element__container__element'>
                                <p className='bold'>Adress</p>
                                <p className='bold' id="adress">{props.adress}</p>
                            </div>
                            <div className='element__container__element'>
                                <p className='bold'>Email</p>
                                <p className='bold' id="email">{props.email}</p>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default FriendDetails;