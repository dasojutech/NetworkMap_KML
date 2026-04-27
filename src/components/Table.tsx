// components/Table.tsx
const Table = () => {
  const data = [
    { name: "Route A", cost: "$233" },
    { name: "Route B", cost: "$87" },
    { name: "Route C", cost: "$72" },
    { name: "Route D", cost: "$55" },
  ];

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} className="table-row">
          <span>{item.name}</span>
          <span>{item.cost}</span>
        </div>
      ))}
    </div>
  );
};

export default Table;