import { useState } from "react";

const YT = { views: 65065, watchHours: 4940, subs: 767, impressions: 492412, ctr: 3.3 };

const YT_MONTHLY = [
  { month: "Apr '25", views: 2255, watchHours: 206, subs: 56 },
  { month: "May '25", views: 3074, watchHours: 348, subs: 76 },
  { month: "Jun '25", views: 2035, watchHours: 228, subs: 52 },
  { month: "Jul '25", views: 2522, watchHours: 315, subs: 71 },
  { month: "Aug '25", views: 1957, watchHours: 231, subs: 63 },
  { month: "Sep '25", views: 2474, watchHours: 308, subs: 59 },
  { month: "Oct '25", views: 2746, watchHours: 297, subs: 46 },
  { month: "Nov '25", views: 2565, watchHours: 354, subs: 47 },
  { month: "Dec '25", views: 2619, watchHours: 352, subs: 45 },
  { month: "Jan '26", views: 11115, watchHours: 1063, subs: 114 },
  { month: "Feb '26", views: 7869, watchHours: 624, subs: 64 },
  { month: "Mar '26", views: 23640, watchHours: 600, subs: 70 },
];

const YT_TOP = [
  { t: "Virtual Family Office feat. Jim Dew", v: 5883, wh: 191, ctr: 4.26 },
  { t: "You Can Start a Family Office With Just $1M?!", v: 3544, wh: 17, ctr: 2.74 },
  { t: "Explaining the Oil Shadow Fleet", v: 2181, wh: 39, ctr: 2.93 },
  { t: "Truth About Whole Life Insurance - Part 1", v: 2151, wh: 501, ctr: 5.55 },
  { t: "Forget Net Worth — $200K Is the Real Freedom Number", v: 1726, wh: 4, ctr: 3.19 },
  { t: "This Millionaire's Favorite Investments for 2026", v: 1544, wh: 3, ctr: 3.99 },
  { t: "Truth About Whole Life Insurance - Part 2", v: 1520, wh: 323, ctr: 4.47 },
  { t: "YOU RAISED HOW MUCH IN 2025?!", v: 1364, wh: 2, ctr: 3.05 },
  { t: '"I Promise You Gold Will Crash"', v: 1350, wh: 3, ctr: 6.54 },
  { t: "20% of the World's Oil Just Got Cut Off", v: 1324, wh: 17, ctr: 2.49 },
];

const APPLE = [
  { month: "Mar '25", plays: 1000, listeners: 161, hours: 95, followers: 2800, engaged: 99 },
  { month: "Apr '25", plays: 3600, listeners: 572, hours: 329, followers: 2800, engaged: 431 },
  { month: "May '25", plays: 5000, listeners: 614, hours: 449, followers: 2800, engaged: 476 },
  { month: "Jun '25", plays: 5000, listeners: 624, hours: 461, followers: 2900, engaged: 488 },
  { month: "Jul '25", plays: 6200, listeners: 685, hours: 583, followers: 2900, engaged: 575 },
  { month: "Aug '25", plays: 6800, listeners: 772, hours: 588, followers: 3000, engaged: 654 },
  { month: "Sep '25", plays: 7500, listeners: 845, hours: 674, followers: 3100, engaged: 676 },
  { month: "Oct '25", plays: 6000, listeners: 762, hours: 568, followers: 3200, engaged: 615 },
  { month: "Nov '25", plays: 6600, listeners: 788, hours: 630, followers: 3200, engaged: 634 },
  { month: "Dec '25", plays: 5600, listeners: 714, hours: 568, followers: 3300, engaged: 555 },
  { month: "Jan '26", plays: 7600, listeners: 765, hours: 835, followers: 3300, engaged: 610 },
  { month: "Feb '26", plays: 6200, listeners: 717, hours: 669, followers: 3300, engaged: 541 },
  { month: "Mar '26", plays: 6900, listeners: 775, hours: 684, followers: 3400, engaged: 634 },
];

const APPLE_TOP = [
  { title: "The Truth About Whole Life Insurance (Part 1)", date: "Jan 6 '26", plays: 1763, listeners: 424, consumption: 73 },
  { title: "Is Private Credit About to Collapse?", date: "Mar 10 '26", plays: 1651, listeners: 411, consumption: 77 },
  { title: "How to Run a Micro Family Office", date: "Mar 3 '26", plays: 1485, listeners: 441, consumption: 74 },
  { title: "[ILAB Classic] Virtual Family Office feat. Jim Dew", date: "Oct 7 '25", plays: 1435, listeners: 325, consumption: 62 },
  { title: "Dr. Peter Linneman on AI Myths", date: "Jan 27 '26", plays: 1431, listeners: 264, consumption: 66 },
  { title: "How High Earners Beat the Tax Man", date: "Nov 11 '25", plays: 1445, listeners: 438, consumption: 78 },
  { title: "The Truth About Whole Life Insurance (Part 2)", date: "Jan 20 '26", plays: 1249, listeners: 318, consumption: 61 },
  { title: "Deals We Didn't Do: The $1B ATM Ponzi Scheme", date: "Sep 9 '25", plays: 1190, listeners: 385, consumption: 72 },
  { title: "Oil Prices & Venezuela", date: "Jan 13 '26", plays: 1208, listeners: 375, consumption: 75 },
  { title: "Deals We Didn't Do: Rise of Pref Equity", date: "Jul 1 '25", plays: 1260, listeners: 305, consumption: 74 },
];

const SPOTIFY_MONTHLY = [
  { month: "Mar '25", plays: 332 }, { month: "Apr '25", plays: 289 },
  { month: "May '25", plays: 312 }, { month: "Jun '25", plays: 298 },
  { month: "Jul '25", plays: 341 }, { month: "Aug '25", plays: 387 },
  { month: "Sep '25", plays: 412 }, { month: "Oct '25", plays: 445 },
  { month: "Nov '25", plays: 398 }, { month: "Dec '25", plays: 367 },
  { month: "Jan '26", plays: 521 }, { month: "Feb '26", plays: 489 },
  { month: "Mar '26", plays: 502 },
];

const SPOTIFY_TOP = [
  { title: "Private Credit Masterclass - Part 2 feat. Anton Mattli", streams: 49656, date: "Mar 2024" },
  { title: "Discounted Roth Conversions feat. Keith Blackborg", streams: 18581, date: "Mar 2024" },
  { title: "Unveiling the Corporate Transparency Act", streams: 17717, date: "Mar 2024" },
  { title: "How to Review a Deal Proforma - Part 1 | Top of Mind", streams: 16751, date: "Feb 2024" },
  { title: "Where Did $700B in Maturing CRE Loans Go?", streams: 16951, date: "Jan 2024" },
  { title: "Replay: The Wide World Of Passive Real Estate Investing", streams: 9658, date: "Mar 2024" },
  { title: "Helicopter Financing 101 feat. Matt Rothschild", streams: 8893, date: "Apr 2024" },
  { title: "Intro To Venture Capital & Private Equity Investing", streams: 5128, date: "Sep 2021" },
  { title: "Advanced Tax Saving Strategies feat. Keystone CPA", streams: 4375, date: "Dec 2023" },
  { title: "Niche Assets: Tax Receivable Agreements feat. Andy Lee", streams: 3522, date: "Jan 2024" },
];

const SPOTIFY_Q1 = [
  { title: "The Truth About Whole Life Insurance: Experts Debate (Part 1)", date: "Jan 6", streams: 1556, videoViewers: 130, viewerPct: 65.3, watchHours: 32, retention: 48 },
  { title: "Bob Fraser's 2026 Economic Outlook: Investable Megatrends & Market Opportunities", date: "Feb 10", streams: 1526, videoViewers: 145, viewerPct: 68.1, watchHours: 57, retention: null },
  { title: "2026 Macro Outlook Recap & Reaction: Rates, Growth, and Real Estate", date: "Feb 17", streams: 1509, videoViewers: 150, viewerPct: 66.7, watchHours: 53, retention: null },
  { title: "How to Run a Micro Family Office & Manage Your Wealth Like the Ultra-Rich", date: "Mar 3", streams: 1486, videoViewers: 193, viewerPct: 72.0, watchHours: 40, retention: null },
  { title: "Dr. Peter Linneman on AI Myths, the Future of Multifamily & the Shrinking Federal Workforce", date: "Jan 27", streams: 1463, videoViewers: 148, viewerPct: 70.8, watchHours: 36, retention: null },
  { title: "Oil Prices & Venezuela: What Investors Need to Know for 2026", date: "Jan 13", streams: 1393, videoViewers: 124, viewerPct: 59.3, watchHours: 32, retention: null },
  { title: "The Truth About Whole Life Insurance: Experts Debate (Part 2)", date: "Jan 20", streams: 1359, videoViewers: 130, viewerPct: 65.3, watchHours: 42, retention: null },
  { title: "The Billionaire Tax Battle: CA vs. MO (And How to Pay Less)", date: "Feb 3", streams: 1306, videoViewers: 148, viewerPct: 70.8, watchHours: 36, retention: null },
  { title: "Turn Your Network Into a Fund in the Next 30 Days – with Tribevest's Seth Bradley", date: "Feb 24", streams: 1219, videoViewers: 82, viewerPct: 65.6, watchHours: 29, retention: null },
  { title: "Oil Just Spiked — Are We Headed for a Recession?", date: "Mar 24", streams: 1050, videoViewers: 60, viewerPct: 56.1, watchHours: 16, retention: null },
];

const CROSS_MONTHS = ["Apr '25","May '25","Jun '25","Jul '25","Aug '25","Sep '25","Oct '25","Nov '25","Dec '25","Jan '26","Feb '26","Mar '26"];
const appleByMonth = Object.fromEntries(APPLE.map(m => [m.month, m.plays]));
const spotifyByMonth = Object.fromEntries(SPOTIFY_MONTHLY.map(m => [m.month, m.plays]));
const ytByMonth = Object.fromEntries(YT_MONTHLY.map(m => [m.month, m.views]));

const APPLE_TOTAL = APPLE.reduce((a,m) => a+m.plays, 0);
const APPLE_HOURS = APPLE.reduce((a,m) => a+m.hours, 0);
const SPOTIFY_TOTAL = SPOTIFY_MONTHLY.reduce((a,m) => a+m.plays, 0);

function fmt(n) {
  if (n >= 1e6) return (n/1e6).toFixed(1)+"M";
  if (n >= 1e3) return (n/1e3).toFixed(1)+"K";
  return Math.round(n).toLocaleString();
}

function MCard({ label, value, sub, color }) {
  return (
    <div style={{ background: "#f5f5f5", borderRadius: 8, padding: "12px 14px" }}>
      <div style={{ fontSize: 10, color: "#999", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600, color: color || "#111" }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function SimpleBar({ labels, values, color, height = 180 }) {
  const max = Math.max(...values) * 1.1 || 1;
  const W = 680, H = height;
  const pad = { t: 8, r: 8, b: 28, l: 44 };
  const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;
  const ticks = [0,1,2,3,4].map(i => Math.round(max*i/4));
  const bW = cW / values.length;
  const gap = Math.max(2, bW*0.18);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      {ticks.map((t,i) => {
        const y = pad.t + cH - (t/max)*cH;
        return <g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>;
      })}
      {values.map((v,i) => {
        const bh = Math.max(1,(v/max)*cH);
        const x = pad.l+i*bW+gap/2;
        const y = pad.t+cH-bh;
        return <g key={i}><rect x={x} y={y} width={bW-gap} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+i*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{labels[i]}</text></g>;
      })}
    </svg>
  );
}

function GroupedBar({ labels, datasets, height = 220 }) {
  const max = Math.max(...datasets.flatMap(d => d.data)) * 1.1 || 1;
  const W = 680, H = height;
  const pad = { t: 8, r: 8, b: 28, l: 44 };
  const cW = W-pad.l-pad.r, cH = H-pad.t-pad.b;
  const ticks = [0,1,2,3,4].map(i => Math.round(max*i/4));
  const gW = cW/labels.length, og = Math.max(2,gW*0.12), ig = 2, n = datasets.length;
  const bW = (gW-og*2-ig*(n-1))/n;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      {ticks.map((t,i) => { const y=pad.t+cH-(t/max)*cH; return <g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>; })}
      {labels.map((lbl,gi) => { const gx=pad.l+gi*gW+og; return <g key={gi}>{datasets.map((ds,di) => { const v=ds.data[gi]||0, bh=Math.max(1,(v/max)*cH), x=gx+di*(bW+ig), y=pad.t+cH-bh; return <rect key={di} x={x} y={y} width={bW} height={bh} fill={ds.color} rx={2} opacity={0.88}/>; })}<text x={pad.l+gi*gW+gW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{lbl}</text></g>; })}
    </svg>
  );
}

function StackedBar({ labels, datasets, height = 220 }) {
  const max = Math.max(...labels.map((_,i) => datasets.reduce((s,d) => s+(d.data[i]||0),0)))*1.1||1;
  const W = 680, H = height;
  const pad = { t: 8, r: 8, b: 28, l: 44 };
  const cW = W-pad.l-pad.r, cH = H-pad.t-pad.b;
  const ticks = [0,1,2,3,4].map(i => Math.round(max*i/4));
  const bW = cW/labels.length, gap = Math.max(2,bW*0.18);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      {ticks.map((t,i) => { const y=pad.t+cH-(t/max)*cH; return <g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>; })}
      {labels.map((lbl,gi) => { const x=pad.l+gi*bW+gap/2, bw2=bW-gap; let cumH=0; return <g key={gi}>{datasets.map((ds,di) => { const v=ds.data[gi]||0, bh=Math.max(0,(v/max)*cH), y=pad.t+cH-cumH-bh; cumH+=bh; return <rect key={di} x={x} y={y} width={bw2} height={bh} fill={ds.color} rx={di===0?2:0}/>; })}<text x={pad.l+gi*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{lbl}</text></g>; })}
    </svg>
  );
}

function HBar({ labels, values, color, height = 360 }) {
  const max = Math.max(...values)*1.1||1;
  const W = 680, H = height;
  const pad = { t: 8, r: 50, b: 8, l: 220 };
  const cW = W-pad.l-pad.r, cH = H-pad.t-pad.b;
  const bH = cH/values.length, gap = Math.max(2,bH*0.25);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      {values.map((v,i) => { const bw=Math.max(1,(v/max)*cW), y=pad.t+i*bH+gap/2, bh=bH-gap, lbl=labels[i].length>36?labels[i].slice(0,36)+"…":labels[i]; return <g key={i}><text x={pad.l-6} y={y+bh/2+4} textAnchor="end" fontSize={10} fill="#999">{lbl}</text><rect x={pad.l} y={y} width={bw} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+bw+5} y={y+bh/2+4} fontSize={10} fill="#aaa">{fmt(v)}</text></g>; })}
    </svg>
  );
}

function MiniBar({ data, maxVal, color, height = 60 }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height }}>
      {data.map((v,i) => { const h=Math.max(3,Math.round((v/maxVal)*height)); return <div key={i} style={{ flex:1, height:h, background:color, borderRadius:"2px 2px 0 0", opacity:0.85 }}/>; })}
    </div>
  );
}

const TABS = ["Overview","Q1 2026","YouTube","Apple Podcasts","Spotify","Cross-Platform"];
const PC = { YouTube: "#c0392b", "Apple Podcasts": "#8b5cf6", Spotify: "#1db954" };

export default function App() {
  const [tab, setTab] = useState("Overview");
  const [ytMetric, setYtMetric] = useState("views");
  const [crossMetric, setCrossMetric] = useState("combined");

  const overlapYT = CROSS_MONTHS.reduce((a,m) => a+(ytByMonth[m]||0),0);
  const overlapApple = CROSS_MONTHS.reduce((a,m) => a+(appleByMonth[m]||0),0);
  const overlapSpot = CROSS_MONTHS.reduce((a,m) => a+(spotifyByMonth[m]||0),0);
  const overlapTotal = overlapYT+overlapApple+overlapSpot;
  const card = (bg) => ({ background: bg||"#f5f5f5", borderRadius:8, padding:"14px 16px" });
  const divider = { borderBottom:"0.5px solid #eee" };

  return (
    <div style={{ padding:"1.25rem 1rem", maxWidth:780, margin:"0 auto", fontFamily:"system-ui,sans-serif", color:"#111" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
        <div>
          <h2 style={{ margin:"0 0 3px", fontSize:20, fontWeight:600 }}>Invest Like a Billionaire</h2>
          <p style={{ margin:0, fontSize:12, color:"#999" }}>Analytics Dashboard · Updated Apr 2026</p>
        </div>
        <div style={{ display:"flex", gap:12 }}>
          {Object.entries(PC).map(([name,color]) => (
            <div key={name} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11 }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:color }}/>
              <span style={{ color:"#666" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:"flex", gap:2, marginBottom:20, borderBottom:"0.5px solid #e5e5e5", overflowX:"auto" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding:"8px 14px", fontSize:12, border:"none", background:"none", cursor:"pointer", whiteSpace:"nowrap", color:tab===t?"#111":"#888", fontWeight:tab===t?600:400, borderBottom:tab===t?"2px solid #111":"2px solid transparent", marginBottom:-1 }}>{t}</button>
        ))}
      </div>

      {/* OVERVIEW */}
      {tab==="Overview" && (
        <div>
          <div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>All platforms · All time</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:16 }}>
            <div style={{ ...card() }}>
              <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>YouTube Views</div>
              <div style={{ fontSize:26, fontWeight:700, color:"#c0392b" }}>230.8K</div>
              <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>13.3K watch hours · 2,662 subs</div>
            </div>
            <div style={{ ...card() }}>
              <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>Apple Podcasts Plays</div>
              <div style={{ fontSize:26, fontWeight:700, color:"#8b5cf6" }}>337.9K</div>
              <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>11K listeners · 30.2K hrs · 3.4K followers</div>
            </div>
            <div style={{ ...card() }}>
              <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>Spotify Plays</div>
              <div style={{ fontSize:26, fontWeight:700, color:"#1db954" }}>70.4K</div>
              <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>7,639 hrs consumed · +2,211 followers</div>
            </div>
          </div>
          <div style={{ ...card(), marginBottom:20 }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
              {[["Total reach","639.1K","YouTube + Apple + Spotify"],["Apple engaged listeners","7.8K","all time"],["All-platform streams","447.9K","1,195 avg per episode"],["Apple: follower listen %","77%","of 30.2K total hours"]].map(([l,v,s]) => (
                <div key={l}><div style={{ fontSize:10, color:"#aaa", marginBottom:2 }}>{l}</div><div style={{ fontSize:20, fontWeight:700 }}>{v}</div><div style={{ fontSize:10, color:"#aaa", marginTop:2 }}>{s}</div></div>
              ))}
            </div>
          </div>

          <div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>YouTube · all time</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Views" value="230.8K" color="#c0392b"/>
            <MCard label="Watch time" value="13.3Kh"/>
            <MCard label="Subscribers" value="2,662" sub="current"/>
            <MCard label="Total subs gained" value="+2.7K" sub="all time"/>
          </div>
          <div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Apple Podcasts · all time</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Total plays" value="337.9K" color="#8b5cf6"/>
            <MCard label="Total listeners" value="11.0K"/>
            <MCard label="Engaged listeners" value="7.8K"/>
            <MCard label="Listen hours" value="30.2Kh" sub="77% from followers"/>
          </div>
          <div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Spotify · all time</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Total plays" value="70.4K" color="#1db954"/>
            <MCard label="Consumption hours" value="7,639h"/>
            <MCard label="Followers gained" value="+2,211" sub="all time"/>
            <MCard label="Avg per episode" value="1,195" sub="all platforms"/>
          </div>

          <div style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Trailing 12 months — monthly trend</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
            {[["YouTube views","#c0392b",YT_MONTHLY.map(m=>m.views),Math.max(...YT_MONTHLY.map(m=>m.views))],["Apple Podcasts plays","#8b5cf6",APPLE.map(m=>m.plays),Math.max(...APPLE.map(m=>m.plays))]].map(([label,color,data,maxV]) => (
              <div key={label} style={{ ...card(), padding:"14px 16px" }}>
                <div style={{ fontSize:12, fontWeight:500, marginBottom:10, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ width:8, height:8, borderRadius:"50%", background:color, display:"inline-block" }}/>{label}
                </div>
                <MiniBar data={data} maxVal={maxV} color={color}/>
                <div style={{ display:"flex", gap:3, marginTop:4 }}>
                  {(label==="YouTube views"?YT_MONTHLY:APPLE).map(m => (
                    <div key={m.month} style={{ flex:1, fontSize:7, color:"#bbb", textAlign:"center" }}>{m.month.replace(" '25","").replace(" '26","")}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...card() }}>
            <div style={{ fontSize:12, fontWeight:500, marginBottom:8 }}>Key insights</div>
            <div style={{ fontSize:13, color:"#555", lineHeight:1.7 }}>
              The show has accumulated <strong>337.9K Apple plays</strong>, <strong>230.8K YouTube views</strong>, and <strong>70.4K Spotify plays</strong> — a combined ~639K reach. Apple is the largest platform with 30.2K total listen hours, 77% from followers. YouTube's March 2026 hit <span style={{ color:"#c0392b", fontWeight:600 }}>23.6K views</span> — best month ever. Spotify's all-time spike was the Private Credit Masterclass series in early 2024 (49.7K streams on one episode).
            </div>
          </div>
        </div>
      )}

      {/* Q1 2026 */}
      {tab==="Q1 2026" && (() => {
        const Q1=["Jan '26","Feb '26","Mar '26"], Q4=["Oct '25","Nov '25","Dec '25"];
        const ytQ1=Q1.reduce((a,m)=>a+(ytByMonth[m]||0),0), apQ1=Q1.reduce((a,m)=>a+(appleByMonth[m]||0),0), spQ1=Q1.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
        const ytQ4=Q4.reduce((a,m)=>a+(ytByMonth[m]||0),0), apQ4=Q4.reduce((a,m)=>a+(appleByMonth[m]||0),0), spQ4=Q4.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
        const ytQ1wh=YT_MONTHLY.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.watchHours,0);
        const ytQ1subs=YT_MONTHLY.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.subs,0);
        const apQ1hrs=APPLE.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.hours,0);
        const apQ1listeners=APPLE.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.listeners,0);
        const pct=(a,b)=>b===0?"—":(((a-b)/b)*100).toFixed(0)+"%";
        const pc=(a,b)=>a>=b?"#22c55e":"#ef4444";
        const pa=(a,b)=>a>=b?"↑":"↓";
        return (
          <div>
            <div style={{ fontSize:11, color:"#aaa", marginBottom:16 }}>Jan – Mar 2026 · vs Q4 2025</div>
            <div style={{ fontSize:10, color:"#c0392b", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>YouTube</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:16 }}>
              {[[fmt(ytQ1),"Views",ytQ4],[fmt(ytQ1wh)+"h","Watch Hours",null],["+"+ytQ1subs,"New Subscribers",null]].map(([v,l,q4],i)=>(
                <div key={i} style={{ ...card() }}>
                  <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>{l}</div>
                  <div style={{ fontSize:22, fontWeight:700, color:i===0?"#c0392b":"#111" }}>{v}</div>
                  {q4!==null && <div style={{ fontSize:11, color:pc(ytQ1,q4), marginTop:2 }}>{pa(ytQ1,q4)} {pct(ytQ1,q4)} vs Q4</div>}
                </div>
              ))}
            </div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ fontSize:12, fontWeight:500, marginBottom:10 }}>YouTube views by month</div>
              <SimpleBar labels={YT_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={YT_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.views)} color="#c0392b" height={130}/>
            </div>
            <div style={{ fontSize:10, color:"#8b5cf6", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>Apple Podcasts</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:16 }}>
              {[[fmt(apQ1),"Plays",apQ4],[fmt(apQ1hrs)+"h","Listen Hours",null],[fmt(Math.round(apQ1listeners/3)),"Avg Monthly Listeners",null]].map(([v,l,q4],i)=>(
                <div key={i} style={{ ...card() }}>
                  <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>{l}</div>
                  <div style={{ fontSize:22, fontWeight:700, color:i===0?"#8b5cf6":"#111" }}>{v}</div>
                  {q4!==null && <div style={{ fontSize:11, color:pc(apQ1,q4), marginTop:2 }}>{pa(apQ1,q4)} {pct(apQ1,q4)} vs Q4</div>}
                </div>
              ))}
            </div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ fontSize:12, fontWeight:500, marginBottom:10 }}>Apple plays by month</div>
              <SimpleBar labels={APPLE.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={APPLE.filter(m=>Q1.includes(m.month)).map(m=>m.plays)} color="#8b5cf6" height={130}/>
            </div>
            <div style={{ fontSize:10, color:"#1db954", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>Spotify</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:16 }}>
              {[[fmt(spQ1),"Plays",spQ4],["521","Best Month (Jan '26)",null],[fmt(Math.round(spQ1/3)),"Avg / Month",null]].map(([v,l,q4],i)=>(
                <div key={i} style={{ ...card() }}>
                  <div style={{ fontSize:10, color:"#aaa", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>{l}</div>
                  <div style={{ fontSize:22, fontWeight:700, color:i===0?"#1db954":"#111" }}>{v}</div>
                  {q4!==null && <div style={{ fontSize:11, color:pc(spQ1,q4), marginTop:2 }}>{pa(spQ1,q4)} {pct(spQ1,q4)} vs Q4</div>}
                </div>
              ))}
            </div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ fontSize:12, fontWeight:500, marginBottom:10 }}>Spotify plays by month</div>
              <SimpleBar labels={SPOTIFY_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={SPOTIFY_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.plays)} color="#1db954" height={130}/>
            </div>
            <div style={{ fontSize:10, color:"#1db954", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>Spotify — Top Episodes Q1</div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 64px 56px 52px", gap:4, marginBottom:8 }}>
                {["Episode","Streams","Vid Hrs","Vid %"].map((h,i)=>(
                  <div key={h} style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", textAlign:i>0?"right":"left" }}>{h}</div>
                ))}
              </div>
              {SPOTIFY_Q1.map((ep,i)=>(
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 64px 56px 52px", gap:4, paddingBottom:8, marginBottom:8, ...(i<9?divider:{}), alignItems:"center" }}>
                  <div><div style={{ fontSize:12, lineHeight:1.3 }}>{ep.title}</div><div style={{ fontSize:10, color:"#aaa", marginTop:2 }}>{ep.date}</div></div>
                  <div style={{ fontSize:12, color:"#1db954", textAlign:"right", fontWeight:600 }}>{ep.streams.toLocaleString()}</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{ep.watchHours}h</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{ep.viewerPct}%</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:10, color:"#8b5cf6", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>Apple Podcasts — Top Episodes Q1</div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 56px 72px 60px", gap:4, marginBottom:8 }}>
                {["Episode","Plays","Listeners","Consumed"].map((h,i)=>(
                  <div key={h} style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", textAlign:i>0?"right":"left" }}>{h}</div>
                ))}
              </div>
              {APPLE_TOP.filter(ep=>ep.date.includes("Jan")||ep.date.includes("Feb")||ep.date.includes("Mar '26")).sort((a,b)=>b.plays-a.plays).map((ep,i,arr)=>(
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 56px 72px 60px", gap:4, paddingBottom:8, marginBottom:8, ...(i<arr.length-1?divider:{}), alignItems:"center" }}>
                  <div><div style={{ fontSize:12, lineHeight:1.3 }}>{ep.title}</div><div style={{ fontSize:10, color:"#aaa", marginTop:2 }}>{ep.date}</div></div>
                  <div style={{ fontSize:12, color:"#8b5cf6", textAlign:"right", fontWeight:600 }}>{ep.plays.toLocaleString()}</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{ep.listeners}</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{ep.consumption}%</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:10, color:"#c0392b", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, fontWeight:600 }}>YouTube — Top Videos Q1</div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 56px 68px 52px", gap:4, marginBottom:8 }}>
                {["Video","Views","Watch Hrs","CTR"].map((h,i)=>(
                  <div key={h} style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", textAlign:i>0?"right":"left" }}>{h}</div>
                ))}
              </div>
              {YT_TOP.slice(0,6).map((v,i,arr)=>(
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 56px 68px 52px", gap:4, paddingBottom:8, marginBottom:8, ...(i<arr.length-1?divider:{}), alignItems:"center" }}>
                  <div style={{ fontSize:12, lineHeight:1.3 }}>{v.t}</div>
                  <div style={{ fontSize:12, color:"#c0392b", textAlign:"right", fontWeight:600 }}>{v.v.toLocaleString()}</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{v.wh}h</div>
                  <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{v.ctr}%</div>
                </div>
              ))}
            </div>
            <div style={{ ...card(), marginBottom:16 }}>
              <div style={{ fontSize:12, fontWeight:500, marginBottom:8 }}>Q1 cross-platform insights</div>
              <div style={{ fontSize:13, color:"#555", lineHeight:1.8 }}>
                <strong>Whole Life Insurance dominated Q1 across every platform</strong> — #1 on Spotify (1,556 streams, 48% complete listen rate), #1 & #3 on Apple (1,763 + 1,249 plays), and YouTube's top long-form by watch time (501h + 323h). <strong>Economic/macro content</strong> filled Spotify's top 3. <strong>Oil content</strong> appeared twice in Spotify's top 10 showing consistent conversion. Spotify video viewer rates averaged <span style={{ color:"#1db954", fontWeight:600 }}>~67%</span> across Q1 — a strong engagement signal.
              </div>
            </div>
            <div style={{ ...card() }}>
              <div style={{ fontSize:12, fontWeight:500, marginBottom:8 }}>Q1 summary</div>
              <div style={{ fontSize:13, color:"#555", lineHeight:1.8 }}>
                YouTube had a <strong>breakout quarter</strong> — {fmt(ytQ1)} views, <span style={{ color:pc(ytQ1,ytQ4), fontWeight:600 }}>{pa(ytQ1,ytQ4)} {pct(ytQ1,ytQ4)}</span> vs Q4. Apple plays were <span style={{ color:pc(apQ1,apQ4), fontWeight:600 }}>{pa(apQ1,apQ4)} {pct(apQ1,apQ4)}</span> vs Q4 at {fmt(apQ1)} total. Spotify grew <span style={{ color:pc(spQ1,spQ4), fontWeight:600 }}>{pa(spQ1,spQ4)} {pct(spQ1,spQ4)}</span> vs Q4 with {fmt(spQ1)} plays.
              </div>
            </div>
          </div>
        );
      })()}

      {/* YOUTUBE */}
      {tab==="YouTube" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Views" value={fmt(YT.views)} color="#c0392b"/>
            <MCard label="Watch hrs" value={fmt(YT.watchHours)+"h"}/>
            <MCard label="Subscribers" value={"+"+fmt(YT.subs)}/>
            <MCard label="Impressions" value={fmt(YT.impressions)} sub={YT.ctr+"% CTR"}/>
          </div>
          <div style={{ ...card(), marginBottom:20 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <div style={{ fontSize:12, fontWeight:500 }}>Monthly trend</div>
              <div style={{ display:"flex", gap:4 }}>
                {[["views","Views"],["watchHours","Watch Hrs"],["subs","Subs"]].map(([k,l])=>(
                  <button key={k} onClick={()=>setYtMetric(k)} style={{ padding:"4px 10px", fontSize:11, borderRadius:4, border:"1px solid #ddd", background:ytMetric===k?"#c0392b":"none", color:ytMetric===k?"#fff":"#666", cursor:"pointer" }}>{l}</button>
                ))}
              </div>
            </div>
            <SimpleBar labels={YT_MONTHLY.map(r=>r.month)} values={YT_MONTHLY.map(r=>r[ytMetric]||0)} color={ytMetric==="views"?"#c0392b":ytMetric==="watchHours"?"#e67e22":"#e74c3c"} height={160}/>
          </div>
          <div style={{ fontSize:12, color:"#666", marginBottom:10, fontWeight:500 }}>Top 10 videos by views</div>
          <HBar labels={YT_TOP.map(v=>v.t)} values={YT_TOP.map(v=>v.v)} color="#c0392b" height={360}/>
          <div style={{ ...card(), marginTop:16, marginBottom:12 }}>
            <div style={{ fontSize:12, fontWeight:500, marginBottom:10 }}>Video detail</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 56px 68px 52px", gap:4, marginBottom:6 }}>
              {["Title","Views","Watch Hrs","CTR"].map((h,i)=>(
                <div key={h} style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", textAlign:i>0?"right":"left" }}>{h}</div>
              ))}
            </div>
            {YT_TOP.map((v,i)=>(
              <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 56px 68px 52px", gap:4, paddingBottom:7, marginBottom:7, ...(i<9?divider:{}), alignItems:"center" }}>
                <div style={{ fontSize:12, lineHeight:1.3 }}>{v.t}</div>
                <div style={{ fontSize:12, color:"#c0392b", textAlign:"right", fontWeight:600 }}>{fmt(v.v)}</div>
                <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{v.wh}h</div>
                <div style={{ fontSize:12, color:"#666", textAlign:"right" }}>{v.ctr}%</div>
              </div>
            ))}
          </div>
          <div style={{ ...card() }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
              {[["Top by views","Virtual Family Office · 5,883"],["Top by watch time","Whole Life P1 · 501h"],["Top CTR","Gold Will Crash · 6.54%"]].map(([l,v])=>(
                <div key={l}><div style={{ fontSize:10, color:"#aaa" }}>{l}</div><div style={{ fontSize:14, fontWeight:600, marginTop:2 }}>{v}</div></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* APPLE PODCASTS */}
      {tab==="Apple Podcasts" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Total plays" value={fmt(APPLE_TOTAL)} color="#8b5cf6"/>
            <MCard label="Listen hours" value={fmt(APPLE_HOURS)+"h"}/>
            <MCard label="Followers" value="3.4K" sub="current (+21%)"/>
            <MCard label="Avg consumption" value="71%" sub="per episode"/>
          </div>
          <div style={{ fontSize:12, color:"#666", marginBottom:8 }}>Monthly plays vs unique listeners</div>
          <div style={{ display:"flex", gap:12, marginBottom:10, fontSize:11 }}>
            {[["Plays","#8b5cf6"],["Listeners","#c4b5fd"]].map(([l,c])=>(
              <span key={l} style={{ display:"flex", alignItems:"center", gap:4 }}><span style={{ width:10, height:10, borderRadius:2, background:c, display:"inline-block" }}/>{l}</span>
            ))}
          </div>
          <div style={{ marginBottom:24 }}>
            <GroupedBar labels={APPLE.map(m=>m.month)} datasets={[{data:APPLE.map(m=>m.plays),color:"#8b5cf6"},{data:APPLE.map(m=>m.listeners),color:"#c4b5fd"}]} height={220}/>
          </div>
          <div style={{ fontSize:12, fontWeight:500, color:"#666", marginBottom:10 }}>Top 10 episodes by plays</div>
          {APPLE_TOP.map((ep,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, paddingBottom:10, ...(i<9?divider:{}) }}>
              <span style={{ fontSize:16, fontWeight:600, color:i<3?"#8b5cf6":"#ccc", minWidth:22 }}>{i+1}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, lineHeight:1.3 }}>{ep.title}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>{ep.date} · {ep.listeners} listeners · {ep.consumption}% avg consumption</div>
              </div>
              <span style={{ fontSize:13, fontWeight:600, minWidth:44, textAlign:"right" }}>{fmt(ep.plays)}</span>
            </div>
          ))}
        </div>
      )}

      {/* SPOTIFY */}
      {tab==="Spotify" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="All-time plays" value="70.4K" color="#1db954"/>
            <MCard label="Followers" value="1,803" sub="current"/>
            <MCard label="Consumption hours" value="7,639h" sub="all time"/>
          </div>
          <div style={{ fontSize:12, color:"#666", marginBottom:10 }}>Monthly plays (Mar '25–Mar '26)</div>
          <div style={{ marginBottom:24 }}>
            <SimpleBar labels={SPOTIFY_MONTHLY.map(m=>m.month)} values={SPOTIFY_MONTHLY.map(m=>m.plays)} color="#1db954" height={200}/>
          </div>
          <div style={{ fontSize:12, fontWeight:500, color:"#666", marginBottom:10 }}>Top 10 episodes — all-time streams</div>
          {SPOTIFY_TOP.map((ep,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, paddingBottom:10, ...(i<9?divider:{}) }}>
              <span style={{ fontSize:16, fontWeight:600, color:i<3?"#1db954":"#ccc", minWidth:22 }}>{i+1}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, lineHeight:1.3 }}>{ep.title}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>Published {ep.date}</div>
              </div>
              <span style={{ fontSize:13, fontWeight:600, minWidth:52, textAlign:"right" }}>{fmt(ep.streams)}</span>
            </div>
          ))}
          <div style={{ ...card(), marginTop:8, fontSize:13, color:"#555", lineHeight:1.7 }}>
            Spotify top episodes are <strong>all-time cumulative</strong> — older evergreen content dominates. Private Credit Masterclass Part 2 leads at <span style={{ color:"#1db954", fontWeight:600 }}>49.7K streams</span>. Monthly plays have grown 74% over the trailing year, from 289 in Apr '25 to 502 in Mar '26.
          </div>
        </div>
      )}

      {/* CROSS-PLATFORM */}
      {tab==="Cross-Platform" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
            <MCard label="Total reach" value={fmt(overlapTotal)} sub="Apr '25–Mar '26"/>
            <MCard label="YouTube" value={fmt(overlapYT)} color="#c0392b" sub={Math.round(overlapYT/overlapTotal*100)+"% of total"}/>
            <MCard label="Apple" value={fmt(overlapApple)} color="#8b5cf6" sub={Math.round(overlapApple/overlapTotal*100)+"% of total"}/>
            <MCard label="Spotify" value={fmt(overlapSpot)} color="#1db954" sub={Math.round(overlapSpot/overlapTotal*100)+"% of total"}/>
          </div>
          <div style={{ ...card(), marginBottom:16 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <div style={{ fontSize:12, fontWeight:500 }}>Monthly plays/views by platform</div>
              <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
                {[["combined","Stacked"],["youtube","YT only"],["apple","Apple only"],["spotify","Spotify only"]].map(([k,l])=>(
                  <button key={k} onClick={()=>setCrossMetric(k)} style={{ padding:"4px 8px", fontSize:10, borderRadius:4, border:"1px solid #ddd", background:crossMetric===k?"#111":"none", color:crossMetric===k?"#fff":"#666", cursor:"pointer" }}>{l}</button>
                ))}
              </div>
            </div>
            {crossMetric==="combined" && <>
              <div style={{ display:"flex", gap:12, marginBottom:8, fontSize:11 }}>
                {[["YouTube","#c0392b"],["Apple Podcasts","#8b5cf6"],["Spotify","#1db954"]].map(([l,c])=>(
                  <span key={l} style={{ display:"flex", alignItems:"center", gap:4 }}><span style={{ width:10, height:10, borderRadius:2, background:c, display:"inline-block" }}/><span style={{ color:"#555" }}>{l}</span></span>
                ))}
              </div>
              <StackedBar labels={CROSS_MONTHS} datasets={[{data:CROSS_MONTHS.map(m=>ytByMonth[m]||0),color:"#c0392b"},{data:CROSS_MONTHS.map(m=>appleByMonth[m]||0),color:"#8b5cf6"},{data:CROSS_MONTHS.map(m=>spotifyByMonth[m]||0),color:"#1db954"}]} height={220}/>
            </>}
            {crossMetric==="youtube" && <SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>ytByMonth[m]||0)} color="#c0392b" height={220}/>}
            {crossMetric==="apple" && <SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>appleByMonth[m]||0)} color="#8b5cf6" height={220}/>}
            {crossMetric==="spotify" && <SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>spotifyByMonth[m]||0)} color="#1db954" height={220}/>}
          </div>
          <div style={{ ...card(), marginBottom:16 }}>
            <div style={{ fontSize:12, fontWeight:500, marginBottom:10 }}>Month-by-month breakdown</div>
            <div style={{ display:"grid", gridTemplateColumns:"64px 1fr 1fr 1fr 1fr", gap:4, marginBottom:8 }}>
              {["Month","YouTube","Apple","Spotify","Total"].map((h,i)=>(
                <div key={h} style={{ fontSize:10, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.05em", textAlign:i>0?"right":"left" }}>{h}</div>
              ))}
            </div>
            {CROSS_MONTHS.map(m=>{
              const yt=ytByMonth[m]||0,ap=appleByMonth[m]||0,sp=spotifyByMonth[m]||0,tot=yt+ap+sp;
              return (
                <div key={m} style={{ display:"grid", gridTemplateColumns:"64px 1fr 1fr 1fr 1fr", gap:4, paddingBottom:6, marginBottom:6, ...divider }}>
                  <span style={{ fontSize:12, color:"#666" }}>{m}</span>
                  <span style={{ fontSize:12, color:"#c0392b", textAlign:"right", fontWeight:600 }}>{fmt(yt)}</span>
                  <span style={{ fontSize:12, color:"#8b5cf6", textAlign:"right", fontWeight:600 }}>{fmt(ap)}</span>
                  <span style={{ fontSize:12, color:"#1db954", textAlign:"right", fontWeight:600 }}>{fmt(sp)}</span>
                  <span style={{ fontSize:12, color:"#111", textAlign:"right", fontWeight:600 }}>{fmt(tot)}</span>
                </div>
              );
            })}
          </div>
          {(()=>{
            const Q4=["Oct '25","Nov '25","Dec '25"],Q1=["Jan '26","Feb '26","Mar '26"];
            const sum=(ms,map)=>ms.reduce((a,m)=>a+(map[m]||0),0);
            const pct=(a,b)=>b===0?0:Math.round(((a-b)/b)*100);
            const metrics=[{label:"YouTube Views",color:"#c0392b",q4:sum(Q4,ytByMonth),q1:sum(Q1,ytByMonth)},{label:"Apple Plays",color:"#8b5cf6",q4:sum(Q4,appleByMonth),q1:sum(Q1,appleByMonth)},{label:"Spotify Plays",color:"#1db954",q4:sum(Q4,spotifyByMonth),q1:sum(Q1,spotifyByMonth)}];
            const tQ4=metrics.reduce((a,m)=>a+m.q4,0),tQ1=metrics.reduce((a,m)=>a+m.q1,0);
            const all=[...metrics,{label:"Total Reach",color:"#111",q4:tQ4,q1:tQ1}];
            return (
              <div style={{ ...card(), marginBottom:16 }}>
                <div style={{ fontSize:12, fontWeight:500, marginBottom:14 }}>Q4 2025 vs Q1 2026 growth</div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:16 }}>
                  {all.map(({label,color,q4,q1})=>{
                    const ch=pct(q1,q4);
                    return (
                      <div key={label} style={{ background:"#fff", borderRadius:8, padding:"10px 12px", border:"1px solid #eee" }}>
                        <div style={{ fontSize:10, color:"#aaa", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.05em" }}>{label}</div>
                        <div style={{ fontSize:11, color:"#aaa" }}>Q4 <span style={{ color:"#555", fontWeight:600 }}>{fmt(q4)}</span></div>
                        <div style={{ fontSize:11, color:"#aaa", marginBottom:6 }}>Q1 <span style={{ color, fontWeight:600 }}>{fmt(q1)}</span></div>
                        <div style={{ fontSize:18, fontWeight:700, color:ch>=0?"#22c55e":"#ef4444" }}>{ch>=0?"↑":"↓"} {Math.abs(ch)}%</div>
                      </div>
                    );
                  })}
                </div>
                {metrics.map(({label,color,q4,q1})=>{
                  const mx=Math.max(q4,q1),ch=pct(q1,q4);
                  return (
                    <div key={label} style={{ marginBottom:12 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                        <span style={{ fontSize:12, color:"#555" }}>{label}</span>
                        <span style={{ fontSize:11, color:ch>=0?"#22c55e":"#ef4444", fontWeight:500 }}>{ch>=0?"↑":"↓"} {Math.abs(ch)}% QoQ</span>
                      </div>
                      {[["Q4 '25",q4,0.45],["Q1 '26",q1,1]].map(([ql,val,op])=>(
                        <div key={ql} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                          <span style={{ fontSize:10, color:"#aaa", minWidth:38 }}>{ql}</span>
                          <div style={{ flex:1, height:8, background:"#eee", borderRadius:4, overflow:"hidden" }}>
                            <div style={{ height:"100%", width:`${Math.round((val/mx)*100)}%`, background:color, opacity:op, borderRadius:4 }}/>
                          </div>
                          <span style={{ fontSize:11, fontWeight:500, minWidth:48, textAlign:"right" }}>{fmt(val)}</span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })()}
          <div style={{ ...card() }}>
            <div style={{ fontSize:12, fontWeight:500, marginBottom:8 }}>Cross-platform insights</div>
            <div style={{ fontSize:13, color:"#555", lineHeight:1.7 }}>
              Apple Podcasts drives <strong>{Math.round(overlapApple/overlapTotal*100)}%</strong> of total reach. YouTube contributed <span style={{ color:"#c0392b", fontWeight:600 }}>{Math.round(overlapYT/overlapTotal*100)}%</span> but is growing fast — March 2026 delivered {fmt(23640)} views, <strong>more than any single month on any platform</strong>. Spotify is <strong>{Math.round(overlapSpot/overlapTotal*100)}%</strong> of monthly reach but its all-time catalog shows strong long-tail value with 49.7K streams on one episode.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
