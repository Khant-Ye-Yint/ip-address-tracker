import { useResultStore } from '@/app/lib/store';

const Results = () => {
  const result = useResultStore((state) => state.result);

  return (
    result && (
      <div className="result-container">
        <div className="result-item">
          <span className="result-header">IP ADDRESS</span>
          <span className="result-data">{result.ip}</span>
        </div>
        <span className="stick"></span>
        <div className=" result-item">
          <span className="result-header">LOCATION</span>
          <span className="result-data">{result.location}</span>
        </div>
        <span className="stick"></span>
        <div className="result-item ">
          <span className="result-header">TIMEZONE</span>
          <span className="result-data ">UTC {result.timezone}</span>
        </div>
        <span className="stick"></span>
        <div className="result-item ">
          <span className="result-header">ISP</span>
          <span className="result-data">{result.isp}</span>
        </div>
      </div>
    )
  );
};

export default Results;
