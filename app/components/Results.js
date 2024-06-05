const Results = () => {
  return (
    <div className="result-container">
      <div className="result-item">
        <span className="result-header">IP ADDRESS</span>
        <span className="result-data">192.212.174.101</span>
      </div>
      <span className="stick"></span>
      <div className=" result-item">
        <span className="result-header">LOCATION</span>
        <span className="result-data">Brooklyn, NY 10001</span>
      </div>
      <span className="stick"></span>
      <div className="result-item ">
        <span className="result-header">TIMEZONE</span>
        <span className="result-data ">UTC - 05:00</span>
      </div>
      <span className="stick"></span>
      <div className="result-item ">
        <span className="result-header">ISP</span>
        <span className="result-data">Space X Starlink</span>
      </div>
    </div>
  );
};

export default Results;
