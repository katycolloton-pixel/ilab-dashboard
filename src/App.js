import { useState } from "react";

const YT_COLOR="#c0392b",AP_COLOR="#8b5cf6",SP_COLOR="#1db954",OOTB_COLOR="#2563eb",PRESO_COLOR="#a855f7",REACT_COLOR="#94a3b8";

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

// ── Q1 2026 — YouTube per-episode (23 episodes, Jan 6 – Mar 30) ────────────
// type omitted = flagship "Main" episode
const Q1_YT_FLAGSHIP=[
  {idx:1,title:"Whole Life Insurance Part 1",date:"Jan 6",views:2369,watchHrs:542.7,ctr:5.4,avgDur:"13:44",impressions:23800,subs:25},
  {idx:2,title:"Oil Prices & Venezuela",date:"Jan 13",views:317,watchHrs:58.8,ctr:2.8,avgDur:"11:05",impressions:3300,subs:4},
  {idx:3,title:"Whole Life Insurance Part 2",date:"Jan 20",views:1613,watchHrs:346.9,ctr:4.5,avgDur:"12:54",impressions:21900,subs:20},
  {idx:4,title:"Dr. Peter Linneman on AI Myths",date:"Jan 27",views:503,watchHrs:125.6,ctr:5.6,avgDur:"14:55",impressions:3800,subs:6},
  {idx:5,title:"The Billionaire Tax Battle: CA vs. MO",date:"Feb 3",views:176,watchHrs:26.9,ctr:2.9,avgDur:"9:06",impressions:3100,subs:2},
  {idx:6,title:"Bob Fraser's 2026 Economic Outlook",date:"Feb 10",views:404,watchHrs:60.1,ctr:3.0,avgDur:"8:55",impressions:6700,subs:6},
  {idx:7,title:"Belinda Román: 2026 Macro Outlook",date:"Feb 12",views:242,watchHrs:43.5,ctr:4.3,avgDur:"10:46",impressions:2200,subs:2,type:"Presentation"},
  {idx:8,title:"John Chang: 2026 Economic Outlook",date:"Feb 13",views:153,watchHrs:43.9,ctr:2.2,avgDur:"17:11",impressions:1200,subs:1,type:"Presentation"},
  {idx:9,title:"Jay Parsons: 2026 Rental Housing Forecast",date:"Feb 13",views:203,watchHrs:55.6,ctr:2.2,avgDur:"16:25",impressions:2100,subs:1,type:"Presentation"},
  {idx:10,title:"2026 Macro Outlook Recap & Reaction",date:"Feb 17",views:265,watchHrs:42.5,ctr:3.6,avgDur:"9:36",impressions:3300,subs:1},
  {idx:11,title:"Bob & Ben React: Supply Chain Shift",date:"Feb 23",views:46,watchHrs:0.9,ctr:3.3,avgDur:"1:08",impressions:781,subs:-1,type:"React"},
  {idx:12,title:"Turn Your Network Into a Fund (Tribevest)",date:"Feb 24",views:173,watchHrs:26.7,ctr:3.2,avgDur:"9:15",impressions:1300,subs:2},
  {idx:13,title:"Bob & Ben React: The Consumer Isn't Broke",date:"Feb 25",views:28,watchHrs:0.9,ctr:1.6,avgDur:"2:00",impressions:696,subs:0,type:"React"},
  {idx:14,title:"Bob & Ben React: Why Now Is the Time for Multifamily",date:"Feb 26",views:39,watchHrs:0.8,ctr:2.1,avgDur:"1:15",impressions:1000,subs:1,type:"React"},
  {idx:15,title:"Bob & Ben React: Reshoring, Labor Shortages & GDP",date:"Feb 27",views:20,watchHrs:0.4,ctr:1.4,avgDur:"1:10",impressions:908,subs:1,type:"React"},
  {idx:16,title:"Bob & Ben React: Oversupply Creates Multifamily Opportunities",date:"Mar 1",views:30,watchHrs:0.7,ctr:2.3,avgDur:"1:27",impressions:926,subs:0,type:"React"},
  {idx:17,title:"Ben & Bob React: 3.9% GDP Growth Ahead — Belinda Román",date:"Mar 2",views:35,watchHrs:0.5,ctr:2.0,avgDur:"0:56",impressions:1100,subs:0,type:"React"},
  {idx:18,title:"How to Run a Micro Family Office",date:"Mar 3",views:2994,watchHrs:327.2,ctr:3.8,avgDur:"6:33",impressions:48600,subs:57},
  {idx:19,title:"Are We Talking Ourselves Into a Recession?",date:"Mar 5",views:60,watchHrs:0.8,ctr:2.4,avgDur:"0:46",impressions:1600,subs:0,type:"Presentation"},
  {idx:20,title:"Is Private Credit About to Collapse? ($1.7T at Risk)",date:"Mar 10",views:288,watchHrs:61.1,ctr:4.3,avgDur:"12:44",impressions:2200,subs:2},
  {idx:21,title:"PPMs That Scare the Sh*t Out of Me",date:"Mar 17",views:252,watchHrs:44.4,ctr:3.8,avgDur:"10:34",impressions:2000,subs:1},
  {idx:22,title:"Oil Just Spiked — Are We Headed for a Recession?",date:"Mar 24",views:251,watchHrs:39.6,ctr:2.7,avgDur:"9:28",impressions:3600,subs:0},
  {idx:23,title:"What 10,000 High-Net-Worth Investors Are Actually Doing",date:"Mar 30",views:323,watchHrs:78.9,ctr:4.6,avgDur:"14:39",impressions:3200,subs:1},
];

// ── Q1 2026 — Podcast per-episode (12 of 23 collected so far; combined Spotify + Apple) ─
// Still missing: episodes 7, 8, 9, 11, 13–17, 19 (Presentation / React content)
const Q1_PODCAST=[
  {idx:1,title:"Whole Life Insurance Part 1",date:"Jan 6",plays:1797,audience:1468,consumption:"167h",avg:"32m 24s",avgSec:1944,completion:56,delta:26,streams:1670},
  {idx:2,title:"Oil Prices & Venezuela",date:"Jan 13",plays:1601,audience:1412,consumption:"79h 47m",avg:"15m 36s",avgSec:936,completion:55,delta:24,streams:1431},
  {idx:3,title:"Whole Life Insurance Part 2",date:"Jan 20",plays:1600,audience:1374,consumption:"96h 48m",avg:"18m 36s",avgSec:1116,completion:24,delta:-46,streams:1414},
  {idx:4,title:"Dr. Peter Linneman on AI Myths",date:"Jan 27",plays:1738,audience:1464,consumption:"132h",avg:"25m 48s",avgSec:1548,completion:36,delta:-19,streams:1551},
  {idx:5,title:"The Billionaire Tax Battle: CA vs. MO",date:"Feb 3",plays:1611,audience:1404,consumption:"71h 48m",avg:"11m 24s",avgSec:684,completion:24,delta:-46,streams:1339},
  {idx:6,title:"Bob Fraser's 2026 Economic Outlook",date:"Feb 10",plays:1748,audience:1495,consumption:"108h",avg:"21m 36s",avgSec:1296,completion:47,delta:6,streams:1585},
  {idx:10,title:"2026 Macro Outlook Recap & Reaction",date:"Feb 17",plays:1775,audience:1500,consumption:"89h 11m",avg:"15m 36s",avgSec:936,completion:30,delta:-33,streams:1556},
  {idx:12,title:"Turn Your Network Into a Fund (Tribevest)",date:"Feb 24",plays:1410,audience:1219,consumption:"67h 21m",avg:"22m 12s",avgSec:1332,completion:40,delta:-10,streams:1292},
  {idx:20,title:"Is Private Credit About to Collapse? ($1.7T at Risk)",date:"Mar 10",plays:1721,audience:1467,consumption:"118h",avg:"21m",avgSec:1260,completion:53,delta:19,streams:1579},
  {idx:21,title:"PPMs That Scare the Sh*t Out of Me",date:"Mar 17",plays:1445,audience:1271,consumption:"61h 12m",avg:"20m 24s",avgSec:1224,completion:57,delta:28,streams:1370},
  {idx:22,title:"Oil Just Spiked — Are We Headed for a Recession?",date:"Mar 24",plays:1334,audience:1202,consumption:"46h 26m",avg:"16m 12s",avgSec:972,completion:64,delta:44,streams:1261},
  {idx:23,title:"What 10,000 High-Net-Worth Investors Are Actually Doing",date:"Mar 30",plays:1811,audience:1515,consumption:"118h",avg:"27m",avgSec:1620,completion:50,delta:12,streams:1684},
];

// ── Shorts. Format: {idx,title,date,views,watchHrs,impressions,ctr,quarter} ─
// Q1 2026 complete (34 shorts, Jan–Mar). Q2 2026 not yet collected.
const YT_SHORTS=[
  {idx:1,title:"Life Insurance As a Bond Alternative",date:"Jan 7",views:6,watchHrs:0.04,impressions:79,ctr:2.53,quarter:"Q1 '26"},
  {idx:2,title:"How Billionaires Shop For Insurance",date:"Jan 8",views:2,watchHrs:0.02,impressions:49,ctr:4.08,quarter:"Q1 '26"},
  {idx:3,title:"Explaining the Oil Shadow Fleet",date:"Jan 14",views:28,watchHrs:0.61,impressions:377,ctr:2.92,quarter:"Q1 '26"},
  {idx:4,title:"Why Infinite Banking Isn't Like Owning a Bank",date:"Jan 22",views:1,watchHrs:0.02,impressions:31,ctr:3.23,quarter:"Q1 '26"},
  {idx:5,title:"The Bad Math Behind Infinite Banking Pitches",date:"Jan 23",views:1,watchHrs:0.01,impressions:17,ctr:0,quarter:"Q1 '26"},
  {idx:6,title:'"I Promise You Gold Will Crash"',date:"Jan 30",views:4,watchHrs:0.02,impressions:25,ctr:4.00,quarter:"Q1 '26"},
  {idx:7,title:"California's Billionaire Wealth Tax — Why It's Different",date:"Feb 5",views:59,watchHrs:0.82,impressions:553,ctr:2.17,quarter:"Q1 '26"},
  {idx:8,title:"When Fear Is High but the Data Says BUY — That's the Window",date:"Feb 18",views:1,watchHrs:0,impressions:12,ctr:0,quarter:"Q1 '26"},
  {idx:9,title:"If You're Not the CEO of Your Wealth, Someone Else Is",date:"Mar 4",views:27,watchHrs:0.49,impressions:337,ctr:4.15,quarter:"Q1 '26"},
  {idx:10,title:"I Didn't Want Money. I Wanted Time With My Sons.",date:"Mar 5",views:2,watchHrs:0.01,impressions:56,ctr:1.79,quarter:"Q1 '26"},
  {idx:11,title:"This Millionaire's Favorite Investments for 2026",date:"Mar 6",views:7,watchHrs:0.03,impressions:43,ctr:2.33,quarter:"Q1 '26"},
  {idx:12,title:"Financial Education Is Teaching You to Stay Middle Class",date:"Mar 6",views:4,watchHrs:0.02,impressions:27,ctr:3.70,quarter:"Q1 '26"},
  {idx:13,title:"You Can Start a Family Office With Just $1M?!",date:"Mar 9",views:14,watchHrs:0.06,impressions:76,ctr:2.63,quarter:"Q1 '26"},
  {idx:14,title:"YOU RAISED HOW MUCH IN 2025?!",date:"Mar 9",views:10,watchHrs:0.11,impressions:46,ctr:4.35,quarter:"Q1 '26"},
  {idx:15,title:"Private Credit Funds Drop 20% — Investors Can't Exit",date:"Mar 11",views:4,watchHrs:0.02,impressions:130,ctr:0.77,quarter:"Q1 '26"},
  {idx:16,title:"Why 9% Private Credit Might Be Riskier Than 12%",date:"Mar 12",views:3,watchHrs:0.02,impressions:60,ctr:1.67,quarter:"Q1 '26"},
  {idx:17,title:"3 Red Flags in Private Credit Funds",date:"Mar 12",views:6,watchHrs:0.41,impressions:52,ctr:3.85,quarter:"Q1 '26"},
  {idx:18,title:"Is Private Credit COLLAPSING?",date:"Mar 13",views:1,watchHrs:0.001,impressions:70,ctr:1.43,quarter:"Q1 '26"},
  {idx:19,title:"The Lie About 'Safe' Private Investments",date:"Mar 16",views:2,watchHrs:0.05,impressions:63,ctr:1.59,quarter:"Q1 '26"},
  {idx:20,title:"They Can Call You an Idiot… and Still Take Your Money",date:"Mar 17",views:1,watchHrs:0.001,impressions:68,ctr:1.47,quarter:"Q1 '26"},
  {idx:21,title:"Watch out for these investment fees",date:"Mar 18",views:2,watchHrs:0.01,impressions:70,ctr:1.43,quarter:"Q1 '26"},
  {idx:22,title:"HUGE 🌊 in assisted living coming?",date:"Mar 18",views:2,watchHrs:0.03,impressions:67,ctr:1.49,quarter:"Q1 '26"},
  {idx:23,title:"The 🔑 to starting your own fund",date:"Mar 19",views:2,watchHrs:0.003,impressions:52,ctr:1.92,quarter:"Q1 '26"},
  {idx:24,title:"They're Using YOUR Money to Pay Themselves Back",date:"Mar 19",views:1,watchHrs:0.003,impressions:64,ctr:1.56,quarter:"Q1 '26"},
  {idx:25,title:"Forget Net Worth — $200K Is the Real Freedom Number",date:"Mar 20",views:18,watchHrs:0.08,impressions:101,ctr:5.94,quarter:"Q1 '26"},
  {idx:26,title:"Investors Were Paying for His Cabo Trips",date:"Mar 20",views:10,watchHrs:0.07,impressions:70,ctr:2.86,quarter:"Q1 '26"},
  {idx:27,title:"They Paid Investors 18%… But Only Earned 10%",date:"Mar 23",views:3,watchHrs:0.02,impressions:82,ctr:1.22,quarter:"Q1 '26"},
  {idx:28,title:"You Have $500K to Invest in 2026 — What Would You Do?",date:"Mar 25",views:2,watchHrs:0.01,impressions:66,ctr:1.52,quarter:"Q1 '26"},
  {idx:29,title:"$120 Oil Is Where Things Break",date:"Mar 26",views:3,watchHrs:0.01,impressions:78,ctr:1.28,quarter:"Q1 '26"},
  {idx:30,title:"What Happens If Iran Is Taken Off the Board?",date:"Mar 27",views:5,watchHrs:0.04,impressions:155,ctr:1.29,quarter:"Q1 '26"},
  {idx:31,title:"When Everyone Else Panics, Smart Investors Buy 🏦",date:"Mar 27",views:8,watchHrs:0.10,impressions:229,ctr:1.75,quarter:"Q1 '26"},
  {idx:32,title:"Everyone Feels Broke… But the Data Says Otherwise",date:"Mar 30",views:42,watchHrs:0.15,impressions:156,ctr:4.49,quarter:"Q1 '26"},
  {idx:33,title:"America Is the World's Energy Superpower Most People Don't Know This",date:"Mar 30",views:22,watchHrs:0.09,impressions:160,ctr:2.50,quarter:"Q1 '26"},
  {idx:34,title:"Got a Million Dollars? Don't Invest It Alone",date:"Mar 31",views:49,watchHrs:0.38,impressions:277,ctr:3.25,quarter:"Q1 '26"},
  // ── Q2 2026 (Apr–Jun) — from YouTube Content export. NOTE: this export's Total row
  // (216 subs, 1,756h watch time) matches Q2 channel totals almost exactly, which means
  // it's likely filtered to the Apr 1–Jun 29 date range — see caveat on Q1 entries above.
  {idx:35,title:"Real Estate DOUBLED?!",date:"Apr 1",views:720,watchHrs:1.4679,impressions:247,ctr:2.83,quarter:"Q2 '26"},
  {idx:36,title:"Public Markets Forgive Mistakes Private Markets Don't",date:"Apr 1",views:138,watchHrs:0.463,impressions:246,ctr:2.44,quarter:"Q2 '26"},
  {idx:37,title:"The FOMO Era Is Over (Here's What Investors Are Doing Now)",date:"Apr 2",views:128,watchHrs:0.2271,impressions:248,ctr:2.42,quarter:"Q2 '26"},
  {idx:38,title:"Investors Are Ditching Traditional Businesses (40% → 10%)",date:"Apr 2",views:113,watchHrs:0.3161,impressions:423,ctr:1.89,quarter:"Q2 '26"},
  {idx:39,title:"The #1 Wealth Lesson I'm Teaching My Kids",date:"Apr 3",views:739,watchHrs:1.7741,impressions:283,ctr:2.83,quarter:"Q2 '26"},
  {idx:40,title:"Investors Just Shifted 60% of Their Money",date:"Apr 3",views:224,watchHrs:1.3001,impressions:905,ctr:2.76,quarter:"Q2 '26"},
  {idx:41,title:"77% Drop in Private Credit",date:"Apr 5",views:129,watchHrs:0.4213,impressions:509,ctr:2.55,quarter:"Q2 '26"},
  {idx:42,title:"3 Steps to Turn Your Investments Into a Business",date:"Apr 8",views:980,watchHrs:2.3163,impressions:421,ctr:3.56,quarter:"Q2 '26"},
  {idx:43,title:"This Is How You Stack 401(k)s (Legally)",date:"Apr 9",views:523,watchHrs:2.2444,impressions:293,ctr:2.39,quarter:"Q2 '26"},
  {idx:44,title:"More Write-Offs. Same Income.",date:"Apr 9",views:245,watchHrs:0.389,impressions:218,ctr:3.67,quarter:"Q2 '26"},
  {idx:45,title:"Drop Your Tax Rate to 21%",date:"Apr 10",views:403,watchHrs:1.6267,impressions:420,ctr:1.90,quarter:"Q2 '26"},
  {idx:46,title:"Stop Overthinking It. Just Start an LLC",date:"Apr 13",views:810,watchHrs:1.6107,impressions:265,ctr:0,quarter:"Q2 '26"},
  {idx:47,title:"Stop Maxing Your 401k (Do This Instead)",date:"Apr 14",views:1011,watchHrs:8.1076,impressions:815,ctr:3.68,quarter:"Q2 '26"},
  {idx:48,title:"Your Spouse Dies, the IRS Gets a Raise",date:"Apr 15",views:689,watchHrs:3.5214,impressions:399,ctr:1.25,quarter:"Q2 '26"},
  {idx:49,title:"The $150K Tax Trap Hiding in Your IRA",date:"Apr 15",views:517,watchHrs:13.4902,impressions:501,ctr:2.59,quarter:"Q2 '26"},
  {idx:50,title:"The Biggest IRA Lie Ever Told",date:"Apr 16",views:810,watchHrs:3.3576,impressions:633,ctr:2.53,quarter:"Q2 '26"},
  {idx:51,title:"Waiting Cost You $66K",date:"Apr 17",views:791,watchHrs:1.9813,impressions:263,ctr:1.14,quarter:"Q2 '26"},
  {idx:52,title:"The IRS Wants You to Wait (Don't Do It)",date:"Apr 19",views:600,watchHrs:2.4543,impressions:332,ctr:1.51,quarter:"Q2 '26"},
  {idx:53,title:"They're All in Default",date:"Apr 23",views:618,watchHrs:2.6682,impressions:290,ctr:1.03,quarter:"Q2 '26"},
  {idx:54,title:"Why Every 2021 Real Estate Deal Is Breaking",date:"Apr 24",views:1339,watchHrs:5.2739,impressions:514,ctr:4.28,quarter:"Q2 '26"},
  {idx:55,title:"You're Not Even In the Game",date:"Apr 27",views:100,watchHrs:0.3954,impressions:252,ctr:3.17,quarter:"Q2 '26"},
  {idx:56,title:"The Most Honest Guy in Investing (Meet Bob)",date:"Apr 28",views:1054,watchHrs:2.3539,impressions:776,ctr:2.71,quarter:"Q2 '26"},
  {idx:57,title:"You're the Reason You Lose Money",date:"Apr 29",views:946,watchHrs:2.3287,impressions:214,ctr:3.27,quarter:"Q2 '26"},
  {idx:58,title:"You Only Think You're In Control",date:"Apr 30",views:266,watchHrs:3.9094,impressions:317,ctr:2.84,quarter:"Q2 '26"},
  {idx:59,title:"The Investment Structure That Never Winds Down",date:"Apr 30",views:273,watchHrs:1.2679,impressions:366,ctr:2.19,quarter:"Q2 '26"},
  {idx:60,title:"The Tax Bill Nobody Warned You About",date:"May 1",views:1419,watchHrs:5.9694,impressions:453,ctr:3.31,quarter:"Q2 '26"},
  {idx:61,title:"Your IRR Is Lying to You",date:"May 1",views:329,watchHrs:0.5591,impressions:216,ctr:2.78,quarter:"Q2 '26"},
  {idx:62,title:"Evergreen Funds Beat Volatility",date:"May 4",views:119,watchHrs:0.4056,impressions:251,ctr:3.19,quarter:"Q2 '26"},
  {idx:63,title:"They Delayed the Crash, Now It's All Hitting",date:"May 5",views:602,watchHrs:6.6304,impressions:387,ctr:1.81,quarter:"Q2 '26"},
  {idx:64,title:"Inflation Is Stealing Your Wealth",date:"May 6",views:841,watchHrs:1.4205,impressions:236,ctr:3.81,quarter:"Q2 '26"},
  {idx:65,title:"The Rich Think in Decades",date:"May 6",views:711,watchHrs:2.0859,impressions:438,ctr:3.88,quarter:"Q2 '26"},
  {idx:66,title:"One Assumption That Destroyed Billions",date:"May 7",views:530,watchHrs:7.6566,impressions:376,ctr:2.13,quarter:"Q2 '26"},
  {idx:67,title:"Debt Is Like Fire: Respect It or Get Burned",date:"May 7",views:156,watchHrs:0.8606,impressions:236,ctr:2.12,quarter:"Q2 '26"},
  {idx:68,title:"Why Billionaires Don't Rely on the Stock Market",date:"May 8",views:744,watchHrs:2.1005,impressions:439,ctr:2.96,quarter:"Q2 '26"},
  {idx:69,title:"Cash Flow Is King",date:"May 8",views:230,watchHrs:3.1919,impressions:497,ctr:3.02,quarter:"Q2 '26"},
  {idx:70,title:"The Real Reason Billionaires Buy Real Estate",date:"May 11",views:750,watchHrs:1.8424,impressions:248,ctr:3.63,quarter:"Q2 '26"},
  {idx:71,title:"Real Estate Isn't About Fast Money",date:"May 11",views:166,watchHrs:0.9124,impressions:299,ctr:3.68,quarter:"Q2 '26"},
  {idx:72,title:"Play the Game You Know You'll Win",date:"May 12",views:8,watchHrs:0.0607,impressions:4,ctr:0,quarter:"Q2 '26"},
  {idx:73,title:"The Rich Pay Their Kids Instead of the IRS",date:"May 13",views:563,watchHrs:1.0551,impressions:223,ctr:2.69,quarter:"Q2 '26"},
  {idx:74,title:"He Made $1M and Still Had a Cash Problem",date:"May 13",views:367,watchHrs:2.3264,impressions:250,ctr:3.20,quarter:"Q2 '26"},
  {idx:75,title:"Rich People Wrote Off Cantaloupe Seeds",date:"May 14",views:1968,watchHrs:19.1934,impressions:613,ctr:2.61,quarter:"Q2 '26"},
  {idx:76,title:"This Is Why Most Investors Never Recover",date:"May 14",views:686,watchHrs:2.6028,impressions:241,ctr:0.83,quarter:"Q2 '26"},
  {idx:77,title:"This 10 Minute Tax Fix Saved Him $60K",date:"May 15",views:112,watchHrs:0.513,impressions:332,ctr:2.41,quarter:"Q2 '26"},
  {idx:78,title:"Your CPA Is Costing You $$$",date:"May 18",views:316,watchHrs:0.7787,impressions:253,ctr:3.16,quarter:"Q2 '26"},
  {idx:79,title:"Making Money Is Easier Than Keeping It",date:"May 19",views:430,watchHrs:3.138,impressions:239,ctr:1.26,quarter:"Q2 '26"},
  {idx:80,title:"The Skills That Made You Rich Will Make You Poor",date:"May 20",views:587,watchHrs:8.0283,impressions:454,ctr:3.08,quarter:"Q2 '26"},
  {idx:81,title:"Your Ego Is Killing Your Returns",date:"May 20",views:827,watchHrs:1.3401,impressions:158,ctr:0.63,quarter:"Q2 '26"},
  {idx:82,title:"Why Billionaires Left the 60/40 Portfolio",date:"May 21",views:571,watchHrs:4.3565,impressions:651,ctr:3.69,quarter:"Q2 '26"},
  {idx:83,title:"Most Investors Don't Have an Edge",date:"May 21",views:627,watchHrs:1.6276,impressions:198,ctr:0.51,quarter:"Q2 '26"},
  {idx:84,title:"The Billionaire Model Explained",date:"May 22",views:898,watchHrs:5.5944,impressions:1299,ctr:1.31,quarter:"Q2 '26"},
  {idx:85,title:"The Biggest Investing Shift in 15 Years",date:"May 22",views:745,watchHrs:1.5905,impressions:353,ctr:1.13,quarter:"Q2 '26"},
  {idx:86,title:"Broke People Save Money, Wealthy People Save Time",date:"May 23",views:645,watchHrs:4.5748,impressions:272,ctr:2.94,quarter:"Q2 '26"},
  {idx:87,title:"The 60:40 Portfolio Lie",date:"May 24",views:1180,watchHrs:5.3788,impressions:699,ctr:2.00,quarter:"Q2 '26"},
  {idx:88,title:"Invest in What You Know",date:"May 25",views:114,watchHrs:0.7691,impressions:202,ctr:1.49,quarter:"Q2 '26"},
  {idx:89,title:"Private Equity Has 5 Levels. Most Investors Only Know One",date:"May 25",views:162,watchHrs:1.4861,impressions:233,ctr:3.86,quarter:"Q2 '26"},
  {idx:90,title:"The $200M Bourbon Portfolio",date:"May 26",views:188,watchHrs:1.1336,impressions:394,ctr:3.30,quarter:"Q2 '26"},
  {idx:91,title:"The Perfect Storm Killing Alcohol Brands 🌪️",date:"May 27",views:130,watchHrs:1.5475,impressions:368,ctr:2.99,quarter:"Q2 '26"},
  {idx:92,title:"The Test That Predicts If A Founder Will Fail",date:"May 28",views:114,watchHrs:0.3346,impressions:187,ctr:0,quarter:"Q2 '26"},
  {idx:93,title:"Real Estate, Stocks, & Bourbon, Baby!",date:"May 29",views:308,watchHrs:0.6294,impressions:447,ctr:1.79,quarter:"Q2 '26"},
  {idx:94,title:"The Insurance Job That Pays Millions",date:"May 30",views:149,watchHrs:0.4544,impressions:372,ctr:0.81,quarter:"Q2 '26"},
  {idx:95,title:"Why He Bought a Business Instead of Building One",date:"Jun 1",views:156,watchHrs:0.9557,impressions:243,ctr:4.12,quarter:"Q2 '26"},
  {idx:96,title:"The Economy Is Great, So Why Are You Broke?",date:"Jun 2",views:577,watchHrs:3.5072,impressions:383,ctr:1.57,quarter:"Q2 '26"},
  {idx:97,title:"The Smartest AI Investment Isn't AI",date:"Jun 3",views:561,watchHrs:4.655,impressions:347,ctr:1.15,quarter:"Q2 '26"},
  {idx:98,title:"Why AI Is Making This Land Play a No-Brainer",date:"Jun 3",views:119,watchHrs:0.5979,impressions:210,ctr:2.38,quarter:"Q2 '26"},
  {idx:99,title:"The Math of Losing Money Is Brutal",date:"Jun 4",views:724,watchHrs:2.6544,impressions:342,ctr:3.22,quarter:"Q2 '26"},
  {idx:100,title:"Everyone's Bullish. That's the Problem.",date:"Jun 4",views:450,watchHrs:4.0478,impressions:244,ctr:2.05,quarter:"Q2 '26"},
  {idx:101,title:"Could Oil Really Reach $350?!?",date:"Jun 5",views:262,watchHrs:1.0931,impressions:184,ctr:2.72,quarter:"Q2 '26"},
  {idx:102,title:"You Can't Afford a Bad Decade",date:"Jun 5",views:108,watchHrs:0.5838,impressions:400,ctr:3.00,quarter:"Q2 '26"},
  {idx:103,title:"5 Words That Will Save Your Marriage",date:"Jun 6",views:589,watchHrs:0.8493,impressions:114,ctr:1.75,quarter:"Q2 '26"},
  {idx:104,title:"What Lenders Know That You Don't",date:"Jun 7",views:191,watchHrs:0.2168,impressions:124,ctr:1.61,quarter:"Q2 '26"},
  {idx:105,title:"He Became a Millionaire on a Police Officer's Salary",date:"Jun 7",views:591,watchHrs:5.6619,impressions:338,ctr:0.89,quarter:"Q2 '26"},
  {idx:106,title:"AI Wants Your Job",date:"Jun 8",views:1727,watchHrs:4.2661,impressions:122,ctr:1.64,quarter:"Q2 '26"},
  {idx:107,title:"Don't Bet Everything",date:"Jun 8",views:50,watchHrs:0.182,impressions:142,ctr:3.52,quarter:"Q2 '26"},
  {idx:108,title:"You Can Have TWO 401(k)s?",date:"Jun 9",views:37,watchHrs:0.2856,impressions:244,ctr:2.87,quarter:"Q2 '26"},
  {idx:109,title:"W-2 Job? You Can Still Have a Solo 401(k)",date:"Jun 10",views:35,watchHrs:0.1363,impressions:177,ctr:2.26,quarter:"Q2 '26"},
  {idx:110,title:"He Put $153K Into a Roth in ONE Year",date:"Jun 11",views:496,watchHrs:1.0155,impressions:189,ctr:2.65,quarter:"Q2 '26"},
  {idx:111,title:"35 and Just Made My First Roth Move",date:"Jun 12",views:96,watchHrs:0.3122,impressions:237,ctr:1.27,quarter:"Q2 '26"},
  {idx:112,title:"Your Side Hustle Is Costing You Money",date:"Jun 17",views:513,watchHrs:3.6032,impressions:177,ctr:6.21,quarter:"Q2 '26"},
  {idx:113,title:"Lifestyle Creep Is Keeping You Poor",date:"Jun 17",views:162,watchHrs:2.1364,impressions:169,ctr:1.78,quarter:"Q2 '26"},
  {idx:114,title:"I'm Great at Finance... and Still Got Scammed",date:"Jun 18",views:767,watchHrs:8.2141,impressions:420,ctr:2.62,quarter:"Q2 '26"},
  {idx:115,title:"The 3 Buckets That Build Wealth",date:"Jun 18",views:205,watchHrs:0.4351,impressions:174,ctr:4.02,quarter:"Q2 '26"},
  {idx:116,title:"Most Financial Advisors Need a Financial Advisor",date:"Jun 19",views:534,watchHrs:1.5282,impressions:410,ctr:3.90,quarter:"Q2 '26"},
  {idx:117,title:"What to Do With Your Extra $10K",date:"Jun 21",views:237,watchHrs:1.0415,impressions:214,ctr:2.80,quarter:"Q2 '26"},
  {idx:118,title:"Stop Doing 5 Things. Do One.",date:"Jun 22",views:670,watchHrs:3.947,impressions:117,ctr:4.27,quarter:"Q2 '26"},
  {idx:119,title:"Why the Economy Refuses to Collapse",date:"Jun 23",views:90,watchHrs:0.4974,impressions:286,ctr:3.50,quarter:"Q2 '26"},
  {idx:120,title:"Why America Can't Quit China",date:"Jun 24",views:555,watchHrs:2.8266,impressions:412,ctr:1.46,quarter:"Q2 '26"},
  {idx:121,title:"The Recession That Only Some People Feel",date:"Jun 24",views:508,watchHrs:2.9144,impressions:218,ctr:3.67,quarter:"Q2 '26"},
  {idx:122,title:"The Fed Forecast Just Flipped",date:"Jun 25",views:656,watchHrs:4.4051,impressions:276,ctr:3.62,quarter:"Q2 '26"},
  {idx:123,title:"Billionaires Put 70% of Their Money Here",date:"Jun 25",views:412,watchHrs:1.822,impressions:240,ctr:6.25,quarter:"Q2 '26"},
  {idx:124,title:"Why the Economy Hasn't Broken (Yet)",date:"Jun 26",views:204,watchHrs:0.926,impressions:112,ctr:1.79,quarter:"Q2 '26"},
  {idx:125,title:"The Global Trade Backup Plan",date:"Jun 28",views:637,watchHrs:1.7028,impressions:56,ctr:1.79,quarter:"Q2 '26"},
  {idx:126,title:"$75K → $10M. Here's the Math.",date:"Jun 16",views:601,watchHrs:4.2296,impressions:402,ctr:3.48,quarter:"Q2 '26"},
  {idx:127,title:"The Best Inflation Asset Isn't Gold",date:"Jun 3",views:518,watchHrs:3.4478,impressions:217,ctr:5.07,quarter:"Q2 '26"},
  {idx:128,title:"Stop Pretending Your Real Estate Deal Isn't Already Dead",date:"Apr 22",views:301,watchHrs:0.7069,impressions:258,ctr:1.55,quarter:"Q2 '26"},
  {idx:129,title:"No One is Telling Investors the Truth",date:"Apr 22",views:164,watchHrs:0.7334,impressions:442,ctr:3.17,quarter:"Q2 '26"},
];

const CROSS_MONTHS=["Apr '25","May '25","Jun '25","Jul '25","Aug '25","Sep '25","Oct '25","Nov '25","Dec '25","Jan '26","Feb '26","Mar '26"];
const appleByMonth=Object.fromEntries(APPLE.map(m=>[m.month,m.plays]));
const spotifyByMonth=Object.fromEntries(SPOTIFY_MONTHLY.map(m=>[m.month,m.plays]));
const ytByMonth=Object.fromEntries(YT_MONTHLY.map(m=>[m.month,m.views]));
const APPLE_TOTAL=APPLE.reduce((a,m)=>a+m.plays,0);
const APPLE_HOURS=APPLE.reduce((a,m)=>a+m.hours,0);
const SPOTIFY_TOTAL=SPOTIFY_MONTHLY.reduce((a,m)=>a+m.plays,0);
const POD_Q2_TOTAL=PODCAST_Q2_MONTHLY.reduce((a,m)=>a+m.plays,0);

// Q1 aggregate helpers (channel-wide monthly, used for YTD totals)
const Q1_MONTHS=["Jan '26","Feb '26","Mar '26"];
const YT_Q1_VIEWS=Q1_MONTHS.reduce((a,m)=>a+(ytByMonth[m]||0),0);
const YT_Q1_WATCH=YT_MONTHLY.filter(m=>Q1_MONTHS.includes(m.month)).reduce((a,m)=>a+m.watchHours,0);
const YT_Q1_SUBS=YT_MONTHLY.filter(m=>Q1_MONTHS.includes(m.month)).reduce((a,m)=>a+m.subs,0);
const POD_Q1_TOTAL=Q1_MONTHS.reduce((a,m)=>a+(appleByMonth[m]||0)+(spotifyByMonth[m]||0),0);

// Q2 aggregate helpers
const Q2_MONTHS=["Apr '26","May '26","Jun '26"];
const YT_Q2_VIEWS=Q2_MONTHS.reduce((a,m)=>a+(ytByMonth[m]||0),0);
const YT_Q2_WATCH=YT_MONTHLY.filter(m=>Q2_MONTHS.includes(m.month)).reduce((a,m)=>a+m.watchHours,0);
const YT_Q2_SUBS=YT_MONTHLY.filter(m=>Q2_MONTHS.includes(m.month)).reduce((a,m)=>a+m.subs,0);

// Long-form (main show) episode counts & totals, Q1 vs Q2 — used across YTD / Content Performance tabs
const Q1_LONGFORM_VIEWS=Q1_YT_FLAGSHIP.reduce((a,e)=>a+e.views,0);
const Q1_LONGFORM_COUNT=Q1_YT_FLAGSHIP.length;
const Q2_LONGFORM=[...YT_FLAGSHIP_Q2,...YT_OOTB_Q2];
const Q2_LONGFORM_VIEWS=Q2_LONGFORM.reduce((a,e)=>a+e.views,0);
const Q2_LONGFORM_COUNT=Q2_LONGFORM.length;

const Q1_MAIN_ONLY=Q1_YT_FLAGSHIP.filter(e=>!e.type);
const Q1_AVG_CTR=Q1_MAIN_ONLY.reduce((a,e)=>a+e.ctr,0)/Q1_MAIN_ONLY.length;
const Q2_AVG_CTR=YT_FLAGSHIP_Q2.reduce((a,e)=>a+e.ctr,0)/YT_FLAGSHIP_Q2.length;

function durToSec(d){const p=d.split(":").map(Number);return p.length===2?p[0]*60+p[1]:p[0];}
const Q1_AVG_DUR_SEC=Q1_MAIN_ONLY.reduce((a,e)=>a+durToSec(e.avgDur),0)/Q1_MAIN_ONLY.length;
const Q2_AVG_DUR_SEC=YT_FLAGSHIP_Q2.reduce((a,e)=>a+durToSec(e.avgDur),0)/YT_FLAGSHIP_Q2.length;

const Q1_IMPRESSIONS=Q1_YT_FLAGSHIP.reduce((a,e)=>a+e.impressions,0);
const Q1_SHORTS_Q=YT_SHORTS.filter(s=>s.quarter==="Q1 '26");
const Q2_SHORTS_Q=YT_SHORTS.filter(s=>s.quarter==="Q2 '26");
const Q1_SHORTS_VIEWS=Q1_SHORTS_Q.reduce((a,s)=>a+s.views,0);
const Q1_PODCAST_AVG_COMPLETION=Q1_PODCAST.reduce((a,e)=>a+e.completion,0)/Q1_PODCAST.length;
const Q2_PODCAST_AVG_COMPLETION=PODCAST_Q2.reduce((a,e)=>a+e.completion,0)/PODCAST_Q2.length;

function fmt(n){if(n>=1e6)return(n/1e6).toFixed(1)+"M";if(n>=1e3)return(n/1e3).toFixed(1)+"K";return Math.round(n).toLocaleString();}
function secToClock(s){const m=Math.floor(s/60),sec=Math.round(s%60);return `${m}:${sec.toString().padStart(2,"0")}`;}

function MCard({label,value,sub,color}){return(<div style={{background:"#f5f5f5",borderRadius:8,padding:"12px 14px"}}><div style={{fontSize:10,color:"#999",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div><div style={{fontSize:20,fontWeight:600,color:color||"#111"}}>{value}</div>{sub&&<div style={{fontSize:10,color:"#aaa",marginTop:2}}>{sub}</div>}</div>);}

function SimpleBar({labels,values,color,height=180}){const max=Math.max(...values)*1.1||1,W=680,H=height,pad={t:8,r:8,b:28,l:44},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,ticks=[0,1,2,3,4].map(i=>Math.round(max*i/4)),bW=cW/values.length,gap=Math.max(2,bW*0.18);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{ticks.map((t,i)=>{const y=pad.t+cH-(t/max)*cH;return<g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>;})}{values.map((v,i)=>{const bh=Math.max(1,(v/max)*cH),x=pad.l+i*bW+gap/2,y=pad.t+cH-bh;return<g key={i}><rect x={x} y={y} width={bW-gap} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+i*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{labels[i]}</text></g>;})}</svg>);}

function StackedBar({labels,datasets,height=220}){const max=Math.max(...labels.map((_,i)=>datasets.reduce((s,d)=>s+(d.data[i]||0),0)))*1.1||1,W=680,H=height,pad={t:8,r:8,b:28,l:44},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,ticks=[0,1,2,3,4].map(i=>Math.round(max*i/4)),bW=cW/labels.length,gap=Math.max(2,bW*0.18);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{ticks.map((t,i)=>{const y=pad.t+cH-(t/max)*cH;return<g key={i}><line x1={pad.l} x2={W-pad.r} y1={y} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth={1}/><text x={pad.l-4} y={y+4} textAnchor="end" fontSize={9} fill="#aaa">{fmt(t)}</text></g>})}{labels.map((lbl,gi)=>{const x=pad.l+gi*bW+gap/2,bw2=bW-gap;let cumH=0;return<g key={gi}>{datasets.map((ds,di)=>{const v=ds.data[gi]||0,bh=Math.max(0,(v/max)*cH),y=pad.t+cH-cumH-bh;cumH+=bh;return<rect key={di} x={x} y={y} width={bw2} height={bh} fill={ds.color} rx={di===0?2:0}/>;})}<text x={pad.l+gi*bW+bW/2} y={H-pad.b+14} textAnchor="middle" fontSize={8} fill="#aaa">{lbl}</text></g>;})}</svg>);}

function HBar({labels,values,color,height=360}){const max=Math.max(...values)*1.1||1,W=680,H=height,pad={t:8,r:50,b:8,l:220},cW=W-pad.l-pad.r,cH=H-pad.t-pad.b,bH=cH/values.length,gap=Math.max(2,bH*0.25);return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height}} preserveAspectRatio="none">{values.map((v,i)=>{const bw=Math.max(1,(v/max)*cW),y=pad.t+i*bH+gap/2,bh=bH-gap,lbl=labels[i].length>36?labels[i].slice(0,36)+"…":labels[i];return<g key={i}><text x={pad.l-6} y={y+bh/2+4} textAnchor="end" fontSize={10} fill="#999">{lbl}</text><rect x={pad.l} y={y} width={bw} height={bh} fill={color} rx={2} opacity={0.88}/><text x={pad.l+bw+5} y={y+bh/2+4} fontSize={10} fill="#aaa">{fmt(v)}</text></g>;})}</svg>);}

function SparkBar({data,maxVal,color,height=60}){return(<div style={{display:"flex",gap:3,alignItems:"flex-end",height}}>{data.map((v,i)=>{const h=Math.max(3,Math.round((v/maxVal)*height));return<div key={i} style={{flex:1,height:h,background:color,borderRadius:"2px 2px 0 0",opacity:0.85}}/>;})}</div>);}

function DeltaBar({delta}){const abs=Math.abs(delta),max=45,pct=Math.min(abs/max*50,50),color=delta>0?"#22c55e":delta<0?"#ef4444":"#aaa";return(<div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:64,height:4,background:"#e5e7eb",borderRadius:2,position:"relative",flexShrink:0}}><div style={{position:"absolute",left:"calc(50% - 0.5px)",top:0,width:1,height:"100%",background:"#d1d5db"}}/>{delta>0&&<div style={{position:"absolute",left:"50%",top:0,width:`${pct}%`,height:"100%",background:"#22c55e",borderRadius:"0 2px 2px 0"}}/>}{delta<0&&<div style={{position:"absolute",right:"50%",top:0,width:`${pct}%`,height:"100%",background:"#ef4444",borderRadius:"2px 0 0 2px"}}/>}</div><span style={{fontSize:11,color,fontWeight:500,minWidth:32}}>{delta>0?`+${delta}%`:`${delta}%`}</span></div>);}

function CtrPill({ctr}){const color=ctr>=5.0?"#22c55e":ctr>=4.0?"#2563eb":"#888";return<span style={{fontSize:12,color,fontWeight:500}}>{ctr.toFixed(1)}%</span>;}

function PlaceholderCard({message}){return(<div style={{background:"#fafafa",border:"1.5px dashed #e5e7eb",borderRadius:8,padding:"20px 16px",textAlign:"center",color:"#bbb",fontSize:12}}>{message}</div>);}

function TypeTag({type}){if(!type)return null;const color=type==="Presentation"?PRESO_COLOR:type==="React"?REACT_COLOR:"#888";return<span style={{fontSize:9,fontWeight:600,color:"#fff",background:color,borderRadius:3,padding:"1px 5px",marginLeft:6,letterSpacing:"0.03em",textTransform:"uppercase",flexShrink:0}}>{type}</span>;}

const card=(bg)=>({background:bg||"#f5f5f5",borderRadius:8,padding:"14px 16px"});
const div0={borderBottom:"0.5px solid #eee"};
const sL=(color)=>({fontSize:10,color:color||"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8,fontWeight:600});

function YTEpisodeTable({data,maxViews}){
  const [sort,setSort]=useState({col:"views",dir:"desc"});
  const [typeFilter,setTypeFilter]=useState("All");
  const hasTypes=data.some(e=>e.type);
  const types=hasTypes?["All","Main",...Array.from(new Set(data.filter(e=>e.type).map(e=>e.type)))]:null;
  const filtered=typeFilter==="All"?data:typeFilter==="Main"?data.filter(e=>!e.type):data.filter(e=>e.type===typeFilter);
  const toggle=col=>setSort(s=>({col,dir:s.col===col&&s.dir==="desc"?"asc":"desc"}));
  const sorted=[...filtered].sort((a,b)=>{const v=sort.dir==="asc"?1:-1;if(sort.col==="date")return(a.idx-b.idx)*v;return((a[sort.col]||0)-(b[sort.col]||0))*v;});
  const thS=col=>({textAlign:"left",padding:"7px 10px",fontSize:10,color:sort.col===col?"#111":"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",cursor:"pointer",userSelect:"none",borderBottom:"0.5px solid #eee",whiteSpace:"nowrap",fontWeight:sort.col===col?600:400});
  const tdS={padding:"8px 10px",fontSize:12,borderBottom:"0.5px solid #f5f5f5",verticalAlign:"middle"};
  const arr=col=>sort.col===col?(sort.dir==="desc"?" ↓":" ↑"):"";
  return(<div>
    {types&&<div style={{display:"flex",gap:4,marginBottom:10,flexWrap:"wrap"}}>{types.map(t=><button key={t} onClick={()=>setTypeFilter(t)} style={{padding:"3px 9px",fontSize:10,borderRadius:4,border:"1px solid #ddd",background:typeFilter===t?"#111":"none",color:typeFilter===t?"#fff":"#666",cursor:"pointer"}}>{t}</button>)}</div>}
    <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:540}}><thead><tr><th style={{...thS("title"),minWidth:180}}>Episode</th><th onClick={()=>toggle("date")} style={thS("date")}>Published{arr("date")}</th><th onClick={()=>toggle("views")} style={thS("views")}>Views{arr("views")}</th><th onClick={()=>toggle("watchHrs")} style={thS("watchHrs")}>Watch hrs{arr("watchHrs")}</th><th onClick={()=>toggle("ctr")} style={thS("ctr")}>CTR{arr("ctr")}</th><th style={thS("avgDur")}>Avg duration</th></tr></thead><tbody>{sorted.map((ep,i)=><tr key={i} style={{background:i%2===0?"#fff":"#fafafa"}}><td style={{...tdS,maxWidth:0,minWidth:180}}><span title={ep.title} style={{display:"flex",alignItems:"center",overflow:"hidden"}}><span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ep.title}</span><TypeTag type={ep.type}/></span></td><td style={{...tdS,color:"#999"}}>{ep.date}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:36,height:3,background:"#eee",borderRadius:2}}><div style={{width:`${Math.round((ep.views/maxViews)*100)}%`,height:"100%",background:YT_COLOR,borderRadius:2}}/></div><span style={{fontWeight:500}}>{fmt(ep.views)}</span></div></td><td style={{...tdS,color:"#555"}}>{ep.watchHrs.toFixed(1)}h</td><td style={tdS}><CtrPill ctr={ep.ctr}/></td><td style={{...tdS,color:"#999"}}>{ep.avgDur}</td></tr>)}</tbody></table></div>
  </div>);
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
  return(<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse"}}><thead><tr><th style={{...thS("title"),minWidth:200}}>Short</th><th onClick={()=>toggle("date")} style={thS("date")}>Published{arr("date")}</th><th onClick={()=>toggle("views")} style={thS("views")}>Views{arr("views")}</th><th onClick={()=>toggle("ctr")} style={thS("ctr")}>CTR{arr("ctr")}</th><th style={thS("quarter")}>Quarter</th></tr></thead><tbody>{sorted.map((s,i)=><tr key={i} style={{background:i%2===0?"#fff":"#fafafa"}}><td style={{...tdS,maxWidth:0,minWidth:200}}><span title={s.title} style={{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.title}</span></td><td style={{...tdS,color:"#999"}}>{s.date}</td><td style={tdS}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:36,height:3,background:"#eee",borderRadius:2}}><div style={{width:`${Math.round((s.views/maxV)*100)}%`,height:"100%",background:YT_COLOR,borderRadius:2}}/></div><span style={{fontWeight:500}}>{fmt(s.views)}</span></div></td><td style={{...tdS,color:"#999"}}>{s.ctr!=null?s.ctr.toFixed(2)+"%":"—"}</td><td style={{...tdS,color:"#999"}}>{s.quarter}</td></tr>)}</tbody></table></div>);
}

// ── Comparison box shared by YTD tab ────────────────────────────────────────
function CompareBox({title,color,rows}){
  return(<div style={{...card(),marginBottom:12}}>
    <div style={{fontSize:12,fontWeight:600,marginBottom:12,color}}>{title}</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
      {rows.map(([label,q1,q2,fmtFn])=>{
        const f=fmtFn||(v=>v);
        const numQ1=typeof q1==="number"?q1:null, numQ2=typeof q2==="number"?q2:null;
        const delta=(numQ1!=null&&numQ2!=null&&numQ1!==0)?Math.round(((numQ2-numQ1)/numQ1)*100):null;
        return(<div key={label} style={{background:"#fff",borderRadius:8,padding:"10px 12px",border:"1px solid #eee"}}>
          <div style={{fontSize:10,color:"#aaa",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div>
          <div style={{fontSize:11,color:"#aaa"}}>Q1 <span style={{color:"#555",fontWeight:600}}>{f(q1)}</span></div>
          <div style={{fontSize:11,color:"#aaa",marginBottom:6}}>Q2 <span style={{color,fontWeight:600}}>{f(q2)}</span></div>
          {delta!==null&&<div style={{fontSize:16,fontWeight:700,color:delta>=0?"#22c55e":"#ef4444"}}>{delta>=0?"↑":"↓"} {Math.abs(delta)}%</div>}
        </div>);
      })}
    </div>
  </div>);
}

// ── Tab: Year-to-Date Overview ──────────────────────────────────────────────
function YTDOverviewTab(){
  const totalViewsListens=YT_Q1_VIEWS+YT_Q2_VIEWS+POD_Q1_TOTAL+POD_Q2_TOTAL;
  const watchTimeYTD=YT_Q1_WATCH+YT_Q2_WATCH;
  const subsYTD=YT_Q1_SUBS+YT_Q2_SUBS;
  const downloadsYTD=POD_Q1_TOTAL+POD_Q2_TOTAL;
  const avgViewsPerEp=(Q1_LONGFORM_VIEWS+Q2_LONGFORM_VIEWS)/(Q1_LONGFORM_COUNT+Q2_LONGFORM_COUNT);
  const avgViewsPerShort=Q2_SHORTS_Q.length?Q2_SHORTS_Q.reduce((a,s)=>a+s.views,0)/Q2_SHORTS_Q.length:0;
  const avgCtrYTD=(Q1_AVG_CTR*Q1_MAIN_ONLY.length+Q2_AVG_CTR*YT_FLAGSHIP_Q2.length)/(Q1_MAIN_ONLY.length+YT_FLAGSHIP_Q2.length);
  const avgDurYTD=(Q1_AVG_DUR_SEC*Q1_MAIN_ONLY.length+Q2_AVG_DUR_SEC*YT_FLAGSHIP_Q2.length)/(Q1_MAIN_ONLY.length+YT_FLAGSHIP_Q2.length);

  const spotifyFollowersQ1End=2213, spotifyFollowersQ2End=2282;
  const reachQ1=YT_Q1_VIEWS+POD_Q1_TOTAL, reachQ2=YT_Q2_VIEWS+POD_Q2_TOTAL;
  const q2ImpressionsEst=Q2_LONGFORM.reduce((a,e)=>a+(e.views/(e.ctr/100)),0);

  return(<div>
    <div style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:12}}>Year to date · Jan – Jun 2026</div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:8}}>
      <MCard label="Total views + listens" value={fmt(totalViewsListens)} sub="YTD" color={YT_COLOR}/>
      <MCard label="Watch time (YouTube)" value={Math.round(watchTimeYTD)+"h"} sub="YTD"/>
      <MCard label="New subscribers" value={"+"+subsYTD} sub="YTD"/>
      <MCard label="Podcast downloads" value={fmt(downloadsYTD)} sub="YTD · Apple + Spotify" color={SP_COLOR}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="Avg views / episode" value={Math.round(avgViewsPerEp)} sub="long-form, Q1+Q2"/>
      <MCard label="Avg views / short" value={avgViewsPerShort.toFixed(0)} sub="Q2 only — Q1 pending re-verification"/>
      <MCard label="Avg CTR" value={avgCtrYTD.toFixed(1)+"%"} sub="main episodes"/>
      <MCard label="Avg view duration" value={secToClock(avgDurYTD)} sub="main episodes"/>
    </div>

    <div style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Q1 vs Q2 — by category</div>

    <CompareBox title="Audience" color={YT_COLOR} rows={[
      ["New YT subscribers", YT_Q1_SUBS, YT_Q2_SUBS, v=>"+"+v],
      ["Spotify followers (EOQ)", spotifyFollowersQ1End, spotifyFollowersQ2End, v=>v.toLocaleString()],
      ["Total reach (views+plays)", reachQ1, reachQ2, fmt],
    ]}/>

    <CompareBox title="Content" color={OOTB_COLOR} rows={[
      ["Long-form episodes", Q1_LONGFORM_COUNT, Q2_LONGFORM_COUNT, v=>v],
      ["Shorts published", "34 (unverified)", Q2_SHORTS_Q.length, v=>v],
      ["Avg views / long-form ep", Math.round(Q1_LONGFORM_VIEWS/Q1_LONGFORM_COUNT), Math.round(Q2_LONGFORM_VIEWS/Q2_LONGFORM_COUNT), v=>v],
    ]}/>

    <CompareBox title="Discovery" color={SP_COLOR} rows={[
      ["Impressions (long-form)", Q1_IMPRESSIONS, Math.round(q2ImpressionsEst), v=>fmt(v)+(v===Math.round(q2ImpressionsEst)?" est.":"")],
      ["Avg CTR (main/flagship)", Q1_AVG_CTR, Q2_AVG_CTR, v=>v.toFixed(1)+"%"],
      ["Podcast avg completion", Q1_PODCAST_AVG_COMPLETION, Q2_PODCAST_AVG_COMPLETION, v=>Math.round(v)+"%"],
    ]}/>

    <div style={{...card(),marginTop:16}}>
      <div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Key insights</div>
      <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>
        Q1 was carried by two breakout main episodes — <strong>Whole Life Insurance Part 1</strong> (2,369 views) and <strong>How to Run a Micro Family Office</strong> (2,994 views, +57 subs) — while the Bob & Ben React clips (6 posted) consistently underperformed at 20–46 views each. Podcast completion swung widely in Q1 (24%–64%), with the strongest episodes — <strong>PPMs That Scare the Sh*t Out of Me</strong> (57%) and <strong>Oil Just Spiked</strong> (64%, +44% vs. normal) — both provocative, shorter-form titles. Q2 podcast completion (avg {Math.round(Q2_PODCAST_AVG_COMPLETION)}%) has been notably more consistent than Q1 (avg {Math.round(Q1_PODCAST_AVG_COMPLETION)}%).
        <br/><br/>
        <strong>Shorts correction:</strong> Q2 Shorts actually performed far better than initially logged — <strong>Rich People Wrote Off Cantaloupe Seeds</strong> (1,968 views) and <strong>AI Wants Your Job</strong> (1,727 views) both broke 1,700+ views, with several more clearing 1,000. Avg views/short in Q2 is {avgViewsPerShort.toFixed(0)} across {Q2_SHORTS_Q.length} posts — a very different picture than the Q1 export, where most Shorts show just 1–59 views. That Q1 figure looks unreliable: it likely reflects a Q2-dated reporting window rather than true lifetime Q1 performance, and should be re-pulled with a Jan 1–Mar 31 filter before trusting it for comparison.
      </div>
    </div>
  </div>);
}

// ── Tab: Q1 2026 ─────────────────────────────────────────────────────────────
function Q1Tab(){
  const Q4=["Oct '25","Nov '25","Dec '25"];
  const ytQ4=Q4.reduce((a,m)=>a+(ytByMonth[m]||0),0),apQ4=Q4.reduce((a,m)=>a+(appleByMonth[m]||0),0),spQ4=Q4.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
  const apQ1hr=APPLE.filter(m=>Q1_MONTHS.includes(m.month)).reduce((a,m)=>a+m.hours,0);
  const apQ1li=APPLE.filter(m=>Q1_MONTHS.includes(m.month)).reduce((a,m)=>a+m.listeners,0);
  const apQ1=Q1_MONTHS.reduce((a,m)=>a+(appleByMonth[m]||0),0), spQ1=Q1_MONTHS.reduce((a,m)=>a+(spotifyByMonth[m]||0),0);
  const pct=(a,b)=>b===0?"—":(((a-b)/b)*100).toFixed(0)+"%";
  const pc=(a,b)=>a>=b?"#22c55e":"#ef4444";
  const pa=(a,b)=>a>=b?"↑":"↓";
  const mainCount=Q1_YT_FLAGSHIP.filter(e=>!e.type).length;
  const presoCount=Q1_YT_FLAGSHIP.filter(e=>e.type==="Presentation").length;
  const reactCount=Q1_YT_FLAGSHIP.filter(e=>e.type==="React").length;
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>Jan – Mar 2026 · vs Q4 2025</div>

    <div style={sL(YT_COLOR)}>YouTube</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(YT_Q1_VIEWS),"Views",ytQ4],[Math.round(YT_Q1_WATCH)+"h","Watch hours",null],["+"+YT_Q1_SUBS,"New subscribers",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?YT_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(YT_Q1_VIEWS,q4),marginTop:2}}>{pa(YT_Q1_VIEWS,q4)} {pct(YT_Q1_VIEWS,q4)} vs Q4</div>}</div>
      ))}
    </div>
    <div style={{...card(),marginBottom:16}}><div style={{fontSize:12,fontWeight:500,marginBottom:10}}>YouTube views by month</div><SimpleBar labels={YT_MONTHLY.filter(m=>Q1_MONTHS.includes(m.month)).map(m=>m.month)} values={YT_MONTHLY.filter(m=>Q1_MONTHS.includes(m.month)).map(m=>m.views)} color={YT_COLOR} height={130}/></div>

    <div style={sL(YT_COLOR)}>YouTube — per-episode (23 episodes)</div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:8}}>{mainCount} Main · {presoCount} Presentation uploads · {reactCount} Bob &amp; Ben React clips</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={Q1_YT_FLAGSHIP} maxViews={Math.max(...Q1_YT_FLAGSHIP.map(e=>e.views))}/></div>

    <div style={sL("#888")}>YouTube — Shorts (34 posted — ⚠️ pending re-verification, see note below)</div>
    <div style={{...card(),marginBottom:8}}><ShortsTable data={Q1_SHORTS_Q}/></div>
    <div style={{fontSize:11,color:"#e67e22",marginBottom:16}}>⚠️ These view counts may reflect a Q2 reporting window rather than true Q1 lifetime performance — cross-check against Q2 Shorts data before trusting for comparison. Re-pull with a Jan 1–Mar 31 filter to confirm.</div>

    <div style={sL(AP_COLOR)}>Podcast — combined per-episode (12 of 23 collected)</div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:8}}>Still missing: episodes 7, 8, 9, 11, 13–17, 19</div>
    <div style={{...card(),marginBottom:16}}><PodcastEpisodeTable data={Q1_PODCAST}/></div>

    <div style={sL(AP_COLOR)}>Apple Podcasts (monthly aggregate)</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(apQ1),"Plays",apQ4],[fmt(apQ1hr)+"h","Listen hours",null],[fmt(Math.round(apQ1li/3)),"Avg monthly listeners",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?AP_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(apQ1,q4),marginTop:2}}>{pa(apQ1,q4)} {pct(apQ1,q4)} vs Q4</div>}</div>
      ))}
    </div>

    <div style={sL(SP_COLOR)}>Spotify (monthly aggregate)</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
      {[[fmt(spQ1),"Plays",spQ4],["521","Best month (Jan '26)",null],[fmt(Math.round(spQ1/3)),"Avg / month",null]].map(([v,l,q4],i)=>(
        <div key={i} style={card()}><div style={{fontSize:10,color:"#aaa",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:22,fontWeight:700,color:i===0?SP_COLOR:"#111"}}>{v}</div>{q4!==null&&<div style={{fontSize:11,color:pc(spQ1,q4),marginTop:2}}>{pa(spQ1,q4)} {pct(spQ1,q4)} vs Q4</div>}</div>
      ))}
    </div>

    <div style={sL(SP_COLOR)}>Spotify — top episodes Q1 (legacy per-platform detail)</div>
    <div style={{...card(),marginBottom:16}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,marginBottom:8}}>{["Episode","Streams","Vid Hrs","Vid %"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {SPOTIFY_Q1.map((ep,i)=>(<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,paddingBottom:8,marginBottom:8,...(i<9?div0:{}),alignItems:"center"}}><div><div style={{fontSize:12,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{ep.date}</div></div><div style={{fontSize:12,color:SP_COLOR,textAlign:"right",fontWeight:600}}>{ep.streams.toLocaleString()}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.watchHours}h</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.viewerPct}%</div></div>))}
    </div>

    <div style={card()}><div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Q1 summary</div><div style={{fontSize:13,color:"#555",lineHeight:1.8}}>YouTube had a <strong>breakout quarter</strong> — {fmt(YT_Q1_VIEWS)} views, <span style={{color:pc(YT_Q1_VIEWS,ytQ4),fontWeight:600}}>{pa(YT_Q1_VIEWS,ytQ4)} {pct(YT_Q1_VIEWS,ytQ4)}</span> vs Q4. Apple plays were <span style={{color:pc(apQ1,apQ4),fontWeight:600}}>{pa(apQ1,apQ4)} {pct(apQ1,apQ4)}</span> vs Q4 at {fmt(apQ1)} total. Spotify grew <span style={{color:pc(spQ1,spQ4),fontWeight:600}}>{pa(spQ1,spQ4)} {pct(spQ1,spQ4)}</span> vs Q4 with {fmt(spQ1)} plays. Bob &amp; Ben React clips and Presentation uploads drove volume but consistently underperformed the flagship format on views and CTR.</div></div>
  </div>);
}

// ── Tab: Q2 2026 ─────────────────────────────────────────────────────────────
function Q2Tab(){
  const ytQ2=YT_MONTHLY.filter(m=>Q2_MONTHS.includes(m.month));
  const q2Shorts=Q2_SHORTS_Q;
  const avgComp=Math.round(Q2_PODCAST_AVG_COMPLETION);
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>Apr – Jun 2026</div>
    <div style={sL(YT_COLOR)}>YouTube channel</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:16}}>
      <MCard label="Total views" value={fmt(YT_Q2_VIEWS)} sub="incl. Shorts" color={YT_COLOR}/>
      <MCard label="Watch hours" value={Math.round(YT_Q2_WATCH)+"h"}/>
      <MCard label="New subscribers" value={"+"+YT_Q2_SUBS}/>
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

// ── Tab: Content Performance ─────────────────────────────────────────────────
function ContentPerformanceTab(){
  const allMain=[...Q1_YT_FLAGSHIP,...YT_FLAGSHIP_Q2.map(e=>({...e,idx:e.idx+100})),...YT_OOTB_Q2.map(e=>({...e,idx:e.idx+200,type:"OOTB"}))];
  const allShorts=YT_SHORTS;
  const topByViews=[...allMain].sort((a,b)=>b.views-a.views).slice(0,5);
  const topByCtr=[...allMain].sort((a,b)=>b.ctr-a.ctr).slice(0,5);
  return(<div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:16}}>All episodes &amp; Shorts, Q1–Q2 2026 combined</div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:20}}>
      <div style={card()}>
        <div style={{fontSize:11,fontWeight:600,marginBottom:8,color:YT_COLOR}}>Top 5 by views</div>
        {topByViews.map((e,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",gap:8,fontSize:12,padding:"5px 0",...(i<4?div0:{})}}><span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{e.title}</span><span style={{fontWeight:600,flexShrink:0}}>{fmt(e.views)}</span></div>)}
      </div>
      <div style={card()}>
        <div style={{fontSize:11,fontWeight:600,marginBottom:8,color:YT_COLOR}}>Top 5 by CTR</div>
        {topByCtr.map((e,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",gap:8,fontSize:12,padding:"5px 0",...(i<4?div0:{})}}><span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{e.title}</span><span style={{fontWeight:600,flexShrink:0}}>{e.ctr.toFixed(1)}%</span></div>)}
      </div>
    </div>

    <div style={sL(YT_COLOR)}>Main show — all episodes (Q1 + Q2)</div>
    <div style={{...card(),marginBottom:20}}><YTEpisodeTable data={allMain} maxViews={Math.max(...allMain.map(e=>e.views))}/></div>

    <div style={sL("#888")}>Shorts — all posted (Q1 + Q2)</div>
    <div style={card()}><ShortsTable data={allShorts}/></div>
  </div>);
}

// ── Tab: YouTube ─────────────────────────────────────────────────────────────
function YouTubeTab(){
  const [ytMetric,setYtMetric]=useState("views");
  return(<div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
      <MCard label="Views (tracked)" value={fmt(YT_MONTHLY.reduce((a,m)=>a+m.views,0))} color={YT_COLOR} sub="Apr '25–Jun '26"/>
      <MCard label="Watch hrs (tracked)" value={fmt(YT_MONTHLY.reduce((a,m)=>a+m.watchHours,0))+"h"}/>
      <MCard label="Current subscribers" value="2,879" sub="live count"/>
      <MCard label="Q1+Q2 avg CTR" value={((Q1_AVG_CTR*Q1_MAIN_ONLY.length+Q2_AVG_CTR*YT_FLAGSHIP_Q2.length)/(Q1_MAIN_ONLY.length+YT_FLAGSHIP_Q2.length)).toFixed(1)+"%"}/>
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
    <div style={sL(YT_COLOR)}>Q1 2026 — per-episode (23 episodes)</div>
    <div style={{...card(),marginBottom:16}}><YTEpisodeTable data={Q1_YT_FLAGSHIP} maxViews={Math.max(...Q1_YT_FLAGSHIP.map(e=>e.views))}/></div>
    <div style={sL("#888")}>Shorts — Q1 2026 (34 posted — ⚠️ pending re-verification)</div>
    <div style={{marginBottom:8}}><div style={card()}><ShortsTable data={Q1_SHORTS_Q}/></div></div>
    <div style={{fontSize:11,color:"#e67e22",marginBottom:16}}>⚠️ May reflect a Q2 reporting window rather than true Q1 performance — see Year to Date tab for detail.</div>
    <div style={sL("#888")}>Shorts — Q2 2026 ({Q2_SHORTS_Q.length} posted)</div>
    <div style={{marginBottom:20}}><div style={card()}><ShortsTable data={Q2_SHORTS_Q}/></div></div>
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

// ── Tab: Podcast ─────────────────────────────────────────────────────────────
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
    <div style={sL(SP_COLOR)}>Q1 2026 — per-episode (12 of 23 collected)</div>
    <div style={{fontSize:11,color:"#aaa",marginBottom:8}}>Still missing: episodes 7, 8, 9, 11, 13–17, 19</div>
    <div style={{marginBottom:20}}><div style={card()}><PodcastEpisodeTable data={Q1_PODCAST}/></div></div>
    <div style={sL(SP_COLOR)}>Spotify — top episodes Q1</div>
    <div style={{...card(),marginBottom:20}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,marginBottom:8}}>{["Episode","Streams","Vid Hrs","Vid %"].map((h,i)=><div key={h} style={{fontSize:10,color:"#aaa",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i>0?"right":"left"}}>{h}</div>)}</div>
      {SPOTIFY_Q1.map((ep,i)=>(<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 64px 56px 52px",gap:4,paddingBottom:8,marginBottom:8,...(i<9?div0:{}),alignItems:"center"}}><div><div style={{fontSize:12,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:10,color:"#aaa",marginTop:2}}>{ep.date}</div></div><div style={{fontSize:12,color:SP_COLOR,textAlign:"right",fontWeight:600}}>{ep.streams.toLocaleString()}</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.watchHours}h</div><div style={{fontSize:12,color:"#666",textAlign:"right"}}>{ep.viewerPct}%</div></div>))}
    </div>
    <div style={sL(AP_COLOR)}>Apple — top episodes all time</div>
    <div style={card()}>{APPLE_TOP.map((ep,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,paddingBottom:10,...(i<9?div0:{})}}><span style={{fontSize:16,fontWeight:600,color:i<3?AP_COLOR:"#ccc",minWidth:22}}>{i+1}</span><div style={{flex:1}}><div style={{fontSize:13,lineHeight:1.3}}>{ep.title}</div><div style={{fontSize:11,color:"#aaa",marginTop:2}}>{ep.date} · {ep.listeners} listeners · {ep.consumption}% avg</div></div><span style={{fontSize:13,fontWeight:600,minWidth:44,textAlign:"right"}}>{fmt(ep.plays)}</span></div>)}</div>
  </div>);
}

const TABS=["Year to Date","Q1 2026","Q2 2026","Content Performance","YouTube","Podcast"];
const PC={YouTube:YT_COLOR,"Apple Podcasts":AP_COLOR,Spotify:SP_COLOR};

export default function App(){
  const [tab,setTab]=useState("Year to Date");
  return(
    <div style={{padding:"1.25rem 1rem",maxWidth:780,margin:"0 auto",fontFamily:"system-ui,sans-serif",color:"#111"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><h2 style={{margin:"0 0 3px",fontSize:20,fontWeight:600}}>Invest Like a Billionaire</h2><p style={{margin:0,fontSize:12,color:"#999"}}>Analytics Dashboard · Updated Jun 2026</p></div>
        <div style={{display:"flex",gap:12}}>{Object.entries(PC).map(([name,color])=><div key={name} style={{display:"flex",alignItems:"center",gap:5,fontSize:11}}><div style={{width:8,height:8,borderRadius:"50%",background:color}}/><span style={{color:"#666"}}>{name}</span></div>)}</div>
      </div>
      <div style={{display:"flex",gap:2,marginBottom:20,borderBottom:"0.5px solid #e5e5e5",overflowX:"auto"}}>
        {TABS.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"8px 14px",fontSize:12,border:"none",background:"none",cursor:"pointer",whiteSpace:"nowrap",color:tab===t?"#111":"#888",fontWeight:tab===t?600:400,borderBottom:tab===t?"2px solid #111":"2px solid transparent",marginBottom:-1}}>{t}</button>)}
      </div>
      {tab==="Year to Date"&&<YTDOverviewTab/>}
      {tab==="Q1 2026"&&<Q1Tab/>}
      {tab==="Q2 2026"&&<Q2Tab/>}
      {tab==="Content Performance"&&<ContentPerformanceTab/>}
      {tab==="YouTube"&&<YouTubeTab/>}
      {tab==="Podcast"&&<PodcastTab/>}
    </div>
  );
}
