import "./Card.scss"

export default function Card({headerText, bodyText, icon}) {
    return (
        <div className="card" >
            <div class="card-body">
                <h5 class="card-title">{headerText}</h5>
                <p class="card-text">{bodyText}</p>
            </div>
        </div>
    );
}
