import { useParams } from "react-router-dom";
import StatsTable from "../components/StatsTable";

const StatisticsPage = () => {
  const { shortcode } = useParams();

  return (
    <div>
      <h2>Statistics for: {shortcode}</h2>
      <StatsTable shortcode={shortcode} />
    </div>
  );
};

export default StatisticsPage;
