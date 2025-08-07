import React from "react";

const StatsTable = ({ shortcode }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2025-08-07</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2025-08-06</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatsTable;
