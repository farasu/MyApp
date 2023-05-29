import User from "../component/UserList";
import "./Card.css";

function Card() {
  return (
    <div className="card_body">
      <div className="card">
        <User></User>
      </div>
    </div>
  );
}

export default Card;
