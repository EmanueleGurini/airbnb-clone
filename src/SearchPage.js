import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays - 26 august to 30 august - 2 guest
                </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                />
                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                />

                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                />

                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                /> 

                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                />

                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    location="Private Room in center of London"
                    title="Stay at this spacious Edwardian house"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free parking - Washing Machine"
                    star={4.73}
                    price="€30 / night"
                    total="€117 total"
                />
            </div>
        </div>
    )
}

export default SearchPage
