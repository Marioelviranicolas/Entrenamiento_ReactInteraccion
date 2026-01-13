export const Hijo = ({ onIncrementar }) => {
  return (
    <div>
      <button onClick={onIncrementar}>
        Incrementar desde el hijo
      </button>
    </div>
  );
};