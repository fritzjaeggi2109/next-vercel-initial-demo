const DarkLayoutCard: React.FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '1rem',
        borderRadius: '6px',
      }}
    >
      {children}
    </div>
  );
};

export default DarkLayoutCard;
