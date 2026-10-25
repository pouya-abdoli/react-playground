import { useEffect, useState } from "react";

const LeagueTable = ({ code, title }) => {
  // Store the fetched standings data
  const [rows, setRows] = useState([]);

  // Re-fetch data whenever the league code changes
  useEffect(() => {
    fetch(`/api/v4/competitions/${code}/standings`, {
      headers: { "X-Auth-Token": import.meta.env.VITE_FOOTBALL_TOKEN },
    })
      .then((res) => res.json())
      .then((data) => setRows(data.standings[0].table));
  }, [code]);

  return (
    // Fixed height container with vertical scrolling
    <div className="bg-slate-100 rounded-xl p-5 h-96 overflow-y-auto">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <table className="text-sm w-full">
        <thead>
          <tr className="border-b border-gray-300 text-left">
            <th className="py-2 w-8">#</th>
            <th>Club</th>
            <th className="text-right">Pts</th>
          </tr>
        </thead>

        <tbody>
          {/* Slice data to show only the top 10 teams */}
          {rows.slice(0, 10).map((row) => (
            <tr key={row.team.id} className="border-b border-gray-200">
              <td>{row.position}</td>
              
              {/* Flexbox aligns logo and name; image settings prevent broken hotlinks */}
              <td className="flex items-center gap-2 py-3">
                <img
                  src={row.team.crest}
                  className="w-6 h-6"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {row.team.name}
              </td>
              
              <td className="text-right font-bold">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;