import { useState } from "react";


const Coffee_page = () => {

    const [coffee, SetCoffee] = useState([])

    fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => SetCoffee(data))

    return (
        <div>
            <div className="w-10/12 mx-auto">
                {
                    coffee.slice(0, 3).map((item, i) =>
                        <div key={i}>
                            <div className="flex">
                                <div>
                                    <img className="size-48" src={item.url} alt="" />
                                </div>
                                <div className="mt-5">
                                    <h1>Name: {item.name}</h1>
                                    <h1>Test: {item.test}</h1>
                                    <h1>Category: {item.category}</h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Coffee_page;