import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Spazi Unici"
                    description="Spaces that are more than just a place to sleep." 
                 />
                <Card 
                src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
                title="Esperienze Online"
                description="Spaces that are more than just a place to sleep." 
                 />                
                 <Card 
                 src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                 title="Case Intere"
                 description="Spaces that are more than just a place to sleep." 
                  />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/d7687f49-f936-4f25-a310-ed56b781d03a.jpg?im_w=720"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="€130/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/5400e17c-dd0b-4e30-abbd-ab3632f71939.jpg?im_w=720"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="€350/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/c888c44a-3b8c-47e6-a355-622c72a913fe.jpg?im_w=720"
                    title="1 edroom apartment"
                    description="Full Bedroom accessories for people who want to be free and glamour"
                    price="€500/night"
                />
            </div>
        </div>
    )
}

export default Home
