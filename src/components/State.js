import React, {useState} from "react";
import Cities from "./Cities";

const State = ({name, cities}) => {
    const [flag, setflag] = useState(false)
    return (
        <div>
            <div>
                <button onClick={() => setflag(!flag)}>{name}</button>
            </div>
            <div>
                {flag && <div>
                    {cities.map((city, id) => (
                        <div key={id}>
                            <ul>
                                <li><Cities name={city.name} towns={city.towns}/></li>
                            </ul>
                        </div>
                    ))
                    }
                    </div>
                }
            </div>

        </div>
    );
};

export default State;