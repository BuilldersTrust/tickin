import "./Card.scss"
 

export default function Card({ headerText, bodyText, icon }) {
    return (
        <div className="card" >
            <div className="card-body">
                <p className="card-title"><img src={icon} alt="card-text"/>{headerText}</p>
                <p className="card-text">{bodyText}</p>
            </div>
        </div>
    );
}
