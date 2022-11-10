type MistakesProps = {
  count: number;
};

function Mistakes({count}: MistakesProps) {
  return (
    <div className="game__mistakes">
      {Array.from({length: count}).map((_, index) => {
        const keyValue = `mistake-${index}`;

        return (
          <div key={keyValue} className="wrong"></div>
        );
      })}
    </div>
  );
}

export default Mistakes;
