import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props; //object destructuring de props
  return (
    <div className="card" style={{ width: "450px" }}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      {/**Fragment */}
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </>
  );
}

export default Card;
