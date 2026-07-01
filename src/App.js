import { useState } from "react";

const YT_COLOR="#c0392b",AP_COLOR="#8b5cf6",SP_COLOR="#1db954",OOTB_COLOR="#2563eb";

const YT_MONTHLY=[
  {month:"Apr '25",views:2255,watchHours:206,subs:56},
  {month:"May '25",views:3074,watchHours:348,subs:76},
  {month:"Jun '25",views:2035,watchHours:228,subs:52},
  {month:"Jul '25",views:2522,watchHours:315,subs:71},
  {month:"Aug '25",views:1957,watchHours:231,subs:63},
  {month:"Sep '25",views:2474,watchHours:308,subs:59},
  {month:"Oct '25",views:2746,watchHours:297,subs:46},
  {month:"Nov '25",views:2565,watchHours:354,subs:47},
  {month:"Dec '25",views:2619,watchHours:352,subs:45},
  {month:"Jan '26",views:11115,watchHours:1063,subs:114},
  {month:"Feb '26",views:7869,watchHours:624,subs:64},
  {month:"Mar '26",views:23640,watchHours:600,subs:70},
  {month:"Apr '26",views:18535,watchHours:659,subs:70},
  {month:"May '26",views:23190,watchHours:571,subs:88},
  {month:"Jun '26",views:18203,watchHours:525,subs:58},
];

const YT_TOP=[
  {t:"Virtual Family Office feat. Jim Dew",v:5883,wh:191,ctr:4.26},
  {t:"You Can Start a Family Office With Just $1M?!",v:3544,wh:17,ctr:2.74},
  {t:"Explaining the Oil Shadow Fleet",v:2181,wh:39,ctr:2.93},
  {t:"Truth About Whole Life Insurance - Part 1",v:2151,wh:501,ctr:5.55},
  {t:"Forget Net Worth — $200K Is the Real Freedom Number",v:1726,wh:4,ctr:3.19},
  {t:"This Millionaire's Favorite Investments for 2026",v:1544,wh:3,ctr:3.99},
  {t:"Truth About Whole Life Insurance - Part 2",v:1520,wh:323,ctr:4.47},
  {t:"YOU RAISED HOW MUCH IN 2025?!",v:1364,wh:2,ctr:3.05},
  {t:'"I Promise You Gold Will Crash"',v:1350,wh:3,ctr:6.54},
  {t:"20% of the World's Oil Just Got Cut Off",v:1324,wh:17,ctr:2.49},
];

const APPLE=[
  {month:"Mar '25",plays:1000,listeners:161,hours:95,followers:2800,engaged:99},
  {month:"Apr '25",plays:3600,listeners:572,hours:329,followers:2800,engaged:431},
  {month:"May '25",plays:5000,listeners:614,hours:449,followers:2800,engaged:476},
  {month:"Jun '25",plays:5000,listeners:624,hours:461,followers:2900,engaged:488},
  {month:"Jul '25",plays:6200,listeners:685,hours:583,followers:2900,engaged:575},
  {month:"Aug '25",plays:6800,listeners:772,hours:588,followers:3000,engaged:654},
  {month:"Sep '25",plays:7500,listeners:845,hours:674,followers:3100,engaged:676},
  {month:"Oct '25",plays:6000,listeners:762,hours:568,followers:3200,engaged:615},
  {month:"Nov '25",plays:6600,listeners:788,hours:630,followers:3200,engaged:634},
  {month:"Dec '25",plays:5600,listeners:714,hours:568,followers:3300,engaged:555},
  {month:"Jan '26",plays:7600,listeners:765,hours:835,followers:3300,engaged:610},
  {month:"Feb '26",plays:6200,listeners:717,hours:669,followers:3300,engaged:541},
  {month:"Mar '26",plays:6900,listeners:775,hours:684,followers:3400,engaged:634},
];

const APPLE_TOP=[
  {title:"The Truth About Whole Life Insurance (Part 1)",date:"Jan 6 '26",plays:1763,listeners:424,consumption:73},
  {title:"Is Private Credit About to Collapse?",date:"Mar 10 '26",plays:1651,listeners:411,consumption:77},
  {title:"How to Run a Micro Family Office",date:"Mar 3 '26",plays:1485,listeners:441,consumption:74},
  {title:"[ILAB Classic] Virtual Family Office feat. Jim Dew",date:"Oct 7 '25",plays:1435,listeners:325,consumption:62},
  {title:"Dr. Peter Linneman on AI Myths",date:"Jan 27 '26",plays:1431,listeners:264,consumption:66},
  {title:"How High Earners Beat the Tax Man",date:"Nov 11 '25",plays:1445,listeners:438,consumption:78},
  {title:"The Truth About Whole Life Insurance (Part 2)",date:"Jan 20 '26",plays:1249,listeners:318,consumption:61},
  {title:"Deals We Didn't Do: The $1B ATM Ponzi Scheme",date:"Sep 9 '25",plays:1190,listeners:385,consumption:72},
  {title:"Oil Prices & Venezuela",date:"Jan 13 '26",plays:1208,listeners:375,consumption:75},
  {title:"Deals We Didn't Do: Rise of Pref Equity",date:"Jul 1 '25",plays:1260,listeners:305,consumption:74},
];

const SPOTIFY_MONTHLY=[
  {month:"Mar '25",plays:332},{month:"Apr '25",plays:289},
  {month:"May '25",plays:312},{month:"Jun '25",plays:298},
  {month:"Jul '25",plays:341},{month:"Aug '25",plays:387},
  {month:"Sep '25",plays:412},{month:"Oct '25",plays:445},
  {month:"Nov '25",plays:398},{month:"Dec '25",plays:367},
  {month:"Jan '26",plays:521},{month:"Feb '26",plays:489},
  {month:"Mar '26",plays:502},
];

const SPOTIFY_TOP=[
  {title:"Private Credit Masterclass - Part 2 feat. Anton Mattli",streams:49656,date:"Mar 2024"},
  {title:"Discounted Roth Conversions feat. Keith Blackborg",streams:18581,date:"Mar 2024"},
  {title:"Unveiling the Corporate Transparency Act",streams:17717,date:"Mar 2024"},
  {title:"How to Review a Deal Proforma - Part 1 | Top of Mind",streams:16751,date:"Feb 2024"},
  {title:"Where Did $700B in Maturing CRE Loans Go?",streams:16951,date:"Jan 2024"},
  {title:"Replay: The Wide World Of Passive Real Estate Investing",streams:9658,date:"Mar 2024"},
  {title:"Helicopter Financing 101 feat. Matt Rothschild",streams:8893,date:"Apr 2024"},
  {title:"Intro To Venture Capital & Private Equity Investing",streams:5128,date:"Sep 2021"},
  {title:"Advanced Tax Saving Strategies feat. Keystone CPA",streams:4375,date:"Dec 2023"},
  {title:"Niche Assets: Tax Receivable Agreements feat. Andy Lee",streams:3522,date:"Jan 2024"},
];

const SPOTIFY_Q1=[
  {title:"The Truth About Whole Life Insurance: Experts Debate (Part 1)",date:"Jan 6",streams:1556,videoViewers:130,viewerPct:65.3,watchHours:32,retention:48},
  {title:"Bob Fraser's 2026 Economic Outlook: Investable Megatrends & Market Opportunities",date:"Feb 10",streams:1526,videoViewers:145,viewerPct:68.1,watchHours:57},
  {title:"2026 Macro Outlook Recap & Reaction: Rates, Growth, and Real Estate",date:"Feb 17",streams:1509,videoViewers:150,viewerPct:66.7,watchHours:53},
  {title:"How to Run a Micro Family Office & Manage Your Wealth Like the Ultra-Rich",date:"Mar 3",streams:1486,videoViewers:193,viewerPct:72.0,watchHours:40},
  {title:"Dr. Peter Linneman on AI Myths, the Future of Multifamily & the Shrinking Federal Workforce",date:"Jan 27",streams:1463,videoViewers:148,viewerPct:70.8,watchHours:36},
  {title:"Oil Prices & Venezuela: What Investors Need to Know for 2026",date:"Jan 13",streams:1393,videoViewers:124,viewerPct:59.3,watchHours:32},
  {title:"The Truth About Whole Life Insurance: Experts Debate (Part 2)",date:"Jan 20",streams:1359,videoViewers:130,viewerPct:65.3,watchHours:42},
  {title:"The Billionaire Tax Battle: CA vs. MO (And How to Pay Less)",date:"Feb 3",streams:1306,videoViewers:148,viewerPct:70.8,watchHours:36},
  {title:"Turn Your Network Into a Fund in the Next 30 Days with Tribevest's Seth Bradley",date:"Feb 24",streams:1219,videoViewers:82,viewerPct:65.6,watchHours:29},
  {title:"Oil Just Spiked - Are We Headed for a Recession?",date:"Mar 24",streams:1050,videoViewers:60,viewerPct:56.1,watchHours:16},
];

const PODCAST_Q2_MONTHLY=[
  {month:"Apr '26",plays:8502,audience:4348},
  {month:"May '26",plays:7597,audience:3865},
  {month:"Jun '26",plays:7288,audience:3645},
];

const YT_FLAGSHIP_Q2=[
  {idx:0,title:"Why Serious Investors Never Invest in Their Own Name",date:"Apr 7",views:385,watchHrs:62.9,ctr:3.9,avgDur:"9:48"},
  {idx:1,title:"Roth Conversions: Why Waiting Is Costing You Millions",date:"Apr 14",views:625,watchHrs:135.0,ctr:5.1,avgDur:"12:57"},
  {idx:2,title:"$1 Trillion in Real Estate Is Breaking",date:"Apr 21",views:439,watchHrs:81.0,ctr:4.4,avgDur:"11:04"},
  {idx:3,title:"Why Billionaires Choose Funds Over Single-Asset Deals",date:"Apr 28",views:384,watchHrs:49.5,ctr:5.1,avgDur:"7:43"},
  {idx:4,title:"5 Real Estate Rules That Keep Investors Winning",date:"May 5",views:190,watchHrs:41.1,ctr:4.0,avgDur:"12:58"},
  {idx:5,title:"Tax Mistakes Costing Entrepreneurs Thousands",date:"May 12",views:166,watchHrs:31.7,ctr:4.3,avgDur:"11:28"},
  {idx:6,title:"The Skills That Built Your Wealth Can Destroy It",date:"May 19",views:302,watchHrs:57.6,ctr:3.6,avgDur:"11:24"},
  {idx:7,title:"The Dirty Secret Behind Bourbon",date:"May 26",views:236,watchHrs:33.2,ctr:4.0,avgDur:"8:25"},
  {idx:8,title:"The 2026 Macro Reset",date:"Jun 2",views:323,watchHrs:59.4,ctr:4.6,avgDur:"11:01"},
  {idx:9,title:"Solo 401(k)",date:"Jun 9",views:220,watchHrs:33.7,ctr:4.1,avgDur:"9:10"},
  {idx:10,title:"Don't Waste Your 30s or 40s",date:"Jun 16",views:266,watchHrs:47.3,ctr:4.1,avgDur:"10:44"},
  {idx:11,title:"Why Isn't the Economy Breaking?",date:"Jun 23",views:667,watchHrs:76.5,ctr:6.6,avgDur:"6:50"},
];

const YT_OOTB_Q2=[
  {idx:0,title:"#1 What $100K Actually Does",date:"May 6",views:373,watchHrs:20.1,ctr:4.5,avgDur:"3:14"},
  {idx:1,title:"#2 Your Salary Won't Make You Wealthy",date:"May 21",views:247,watchHrs:19.0,ctr:5.2,avgDur:"4:36"},
  {idx:2,title:"#3 Why Volatility is Destroying Your Wealth",date:"Jun 4",views:202,watchHrs:13.4,ctr:2.9,avgDur:"3:58"},
  {idx:3,title:"#4 The 6 Alternative Investments Billionaires Use",date:"Jun 25",views:199,watchHrs:27.6,ctr:3.7,avgDur:"8:15"},
];

const PODCAST_Q2=[
  {idx:0,title:"Why Serious Investors Never Invest in Their Own Name",date:"Apr 7",plays:1598,audience:1378,consumption:"86h 10m",avg:"22m 12s",avgSec:1332,completion:59,delta:33,impressions:1722},
  {idx:1,title:"Roth Conversions: Why Waiting Is Costing You Millions",date:"Apr 14",plays:1795,audience:1544,consumption:"120h",avg:"24m 36s",avgSec:1476,completion:41,delta:-8,impressions:3134},
  {idx:2,title:"$1 Trillion in Real Estate Is Breaking",date:"Apr 21",plays:1715,audience:1488,consumption:"104h",avg:"22m 48s",avgSec:1368,completion:42,delta:-6,impressions:2126},
  {idx:3,title:"Why Billionaires Choose Funds Over Single-Asset Deals",date:"Apr 28",plays:1753,audience:1535,consumption:"101h",avg:"16m 48s",avgSec:1008,completion:38,delta:-15,impressions:2454},
  {idx:4,title:"5 Real Estate Rules That Keep Investors Winning",date:"May 5",plays:1569,audience:1372,consumption:"82h 46m",avg:"22m 12s",avgSec:1332,completion:44,delta:-1,impressions:2479},
  {idx:5,title:"You Don't Have A Tax Strategy",date:"May 12",plays:1426,audience:1287,consumption:"76h 8m",avg:"24m 36s",avgSec:1476,completion:54,delta:21,impressions:1400},
  {idx:6,title:"The Skills That Built Your Wealth Can Destroy It",date:"May 19",plays:1504,audience:1313,consumption:"95h 7m",avg:"24m",avgSec:1440,completion:40,delta:-10,impressions:1913},
  {idx:7,title:"The Dirty Secret Behind Bourbon",date:"May 26",plays:1298,audience:1196,consumption:"46h 40m",avg:"18m",avgSec:1080,completion:45,delta:1,impressions:1138},
  {idx:8,title:"The 2026 Macro Reset",date:"Jun 2",plays:1435,audience:1292,consumption:"80h 40m",avg:"30m 36s",avgSec:1836,completion:54,delta:21,impressions:1185},
  {idx:9,title:"Solo 401(k)",date:"Jun 9",plays:1206,audience:1111,consumption:"43h 8m",avg:"27m 36s",avgSec:1656,completion:44,delta:-1,impressions:1364},
  {idx:10,title:"Don't Waste Your 30s or 40s",date:"Jun 16",plays:1401,audience:1242,consumption:"103h",avg:"32m 24s",avgSec:1944,completion:52,delta:17,impressions:1328},
  {idx:11,title:"Why Isn't the Economy Breaking?",date:"Jun 23",plays:1048,audience:983,consumption:"41h 10m",avg:"21m",avgSec:1260,completion:52,delta:17,impressions:1317},
];

// ── PLACEHOLDER ARRAYS — populate when data is available ─────────────────────
// Q1 YouTube per-episode. Format: {idx,title,date,views,watchHrs,ctr,avgDur}
const Q1_YT_FLAGSHIP=[];
// Q1 podcast per-episode. Format: {idx,title,date,plays,audience,consumption,avg,avgSec,completion,delta,impressions}
const Q1_PODCAST=[];
// Shorts. Format: {idx,title,date,views,quarter}  quarter="Q1 '26" or "Q2 '26"
const YT_SHORTS=[];

const CROSS_MONTHS=["Apr '25","May '25","Jun '25","Jul '25","Aug '25","Sep '25","Oct '25","Nov '25","Dec '25","Jan '26","Feb '26","Mar '26"];
const appleByMonth=Object.fromEntries(APPLE.map(m=>[m.month,m.plays]));
const spotifyByMonth=Object.fromEntries(SPOTIFY_MONTHLY.map(m=>[m.month,m.plays]));
const ytByMonth=Object.fromEntries(YT_MONTHLY.map(m=>[m.month,m.views]));
const APPLE_TOTAL=APPLE.reduce((a,m)=>a+m.plays,0);
const APPLE_HOURS=APPLE.reduce((a,m)=>a+m.hours,0);
const SPOTIFY_TOTAL=SPOTIFY_MONTHLY.reduce((a,m)=>a+m.plays,0);
const POD_Q2_TOTAL=PODCAST_Q2_MONTHLY.reduce((a,m)=>a+m.plays,0);

function fmt(n){if(n>=1e6)return(n/1e6).toFixed(1)+"M";if(n>=1e3)return(n/1e3).toFixed(1)+"K";return Math.round(n).toLocaleString();}

function MCard({label,value,sub,color}){return(<div style={{background:"#f5f5f5",borderRadius:8,padding:"12px 14px"}}><div style={{fontSize:10,color:"#999",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div><div style={{fontSize:20,fontWeight:600,color:color||"#111"}}>{value}</div>{sub&&<div style={{fontSize:10,color:"#aaa",marginTop:2}}>{sub}</div>}</div>);}

function SimpleBar({labels,values,color,height=180}){const max=Math.max(...values)*1.1||1,W=680,H=height,pad={t:8,r:8,b:28,l:44},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,ticks=[0,1,2,3,4].map(i=>Math.round(max*i/4)),bW=cW/values.length,gap=Math.max(2,bW*0.18);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{ticks.map((t,i)=>{const y=pad.t+cH-(t/max)*cH;return<g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>;})}{values.map((v,i)=>{const bh=Math.max(1,(v/max)*cH),x=pad.l+i*bW+gap/2,y=pad.t+cH-bh;return<g key={i}><rect x={x} y={y} width={bW-gap} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+i*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{labels[i]}</text></g>;})}</svg>);}

function GroupedBar({labels,datasets,height=220}){const max=Math.max(...datasets.flatMap(d=>d.data))*1.1||1,W=680,H=height,pad={t:8,r:8,b:28,l:44},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,ticks=[0,1,2,3,4].map(i=>Math.round(max*i/4)),gW=cW/labels.length,og=Math.max(2,gW*0.12),ig=2,n=datasets.length,bW=(gW-og*2-ig*(n-1))/n;return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{ticks.map((t,i)=>{const y=pad.t+cH-(t/max)*cH;return<g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>})}{labels.map((lbl,gi)=>{const gx=pad.l+gi*gW+og;return<g key={gi}>{datasets.map((ds,di)=>{const v=ds.data[gi]||0,bh=Math.max(1,(v/max)*cH),x=gx+di*(bW+ig),y=pad.t+cH-bh;return<rect key={di} x={x} y={y} width={bW} height={bh} fill={ds.color} rx={2} opacity={0.88}/>;})}<text x={pad.l+gi*gW+gW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{lbl}</text></g>;})}</svg>);}

function StackedBar({labels,datasets,height=220}){const max=Math.max(...labels.map((_,i)=>datasets.reduce((s,d)=>s+(d.data[i]||0),0)))*1.1||1,W=680,H=height,pad={t:8,r:8,b:28,l:44},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,ticks=[0,1,2,3,4].map(i=>Math.round(max*i/4)),bW=cW/labels.length,gap=Math.max(2,bW*0.18);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{ticks.map((t,i)=>{const y=pad.t+cH-(t/max)*cH;return<g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>})}{labels.map((lbl,gi)=>{const x=pad.l+gi*bW+gap/2,bw2=bW-gap;let cumH=0;return<g key={gi}>{datasets.map((ds,di)=>{const v=ds.data[gi]||0,bh=Math.max(0,(v/max)*cH),y=pad.t+cH-cumH-bh;cumH+=bh;return<rect key={di} x={x} y={y} width={bw2} height={bh} fill={ds.color} rx={di===0?2:0}/>;})}<text x={pad.l+gi*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{lbl}</text></g>;})}</svg>);}

function HBar({labels,values,color,height=360}){const max=Math.max(...values)*1.1||1,W=680,H=height,pad={t:8,r:50,b:8,l:220},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,bH=cH/values.length,gap=Math.max(2,bH*0.25);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{values.map((v,i)=>{const bw=Math.max(1,(v/max)*cW),y=pad.t+i*bH+gap/2,bh=bH-gap,lbl=labels[i].length>36?labels[i].slice(0,36)+"…":labels[i];return<g key={i}><text x={pad.l-6} y={y+bh/2+4} textAnchor="end" fontSize={10} fill="#999">{lbl}</text><rect x={pad.l} y={y} width={bw} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+bw+5} y={y+bh/2+4} fontSize={10} fill="#aaa">{fmt(v)}</text></g>;})}</svg>);}

function SparkBar({data,maxVal,color,height=60}){return(<div style={{display:"flex",gap:3,alignItems:"flex-end",height}}>{data.map((v,i)=>{const h=Math.max(3,Math.round((v/maxVal)*height));return<div key={i} style={{flex:1,height:h,background:color,borderRadius:"2px 2px 0 0",opacity:0.85}}/>;})}</div>);}

function DeltaBar({delta}){const abs=Math.abs(delta),max=35,pct=Math.min(abs/max*50,50),color=delta>0?"#22c55e":delta<0?"#ef4444":"#aaa";return(<div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:64,height:4,background:"#e5e7eb",borderRadius:2,position:"relative",flexShrink:0}}><div style={{position:"absolute",left:"calc(50% - 0.5px)",top:0,width:1,height:"100%",background:"#d1d5db"}}/>{delta>0&&<div style={{position:"absolute",left:"50%",top:0,width:`${pct}%`,height:"100%",background:"#22c55e",borderRadius:"0 2px 2px 0"}}/>}{delta<0&&<div style={{position:"absolute",right:"50%",top:0,width:`${pct}%`,height:"100%",background:"#ef4444",borderRadius:"2px 0 0 2px"}}/>}</div><span style={{fontSize:11,color,fontWeight:500,minWidth:32}}>{delta>0?`+${delta}%`:`${delta}%`}</span></div>);}

function CtrPill({ctr}){const color=ctr>=5.0?"#22c55e":ctr>=4.0?"#2563eb":"#888";return<span style={{fontSize:12,color,fontWeight:500}}>{ctr.toFixed(1)}%</span>;}

function PlaceholderCard({message}){return(<div style={{background:"#fafafa",border:"1.5px dashed #e5e7eb",borderRadius:8,padding:"20px 16px",textAlign:"center",color:"#bbb",fontSize:12}}>{message}</div>);}

const card=(bg)=>({background:bg||"#f5f5f5",borderRadius:8,padding:"14px 16px"});
const div0={borderBottom:"0.5px solid #eee"};
const sL=(color)=>({fontSize:10,color:color||"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8,fontWeight:600});

function YTEpisodeTable({data,maxViews}){
  const [sort,setSort]=useState({col:"views",dir:"desc"});
  const toggle=col=>setSort(s=>({col,dir:s.col===col&&s.dir==="desc"?"asc":"desc"}));
  const sorted=[...data].sort((a,b)=>{const v=sort.dir==="asc"?1:-1;if(sort.col==="date")return(a.idx-b.idx)*v;return((a[sort.col]||0)-(b[sort.col]||0))*v;});
  const thS=col=>({textAlign:"left",padding:"7px 10px",fontSize:10,color:sort.col===col?"#111":"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",cursor:"pointer",userSelect:"none",borderBottom:"0.5px solid #eee",whiteSpace:"nowrap",fontWeight:sort.col===col?600:400});
  const tdS={padding:"8px 10px",fontSize:12,borderBottom:"0.5px solid #f5f5f5",verticalAlign:"middle"};
  const arr=col=>sort.col===col?(sort.dir==="desc"?" ↓":" ↑"):"";
  return(<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:540}}><thead><tr><th style={{...thS("title"),minWidth:180}}>Episode</th><th onClick={()=>toggle("date")} style={thS("date")}>Published{arr("date")}</th><th onClick={()=>toggle("views")} style={thS("views")}>Views{arr("views")}</th><th onClick={()=>toggle("watchHrs")} style={thS("watchHrs")}>Watch hrs{arr("watchHrs")}</th><th onClick={()=>toggle("ctr")} style={thS("ctr")}>CTR{arr("ctr")}</th><th style={thS("avgDur")}>Avg duration</th></tr></thead><tbody>{sorted.map((ep,i)=><tr key={i} style={{background:i%2===0?"#fff":"#fafafa"}}><td style={{...tdS,maxWidth:0,minWidth:180}}><span title={ep.title} style={{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ep.title}</span></td><td style={{...tdS,color:"#999"}}>{ep.date}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:36,height:3,background:"#eee",borderRadius:2}}><div style={{width:`${Math.round((ep.views/maxViews)*100)}%`,height:"100%",background:YT_COLOR,borderRadius:2}}/></div><span style={{fontWeight:500}}>{fmt(ep.views)}</span></div></td><td style={{...tdS,color:"#555"}}>{ep.watchHrs.toFixed(1)}h</td><td style={tdS}><CtrPill ctr={ep.ctr}/></td><td style={{...tdS,color:"#999"}}>{ep.avgDur}</td></tr>)}</tbody></table></div>);
}

function PodcastEpisodeTable({data}){
  const [sort,setSort]=useState({col:"plays",dir:"desc"});
  const toggle=col=>setSort(s=>({col,dir:s.col===col&&s.dir==="desc"?"asc":"desc"}));
  const maxPlays=Math.max(...data.map(e=>e.plays));
  const sorted=[...data].sort((a,b)=>{const v=sort.dir==="asc"?1:-1;if(sort.col==="date")return(a.idx-b.idx)*v;const ak=sort.col==="avg"?"avgSec":sort.col;return((a[ak]||0)-(b[ak]||0))*v;});
  const thS=col=>({textAlign:"left",padding:"7px 10px",fontSize:10,color:sort.col===col?"#111":"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",cursor:"pointer",userSelect:"none",borderBottom:"0.5px solid #eee",whiteSpace:"nowrap",fontWeight:sort.col===col?600:400});
  const tdS={padding:"8px 10px",fontSize:12,borderBottom:"0.5px solid #f5f5f5",verticalAlign:"middle"};
  const arr=col=>sort.col===col?(sort.dir==="desc"?" ↓":" ↑"):"";
  return(<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:680}}><thead><tr><th style={{...thS("title"),minWidth:170}}>Episode</th><th onClick={()=>toggle("date")} style={thS("date")}>Published{arr("date")}</th><th onClick={()=>toggle("plays")} style={thS("plays")}>Plays & DL{arr("plays")}</th><th onClick={()=>toggle("audience")} style={thS("audience")}>Audience{arr("audience")}</th><th style={thS("consumption")}>Consumption</th><th onClick={()=>toggle("avg")} style={thS("avg")}>Avg listen{arr("avg")}</th><th onClick={()=>toggle("completion")} style={thS("completion")}>Completion{arr("completion")}</th></tr></thead><tbody>{sorted.map((ep,i)=><tr key={i} style={{background:i%2===0?"#fff":"#fafafa"}}><td style={{...tdS,maxWidth:0,minWidth:170}}><span title={ep.title} style={{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ep.title}</span></td><td style={{...tdS,color:"#999"}}>{ep.date}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:36,height:3,background:"#eee",borderRadius:2}}><div style={{width:`${Math.round((ep.plays/maxPlays)*100)}%`,height:"100%",background:SP_COLOR,borderRadius:2}}/></div><span style={{fontWeight:500}}>{fmt(ep.plays)}</span></div></td><td style={{...tdS,color:"#555"}}>{fmt(ep.audience)}</td><td style={{...tdS,color:"#999"}}>{ep.consumption}</td><td style={{...tdS,color:"#555"}}>{ep.avg}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontWeight:500,minWidth:24}}>{ep.completion}%</span><DeltaBar delta={ep.delta}/></div></td></tr>)}</tbody></table><div style={{marginTop:8,fontSize:11,color:"#bbb"}}>Completion delta = % vs. show's normal episode.</div></div>);
}

function ShortsTable({data}){
  const [sort,setSort]=useState({col:"views",dir:"desc"});
  const toggle=col=>setSort(s=>({col,dir:s.col===col&&s.dir==="desc"?"asc":"desc"}));
  const maxV=Math.max(...data.map(s=>s.views));
  const sorted=[...data].sort((a,b)=>{const v=sort.dir==="asc"?1:-1;if(sort.col==="date")return(a.idx-b.idx)*v;return((a[sort.col]||0)-(b[sort.col]||0))*v;});
  const thS=col=>({textAlign:"left",padding:"7px 10px",fontSize:10,color:sort.col===col?"#111":"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",cursor:"pointer",userSelect:"none",borderBottom:"0.5px solid #eee",whiteSpace:"nowrap",fontWeight:sort.col===col?600:400});
  const tdS={padding:"8px 10px",fontSize:12,borderBottom:"0.5px solid #f5f5f5",verticalAlign:"middle"};
  const arr=col=>sort.col===col?(sort.dir==="desc"?" ↓":" ↑"):"";
  return(<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse"}}><thead><tr><th style={{...thS("title"),minWidth:200}}>Short</th><th onClick={()=>toggle("date")} style={thS("date")}>Published{arr("date")}</th><th onClick={()=>toggle("views")} style={thS("views")}>Views{arr("views")}</th><th style={thS("quarter")}>Quarter</th></tr></thead><tbody>{sorted.map((s,i)=><tr key={i} style={{background:i%2===0?"#fff":"#fafafa"}}><td style={{...tdS,maxWidth:0,minWidth:200}}><span title={s.title} style={{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.title}</span></td><td style={{...tdS,color:"#999"}}>{s.date}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:36,height:3,background:"#eee",borderRadius:2}}><div style={{width:`${Math.round((s.views/maxV)*100)}%`,height:"100%",background:YT_COLOR,borderRadius:2}}/></div><span style={{fontWeight:500}}>{fmt(s.views)}</span></div></td><td style={{...tdS,color:"#999"}}>{s.quarter}</td></tr>)}</tbody></table></div>);
}

function OverviewTab(){
  const ytQ2views=YT_MONTHLY.filter(m=>["Apr '26","May '26","Jun '26"].includes(m.month)).reduce((a,m)=>a+m.views,0);
  return(<div>
    <div style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>All platforms · All time</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      <div style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>YouTube views</div><div style={{fontSize:26,fontWeight:700,color:YT_COLOR}}>291K</div><div style={{fontSize:11,color:"#aaa",marginTop:2}}>15K watch hours · 2,879 subscribers</div></div>
      <div style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>Apple plays (all time)</div><div style={{fontSize:26,fontWeight:700,color:AP_COLOR}}>361K</div><div style={{fontSize:11,color:"#aaa",marginTop:2}}>11K listeners · 30K hrs · 3.4K followers</div></div>
      <div style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>Podcast plays (combined)</div><div style={{fontSize:26,fontWeight:700,color:SP_COLOR}}>{fmt(APPLE_TOTAL+SPOTIFY_TOTAL+POD_Q2_TOTAL)}</div><div style={{fontSize:11,color:"#aaa",marginTop:2}}>Spotify + Apple + all platforms</div></div>
    </div>
    <div style={{...card(),marginBottom:20}}><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>{[["Q2 podcast plays",fmt(POD_Q2_TOTAL),"Apr–Jun 2026"],["Q2 YouTube views",fmt(ytQ2views),"incl. Shorts"],["Avg Q2 completion","47%","vs normal ep."],["Spotify followers","2,282","end of Q2"]].map(([l,v,s])=><div key={l}><div style={{fontSize:10,color:"#aaa",marginBottom:2}}>{l}</div><div style={{fontSize:18,fontWeight:700}}>{v}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{s}</div></div>)}</div></div>
    <div style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Trailing 15 months — monthly trend</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
      {[["YouTube views",YT_COLOR,YT_MONTHLY.map(m=>m.views),Math.max(...YT_MONTHLY.map(m=>m.views)),YT_MONTHLY],["Apple plays (pre-Q2)",AP_COLOR,APPLE.map(m=>m.plays),Math.max(...APPLE.map(m=>m.plays)),APPLE]].map(([label,color,data,maxV,arr])=>(
        <div key={label} style={{...card(),padding:"14px 16px"}}>
          <div style={{fontSize:12,fontWeight:500,marginBottom:10,display:"flex",alignItems:"center",gap:6}}><span style={{width:8,height:8,borderRadius:"50%",background:color,display:"inline-block"}}/>{label}</div>
          <SparkBar data={data} maxVal={maxV} color={color}/>
          <div style={{display:"flex",gap:3,marginTop:4}}>{arr.map(m=><div key={m.month} style={{flex:1,fontSize:7,color:"#bbb",textAlign:"center"}}>{m.month.replace(" '25","").replace(" '26","")}</div>)}</div>
        </div>
      ))}
    </div>
    <div style={card()}><div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Key insights</div><div style={{fontSize:13,color:"#555",lineHeight:1.7}}>The show has accumulated <strong>~291K YouTube views</strong>, <strong>~361K Apple plays</strong>, and <strong>~70K Spotify plays</strong> historically. Q2 2026 added {fmt(ytQ2views)} YouTube views (channel-wide incl. Shorts) and {fmt(POD_Q2_TOTAL)} combined podcast plays. Apple represents ~57% of Q2 podcast plays. Top Q2 YouTube CTR was <span style={{color:YT_COLOR,fontWeight:600}}>6.6%</span> on "Why Isn't the Economy Breaking?" — top performer of the quarter.</div></div>
  </div>);
}

function Q2Tab(){
  const Q2m=["Apr '26","May '26","Jun '26"],ytQ2=YT_MONTHLY.filter(m=>Q2m.includes(m.month));
  const ytQ2views=ytQ2.reduce((a,m)=>a+m.views,0),ytQ2watch=ytQ2.reduce((a,m)=>a+m.watchHours,0),ytQ2subs=ytQ2.reduce((a,m)=>a+m.subs,0);
  const q2Shorts=YT_SHORTS.filter(s=>s.quarter&&s.quarter.includes("Q2"));
  const avgComp=Math.round(PODCAST_Q2.reduce((a,e)=>a+e.completion,0)/PODCAST_Q2.length);
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>Apr – Jun 2026</div>
    <div style={sL(YT_COLOR)}>YouTube channel</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:16}}>
      <MCard label="Total views" value={fmt(ytQ2views)} sub="incl. Shorts" color={YT_COLOR}/>
      <MCard label="Watch hours" value={Math.round(ytQ2watch)+"h"}/>
      <MCard label="New subscribers" value={"+"+ytQ2subs}/>
      <MCard label="Flagship views" value={fmt(YT_FLAGSHIP_Q2.reduce((a,e)=>a+e.views,0))} sub="12 episodes"/>
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>Monthly views</div><SimpleBar labels={ytQ2.map(m=>m.month)} values={ytQ2.map(m=>m.views)} color={YT_COLOR} height={120}/></div>
    <div style={sL(YT_COLOR)}>YouTube — Flagship episodes</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={YT_FLAGSHIP_Q2} maxViews={Math.max(...YT_FLAGSHIP_Q2.map(e=>e.views))}/></div>
    <div style={sL(OOTB_COLOR)}>YouTube — Out of the Box series</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={YT_OOTB_Q2} maxViews={Math.max(...YT_OOTB_Q2.map(e=>e.views))}/></div>
    <div style={sL("#888")}>YouTube — Shorts</div>
    <div style={{marginBottom:16}}>{q2Shorts.length>0?<div style={card()}><ShortsTable data={q2Shorts}/></div>:<PlaceholderCard message="Shorts data coming — add entries to YT_SHORTS with quarter: 'Q2 \'26'"/>}</div>
    <div style={sL(SP_COLOR)}>Podcast — combined Spotify + Apple + all platforms</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:16}}>
      <MCard label="Total plays" value={fmt(POD_Q2_TOTAL)} color={SP_COLOR}/>
      <MCard label="Avg completion" value={avgComp+"%"} sub="vs. normal ep."/>
      <MCard label="Apr plays" value="8,502" sub="best month"/>
      <MCard label="Spotify followers" value="2,213→2,282" sub="+69 in Q2"/>
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>Monthly plays</div><SimpleBar labels={PODCAST_Q2_MONTHLY.map(m=>m.month)} values={PODCAST_Q2_MONTHLY.map(m=>m.plays)} color={SP_COLOR} height={120}/></div>
    <div style={sL(SP_COLOR)}>Podcast — per-episode</div>
    <div style={card()}><PodcastEpisodeTable data={PODCAST_Q2}/></div>
  </div>);
}

function Q1Tab(){
  const Q1=["Jan '26","Feb '26","Mar '26"],Q4=["Oct '25","Nov '25","Dec '25"];
  const ytQ1=Q1.reduce((a,m)=>a+(ytByMonth[m]||0),0),apQ1=Q1.reduce((a,m)=>a+(appleByMonth[m]||0),0),spQ1=Q1.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
  const ytQ4=Q4.reduce((a,m)=>a+(ytByMonth[m]||0),0),apQ4=Q4.reduce((a,m)=>a+(appleByMonth[m]||0),0),spQ4=Q4.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
  const ytQ1wh=YT_MONTHLY.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.watchHours,0);
  const ytQ1sb=YT_MONTHLY.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.subs,0);
  const apQ1hr=APPLE.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.hours,0);
  const apQ1li=APPLE.filter(m=>Q1.includes(m.month)).reduce((a,m)=>a+m.listeners,0);
  const pct=(a,b)=>b===0?"—":(((a-b)/b)*100).toFixed(0)+"%";
  const pc=(a,b)=>a>=b?"#22c55e":"#ef4444";
  const pa=(a,b)=>a>=b?"↑":"↓";
  const q1Shorts=YT_SHORTS.filter(s=>s.quarter&&s.quarter.includes("Q1"));
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>Jan – Mar 2026 · vs Q4 2025</div>
    <div style={sL(YT_COLOR)}>YouTube</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(ytQ1),"Views",ytQ4],[fmt(ytQ1wh)+"h","Watch hours",null],["+"+ytQ1sb,"New subscribers",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?YT_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(ytQ1,q4),marginTop:2}}>{pa(ytQ1,q4)} {pct(ytQ1,q4)} vs Q4</div>}</div>
      ))}
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>YouTube views by month</div><SimpleBar labels={YT_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={YT_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.views)} color={YT_COLOR} height={130}/></div>
    <div style={sL(YT_COLOR)}>YouTube — per-episode</div>
    <div style={{marginBottom:16}}>{Q1_YT_FLAGSHIP.length>0?<div style={card()}><YTEpisodeTable data={Q1_YT_FLAGSHIP} maxViews={Math.max(...Q1_YT_FLAGSHIP.map(e=>e.views))}/></div>:<PlaceholderCard message="Add Q1 YouTube per-episode data to Q1_YT_FLAGSHIP array"/>}</div>
    <div style={sL("#888")}>YouTube — Shorts (Q1)</div>
    <div style={{marginBottom:16}}>{q1Shorts.length>0?<div style={card()}><ShortsTable data={q1Shorts}/></div>:<PlaceholderCard message="Add Q1 Shorts to YT_SHORTS with quarter: 'Q1 \'26'"/>}</div>
    <div style={sL(AP_COLOR)}>Apple Podcasts</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(apQ1),"Plays",apQ4],[fmt(apQ1hr)+"h","Listen hours",null],[fmt(Math.round(apQ1li/3)),"Avg monthly listeners",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?AP_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(apQ1,q4),marginTop:2}}>{pa(apQ1,q4)} {pct(apQ1,q4)} vs Q4</div>}</div>
      ))}
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>Apple plays by month</div><SimpleBar labels={APPLE.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={APPLE.filter(m=>Q1.includes(m.month)).map(m=>m.plays)} color={AP_COLOR} height={130}/></div>
    <div style={sL(SP_COLOR)}>Spotify</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(spQ1),"Plays",spQ4],["521","Best month (Jan '26)",null],[fmt(Math.round(spQ1/3)),"Avg / month",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?SP_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(spQ1,q4),marginTop:2}}>{pa(spQ1,q4)} {pct(spQ1,q4)} vs Q4</div>}</div>
      ))}
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>Spotify plays by month</div><SimpleBar labels={SPOTIFY_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.month)} values={SPOTIFY_MONTHLY.filter(m=>Q1.includes(m.month)).map(m=>m.plays)} color={SP_COLOR} height={130}/></div>
    <div style={sL(SP_COLOR)}>Spotify — top episodes Q1</div>
    <div style={{...card(),marginBottom:16}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,marginBottom:8}}>{["Episode","Streams","Vid Hrs","Vid %"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {SPOTIFY_Q1.map((ep,i)=>(<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,paddingBottom:8,marginBottom:8,...(i<9?div0:{}),alignItems:"center"}}><div><div style={{fontSize:12,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{ep.date}</div></div><div style={{fontSize:12,color:SP_COLOR,textAlign:"right",fontWeight:600}}>{ep.streams.toLocaleString()}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.watchHours}h</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.viewerPct}%</div></div>))}
    </div>
    <div style={sL(AP_COLOR)}>Apple — top episodes Q1</div>
    <div style={{...card(),marginBottom:16}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 56px 72px 60px",gap:4,marginBottom:8}}>{["Episode","Plays","Listeners","Consumed"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {APPLE_TOP.filter(ep=>ep.date.includes("Jan")||ep.date.includes("Feb")||ep.date.includes("Mar '26")).sort((a,b)=>b.plays-a.plays).map((ep,i,arr)=>(<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 56px 72px 60px",gap:4,paddingBottom:8,marginBottom:8,...(i<arr.length-1?div0:{}),alignItems:"center"}}><div><div style={{fontSize:12,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{ep.date}</div></div><div style={{fontSize:12,color:AP_COLOR,textAlign:"right",fontWeight:600}}>{ep.plays.toLocaleString()}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.listeners}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.consumption}%</div></div>))}
    </div>
    <div style={sL(AP_COLOR)}>Podcast — per-episode (Q1)</div>
    <div style={{marginBottom:16}}>{Q1_PODCAST.length>0?<div style={card()}><PodcastEpisodeTable data={Q1_PODCAST}/></div>:<PlaceholderCard message="Add Q1 podcast per-episode data to Q1_PODCAST array"/>}</div>
    <div style={card()}><div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Q1 summary</div><div style={{fontSize:13,color:"#555",lineHeight:1.8}}>YouTube had a <strong>breakout quarter</strong> — {fmt(ytQ1)} views, <span style={{color:pc(ytQ1,ytQ4),fontWeight:600}}>{pa(ytQ1,ytQ4)} {pct(ytQ1,ytQ4)}</span> vs Q4. Apple plays were <span style={{color:pc(apQ1,apQ4),fontWeight:600}}>{pa(apQ1,apQ4)} {pct(apQ1,apQ4)}</span> vs Q4 at {fmt(apQ1)} total. Spotify grew <span style={{color:pc(spQ1,spQ4),fontWeight:600}}>{pa(spQ1,spQ4)} {pct(spQ1,spQ4)}</span> vs Q4 with {fmt(spQ1)} plays.</div></div>
  </div>);
}

function YTDTab(){
  const H1m=["Jan '26","Feb '26","Mar '26","Apr '26","May '26","Jun '26"],Q1m=H1m.slice(0,3),Q2m=H1m.slice(3);
  const ytH1=YT_MONTHLY.filter(m=>H1m.includes(m.month));
  const ytH1v=ytH1.reduce((a,m)=>a+m.views,0),ytH1w=ytH1.reduce((a,m)=>a+m.watchHours,0),ytH1s=ytH1.reduce((a,m)=>a+m.subs,0);
  const ytQ1v=ytH1.filter(m=>Q1m.includes(m.month)).reduce((a,m)=>a+m.views,0);
  const ytQ2v=ytH1.filter(m=>Q2m.includes(m.month)).reduce((a,m)=>a+m.views,0);
  const ytQ1s=ytH1.filter(m=>Q1m.includes(m.month)).reduce((a,m)=>a+m.subs,0);
  const ytQ2s=ytH1.filter(m=>Q2m.includes(m.month)).reduce((a,m)=>a+m.subs,0);
  const podQ1=Q1m.reduce((a,m)=>a+(appleByMonth[m]||0)+(spotifyByMonth[m]||0),0);
  const ch=(a,b)=>b===0?0:Math.round(((a-b)/b)*100);
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>Jan – Jun 2026 · H1 2026</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="YouTube views" value={fmt(ytH1v)} sub="H1 total (incl. Shorts)" color={YT_COLOR}/>
      <MCard label="Watch hours" value={Math.round(ytH1w)+"h"} sub="H1 total"/>
      <MCard label="Podcast plays" value={fmt(podQ1+POD_Q2_TOTAL)} sub="H1 estimate"/>
      <MCard label="New subscribers" value={"+"+ytH1s} sub="H1 total"/>
    </div>
    <div style={{...card(),marginBottom:20}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>YouTube views — Jan to Jun '26</div><SimpleBar labels={ytH1.map(m=>m.month)} values={ytH1.map(m=>m.views)} color={YT_COLOR} height={140}/></div>
    <div style={{...card(),marginBottom:20}}>
      <div style={{fontSize:12,fontWeight:500,marginBottom:14}}>Q1 vs Q2 comparison</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:8}}>
        {[[YT_COLOR,"YouTube views",ytQ1v,ytQ2v],[SP_COLOR,"Podcast plays*",podQ1,POD_Q2_TOTAL],["#111","YT subscribers",ytQ1s,ytQ2s]].map(([color,label,q1,q2])=>{
          const delta=ch(q2,q1);
          return(<div key={label} style={{background:"#fff",borderRadius:8,padding:"10px 12px",border:"1px solid #eee"}}><div style={{fontSize:10,color:"#aaa",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div><div style={{fontSize:11,color:"#aaa"}}>Q1 <span style={{color:"#555",fontWeight:600}}>{fmt(q1)}</span></div><div style={{fontSize:11,color:"#aaa",marginBottom:6}}>Q2 <span style={{color,fontWeight:600}}>{fmt(q2)}</span></div><div style={{fontSize:18,fontWeight:700,color:delta>=0?"#22c55e":"#ef4444"}}>{delta>=0?"↑":"↓"} {Math.abs(delta)}%</div></div>);
        })}
      </div>
      <div style={{fontSize:11,color:"#bbb"}}>*Q1 podcast = Apple + Spotify separately; Q2 = combined all-platform from Spotify for Podcasters</div>
    </div>
    <div style={sL(YT_COLOR)}>Q2 flagship episodes</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={YT_FLAGSHIP_Q2} maxViews={Math.max(...YT_FLAGSHIP_Q2.map(e=>e.views))}/></div>
    <div style={sL(YT_COLOR)}>Q1 flagship episodes</div>
    <div style={{marginBottom:16}}>{Q1_YT_FLAGSHIP.length>0?<div style={card()}><YTEpisodeTable data={Q1_YT_FLAGSHIP} maxViews={Math.max(...Q1_YT_FLAGSHIP.map(e=>e.views))}/></div>:<PlaceholderCard message="Q1 per-episode data coming — add to Q1_YT_FLAGSHIP array"/>}</div>
    <div style={sL(SP_COLOR)}>Q2 podcast episodes</div>
    <div style={{...card(),marginBottom:16}}><PodcastEpisodeTable data={PODCAST_Q2}/></div>
    <div style={sL(SP_COLOR)}>Q1 podcast episodes</div>
    <div>{Q1_PODCAST.length>0?<div style={card()}><PodcastEpisodeTable data={Q1_PODCAST}/></div>:<PlaceholderCard message="Q1 per-episode data coming — add to Q1_PODCAST array"/>}</div>
  </div>);
}

function YouTubeTab(){
  const [ytMetric,setYtMetric]=useState("views");
  const q2S=YT_SHORTS.filter(s=>s.quarter&&s.quarter.includes("Q2"));
  const q1S=YT_SHORTS.filter(s=>s.quarter&&s.quarter.includes("Q1"));
  return(<div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="Views (tracked)" value={fmt(YT_MONTHLY.reduce((a,m)=>a+m.views,0))} color={YT_COLOR} sub="Apr '25–Jun '26"/>
      <MCard label="Watch hrs (tracked)" value={fmt(YT_MONTHLY.reduce((a,m)=>a+m.watchHours,0))+"h"}/>
      <MCard label="Current subscribers" value="2,879" sub="live count"/>
      <MCard label="Q2 CTR (long-form avg)" value="4.0%"/>
    </div>
    <div style={{...card(),marginBottom:20}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <div style={{fontSize:12,fontWeight:500}}>Monthly trend · Apr '25–Jun '26</div>
        <div style={{display:"flex",gap:4}}>{[["views","Views"],["watchHours","Watch Hrs"],["subs","Subs"]].map(([k,l])=><button key={k} onClick={()=>setYtMetric(k)} style={{padding:"4px 10px",fontSize:11,borderRadius:4,border:"1px solid #ddd",background:ytMetric===k?YT_COLOR:"none",color:ytMetric===k?"#fff":"#666",cursor:"pointer"}}>{l}</button>)}</div>
      </div>
      <SimpleBar labels={YT_MONTHLY.map(m=>m.month)} values={YT_MONTHLY.map(m=>m[ytMetric]||0)} color={YT_COLOR} height={160}/>
    </div>
    <div style={sL(YT_COLOR)}>Q2 2026 — Flagship episodes</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={YT_FLAGSHIP_Q2} maxViews={Math.max(...YT_FLAGSHIP_Q2.map(e=>e.views))}/></div>
    <div style={sL(OOTB_COLOR)}>Q2 2026 — Out of the Box series</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={YT_OOTB_Q2} maxViews={Math.max(...YT_OOTB_Q2.map(e=>e.views))}/></div>
    <div style={sL(YT_COLOR)}>Q1 2026 — Flagship episodes</div>
    <div style={{marginBottom:16}}>{Q1_YT_FLAGSHIP.length>0?<div style={card()}><YTEpisodeTable data={Q1_YT_FLAGSHIP} maxViews={Math.max(...Q1_YT_FLAGSHIP.map(e=>e.views))}/></div>:<PlaceholderCard message="Add Q1 YouTube per-episode data to Q1_YT_FLAGSHIP array"/>}</div>
    <div style={sL("#888")}>Shorts — Q2 2026</div>
    <div style={{marginBottom:16}}>{q2S.length>0?<div style={card()}><ShortsTable data={q2S}/></div>:<PlaceholderCard message="Add Q2 Shorts to YT_SHORTS array — format: { idx, title, date, views, quarter: 'Q2 \'26' }"/>}</div>
    <div style={sL("#888")}>Shorts — Q1 2026</div>
    <div style={{marginBottom:20}}>{q1S.length>0?<div style={card()}><ShortsTable data={q1S}/></div>:<PlaceholderCard message="Add Q1 Shorts to YT_SHORTS array — format: { idx, title, date, views, quarter: 'Q1 \'26' }"/>}</div>
    <div style={sL(YT_COLOR)}>All-time top 10 videos by views</div>
    <HBar labels={YT_TOP.map(v=>v.t)} values={YT_TOP.map(v=>v.v)} color={YT_COLOR} height={360}/>
    <div style={{...card(),marginTop:16,marginBottom:12}}>
      <div style={{fontSize:12,fontWeight:500,marginBottom:10}}>Video detail</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 56px 68px 52px",gap:4,marginBottom:6}}>{["Title","Views","Watch Hrs","CTR"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {YT_TOP.map((v,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"1fr 56px 68px 52px",gap:4,paddingBottom:7,marginBottom:7,...(i<9?div0:{}),alignItems:"center"}}><div style={{fontSize:12,lineHeight:1.3}}>{v.t}</div><div style={{fontSize:12,color:YT_COLOR,textAlign:"right",fontWeight:600}}>{fmt(v.v)}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{v.wh}h</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{v.ctr}%</div></div>)}
    </div>
    <div style={card()}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>{[["Top by views","Virtual Family Office · 5,883"],["Top by watch time","Whole Life P1 · 501h"],["Top CTR",'"Gold Will Crash" · 6.54%']].map(([l,v])=><div key={l}><div style={{fontSize:10,color:"#aaa"}}>{l}</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>{v}</div></div>)}</div></div>
  </div>);
}

function PodcastTab(){
  const allPod=[...APPLE.map(m=>({month:m.month,plays:m.plays})),...PODCAST_Q2_MONTHLY.map(m=>({month:m.month,plays:m.plays}))];
  return(<div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="Apple plays (tracked)" value={fmt(APPLE_TOTAL)} color={AP_COLOR} sub="Mar '25–Mar '26"/>
      <MCard label="Listen hours" value={fmt(APPLE_HOURS)+"h"} sub="Apple all time"/>
      <MCard label="Q2 combined plays" value={fmt(POD_Q2_TOTAL)} color={SP_COLOR} sub="All platforms"/>
      <MCard label="Spotify followers" value="2,282" sub="end of Q2"/>
    </div>
    <div style={{...card(),marginBottom:20}}>
      <div style={{fontSize:12,fontWeight:500,marginBottom:4}}>Monthly plays — Mar '25 through Jun '26</div>
      <div style={{fontSize:10,color:"#bbb",marginBottom:10}}>Mar '25–Mar '26 = Apple only · Apr '26–Jun '26 = all-platform combined</div>
      <SimpleBar labels={allPod.map(m=>m.month)} values={allPod.map(m=>m.plays)} color={SP_COLOR} height={180}/>
    </div>
    <div style={sL(SP_COLOR)}>Q2 2026 — per-episode</div>
    <div style={{...card(),marginBottom:20}}><PodcastEpisodeTable data={PODCAST_Q2}/></div>
    <div style={sL(SP_COLOR)}>Q1 2026 — per-episode</div>
    <div style={{marginBottom:20}}>{Q1_PODCAST.length>0?<div style={card()}><PodcastEpisodeTable data={Q1_PODCAST}/></div>:<PlaceholderCard message="Q1 per-episode data coming — add to Q1_PODCAST array"/>}</div>
    <div style={sL(SP_COLOR)}>Spotify — top episodes Q1</div>
    <div style={{...card(),marginBottom:20}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,marginBottom:8}}>{["Episode","Streams","Vid Hrs","Vid %"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {SPOTIFY_Q1.map((ep,i)=>(<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,paddingBottom:8,marginBottom:8,...(i<9?div0:{}),alignItems:"center"}}><div><div style={{fontSize:12,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{ep.date}</div></div><div style={{fontSize:12,color:SP_COLOR,textAlign:"right",fontWeight:600}}>{ep.streams.toLocaleString()}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.watchHours}h</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.viewerPct}%</div></div>))}
    </div>
    <div style={sL(AP_COLOR)}>Apple — top episodes all time</div>
    <div style={card()}>{APPLE_TOP.map((ep,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,paddingBottom:10,...(i<9?div0:{})}}><span style={{fontSize:16,fontWeight:600,color:i<3?AP_COLOR:"#ccc",minWidth:22}}>{i+1}</span><div style={{flex:1}}><div style={{fontSize:13,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:11,color:"#aaa",marginTop:2}}>{ep.date} · {ep.listeners} listeners · {ep.consumption}% avg</div></div><span style={{fontSize:13,fontWeight:600,minWidth:44,textAlign:"right"}}>{fmt(ep.plays)}</span></div>)}</div>
  </div>);
}

function CrossTab(){
  const [crossMetric,setCrossMetric]=useState("combined");
  const overlapYT=CROSS_MONTHS.reduce((a,m)=>a+(ytByMonth[m]||0),0);
  const overlapApple=CROSS_MONTHS.reduce((a,m)=>a+(appleByMonth[m]||0),0);
  const overlapSpot=CROSS_MONTHS.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
  const overlapTotal=overlapYT+overlapApple+overlapSpot;
  const Q4=["Oct '25","Nov '25","Dec '25"],Q1=["Jan '26","Feb '26","Mar '26"];
  const sum=(ms,map)=>ms.reduce((a,m)=>a+(map[m]||0),0);
  const pct=(a,b)=>b===0?0:Math.round(((a-b)/b)*100);
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:12}}>Apr '25–Mar '26 window · separate platform tracking era</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="Total reach" value={fmt(overlapTotal)} sub="Apr '25–Mar '26"/>
      <MCard label="YouTube" value={fmt(overlapYT)} color={YT_COLOR} sub={Math.round(overlapYT/overlapTotal*100)+"%"}/>
      <MCard label="Apple" value={fmt(overlapApple)} color={AP_COLOR} sub={Math.round(overlapApple/overlapTotal*100)+"%"}/>
      <MCard label="Spotify" value={fmt(overlapSpot)} color={SP_COLOR} sub={Math.round(overlapSpot/overlapTotal*100)+"%"}/>
    </div>
    <div style={{...card(),marginBottom:16}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <div style={{fontSize:12,fontWeight:500}}>Monthly plays/views by platform</div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{[["combined","Stacked"],["youtube","YT"],["apple","Apple"],["spotify","Spotify"]].map(([k,l])=><button key={k} onClick={()=>setCrossMetric(k)} style={{padding:"4px 8px",fontSize:10,borderRadius:4,border:"1px solid #ddd",background:crossMetric===k?"#111":"none",color:crossMetric===k?"#fff":"#666",cursor:"pointer"}}>{l}</button>)}</div>
      </div>
      {crossMetric==="combined"&&<><div style={{display:"flex",gap:12,marginBottom:8,fontSize:11}}>{[["YouTube",YT_COLOR],["Apple",AP_COLOR],["Spotify",SP_COLOR]].map(([l,c])=><span key={l} style={{display:"flex",alignItems:"center",gap:4}}><span style={{width:10,height:10,borderRadius:2,background:c,display:"inline-block"}}/><span style={{color:"#555"}}>{l}</span></span>)}</div><StackedBar labels={CROSS_MONTHS} datasets={[{data:CROSS_MONTHS.map(m=>ytByMonth[m]||0),color:YT_COLOR},{data:CROSS_MONTHS.map(m=>appleByMonth[m]||0),color:AP_COLOR},{data:CROSS_MONTHS.map(m=>spotifyByMonth[m]||0),color:SP_COLOR}]} height={220}/></>}
      {crossMetric==="youtube"&&<SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>ytByMonth[m]||0)} color={YT_COLOR} height={220}/>}
      {crossMetric==="apple"&&<SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>appleByMonth[m]||0)} color={AP_COLOR} height={220}/>}
      {crossMetric==="spotify"&&<SimpleBar labels={CROSS_MONTHS} values={CROSS_MONTHS.map(m=>spotifyByMonth[m]||0)} color={SP_COLOR} height={220}/>}
    </div>
    <div style={{...card(),marginBottom:16}}>
      <div style={{fontSize:12,fontWeight:500,marginBottom:14}}>Q4 2025 vs Q1 2026 growth</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
        {[[YT_COLOR,"YouTube Views",sum(Q4,ytByMonth),sum(Q1,ytByMonth)],[AP_COLOR,"Apple Plays",sum(Q4,appleByMonth),sum(Q1,appleByMonth)],[SP_COLOR,"Spotify Plays",sum(Q4,spotifyByMonth),sum(Q1,spotifyByMonth)],["#111","Total Reach",sum(Q4,ytByMonth)+sum(Q4,appleByMonth)+sum(Q4,spotifyByMonth),sum(Q1,ytByMonth)+sum(Q1,appleByMonth)+sum(Q1,spotifyByMonth)]].map(([color,label,q4,q1])=>{
          const ch=pct(q1,q4);
          return(<div key={label} style={{background:"#fff",borderRadius:8,padding:"10px 12px",border:"1px solid #eee"}}><div style={{fontSize:10,color:"#aaa",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div><div style={{fontSize:11,color:"#aaa"}}>Q4 <span style={{color:"#555",fontWeight:600}}>{fmt(q4)}</span></div><div style={{fontSize:11,color:"#aaa",marginBottom:6}}>Q1 <span style={{color,fontWeight:600}}>{fmt(q1)}</span></div><div style={{fontSize:18,fontWeight:700,color:ch>=0?"#22c55e":"#ef4444"}}>{ch>=0?"↑":"↓"} {Math.abs(ch)}%</div></div>);
        })}
      </div>
    </div>
  </div>);
}

const TABS=["Overview","Q2 2026","Q1 2026","Year to Date","YouTube","Podcast","Cross-Platform"];
const PC={YouTube:YT_COLOR,"Apple Podcasts":AP_COLOR,Spotify:SP_COLOR};

export default function App(){
  const [tab,setTab]=useState("Overview");
  return(
    <div style={{padding:"1.25rem 1rem",maxWidth:780,margin:"0 auto",fontFamily:"system-ui,sans-serif",color:"#111"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><h2 style={{margin:"0 0 3px",fontSize:20,fontWeight:600}}>Invest Like a Billionaire</h2><p style={{margin:0,fontSize:12,color:"#999"}}>Analytics Dashboard · Updated Jun 2026</p></div>
        <div style={{display:"flex",gap:12}}>{Object.entries(PC).map(([name,color])=><div key={name} style={{display:"flex",alignItems:"center",gap:5,fontSize:11}}><div style={{width:8,height:8,borderRadius:"50%",background:color}}/><span style={{color:"#666"}}>{name}</span></div>)}</div>
      </div>
      <div style={{display:"flex",gap:2,marginBottom:20,borderBottom:"0.5px solid #e5e5e5",overflowX:"auto"}}>
        {TABS.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"8px 14px",fontSize:12,border:"none",background:"none",cursor:"pointer",whiteSpace:"nowrap",color:tab===t?"#111":"#888",fontWeight:tab===t?600:400,borderBottom:tab===t?"2px solid #111":"2px solid transparent",marginBottom:-1}}>{t}</button>)}
      </div>
      {tab==="Overview"&&<OverviewTab/>}
      {tab==="Q2 2026"&&<Q2Tab/>}
      {tab==="Q1 2026"&&<Q1Tab/>}
      {tab==="Year to Date"&&<YTDTab/>}
      {tab==="YouTube"&&<YouTubeTab/>}
      {tab==="Podcast"&&<PodcastTab/>}
      {tab==="Cross-Platform"&&<CrossTab/>}
    </div>
  );
}
