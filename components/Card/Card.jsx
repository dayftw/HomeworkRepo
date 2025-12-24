import "./styles.css";
import Button from "../Button/Button";

const HomerSimpson = {
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KVg0wE_Q4IQqsq3_ICrbLc2W8oy25VHE6Q&s",
    name:"Homer",
    lastName:"Simpson",
    job:"Nuclear Security",
    hobby:"Beer, TV, Sofa",
    isFunOrNot: true,
};

const getFunOrNot = (isFunOrNot) => {
    if(isFunOrNot) {
        return "Yes!";
    } else {
        return "No!"
    };

}

function SimpsonCard() {
    return ( <div className="wrapperHW02">
        <div className="card">
            <p className="main_info">Card Info</p>
            <img className="avatar" src={HomerSimpson.avatar} alt="Avatar"/>
            <p className="info">Name:{HomerSimpson.name}</p>
            <p className="info">Last Name:{HomerSimpson.lastName}</p>
            <p className="info">Job:{HomerSimpson.job}</p>
            <p className="info">Hobby:{HomerSimpson.hobby}</p>
            <p className="info">Funny?:{getFunOrNot(HomerSimpson.isFunOrNot)}</p>
            <Button/>
        </div>
    </div>
    )
};

export default SimpsonCard;