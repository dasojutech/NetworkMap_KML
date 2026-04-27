// components/Card.tsx
type Props = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Card;