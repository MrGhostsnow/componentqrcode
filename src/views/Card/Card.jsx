import "./Card.css";

function Card() {
  return (
    <div className="container_Home">
      <div className="card_Home">
        <img src="./assets/images/image-qr-code.png" alt="" />
        <p>Improve your front-end skills by building projects</p>
        <span>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
      </div>
    </div>
  );
}

export default Card;
