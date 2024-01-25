import "./Card.scss"
 

export default function Card({ headerText, bodyText, icon }) {
    return (
        <div className="card" >
            <div class="card-body">
                <p class="card-title"><img src={icon} alt="card-text"/>{headerText}</p>
                <p class="card-text">{bodyText}</p>
            </div>
        </div>
    );
}
