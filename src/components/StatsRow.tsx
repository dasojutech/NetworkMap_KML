// components/StatsRow.tsx
const StatsRow = () => {
  return (
    <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
      <div className="stat-box green">Network Coverage 100%</div>
      <div className="stat-box blue">Active Routes 3,838</div>
      <div className="stat-box orange">Total Cost $6.0K</div>
      <div className="stat-box purple">Miles Planned 450</div>
    </div>
  );
};

export default StatsRow;