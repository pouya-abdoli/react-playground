import LeagueTable from "./LeagueTable";

const ClubsRanking = () => (
  // Main layout container with top/bottom spacing
  <section className="container py-7 lg:py-16">
    <h2 className="text-2xl font-bold mb-4">Club Ranking</h2>
    
    {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Render a reusable table for specific leagues via props */}
      <LeagueTable code="PL" title="Premier League" />
      <LeagueTable code="SA" title="Serie A" />
      <LeagueTable code="PD" title="La Liga" />
      
    </div>
  </section>
);

export default ClubsRanking;