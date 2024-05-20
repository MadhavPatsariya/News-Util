const TOP_HEADLINE_URL = "https://newsapi.org/v2/everything?q=all&apiKey=17feb39d31984ef284b9421cf6d76958"

/*
let news = [
    {
    source: {
    id: "wired",
    name: "Wired"
    },
    author: "Andy Greenberg",
    title: "A Vast New Dataset Could Supercharge the AI Hunt for Crypto Money Laundering",
    description: "Blockchain analysis firm Elliptic, MIT, and IBM, have released a new AI detection model—and the 200-million-transaction dataset it's trained on—that aims to spot the “shape” of Bitcoin money laundering.",
    url: "https://www.wired.com/story/ai-crypto-tracing-model-money-laundering/",
    urlToImage: "https://media.wired.com/photos/6631a1936dc0c77846852ed5/191:100/w_1280,c_limit/Crypto-Money-Laundering-Security-GettyImages-1543076825.jpg",
    publishedAt: "2024-05-01T13:00:00Z",
    content: "As a test of their resulting AI tool, the researchers checked its outputs with one cryptocurrency exchangewhich the paper doesn't nameidentifying 52 suspicious chains of transactions that had all ult… [+3279 chars]"
    },
    {
    source: {
    id: "wired",
    name: "Wired"
    },
    author: "Joel Khalili",
    title: "FTX Creditors Say Payout Deal Is 'an Insult'—and Plan to Revolt",
    description: "FTX has a plan to repay its former crypto customers more than the billions of dollars they lost in the latest bankruptcy proposal. But some will reject it anyway.",
    url: "https://www.wired.com/story/ftx-creditors-crypto-payout-rejection/",
    urlToImage: "https://media.wired.com/photos/663ba309e6755459097533ca/191:100/w_1280,c_limit/FTX-Bankruptcy-Business-GettyImages-1245052532.jpg",
    publishedAt: "2024-05-08T17:00:02Z",
    content: "Some creditors of the bankrupt crypto exchange FTX are preparing to reject a plan that would see them recover 118 percent of the money they lost. The proposal is far less generous than it might seem,… [+2945 chars]"
    },
    {
    source: {
    id: null,
    name: "ReadWrite"
    },
    author: "Radek Zielinski",
    title: "GBTC Bitcoin ETF holdings drop before halving",
    description: "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings.… Continue reading GBTC Bitcoin ETF holdings drop before halving The post GBTC Bitcoin ETF holdings drop before halving ap…",
    url: "https://readwrite.com/gbtc-bitcoin-etf-holdings-drop-before-halving/",
    urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/zxDgyfq8QYCzJhRAH2CF1g.jpg",
    publishedAt: "2024-04-17T16:43:29Z",
    content: "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings. This is despite the outflows recently slowing down. Accordin… [+2125 chars]"
    },
    {
    source: {
    id: null,
    name: "Slashdot.org"
    },
    author: "EditorDavid",
    title: "Jack Dorsey's Block Is Investing 10% Of Its Bitcoin Profits Into Monthly Bitcoin Purchases",
    description: "An anonymous reader shared this report from the blog Bitcoinist: Jack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announceme…",
    url: "https://slashdot.org/story/24/05/04/0356205/jack-dorseys-block-is-investing-10-of-its-bitcoin-profits-into-monthly-bitcoin-purchases",
    urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    publishedAt: "2024-05-04T17:34:00Z",
    content: "Jack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announcement was… [+1022 chars]"
    },
    {
    source: {
    id: null,
    name: "ReadWrite"
    },
    author: "Radek Zielinski",
    title: "Bitcoin beaches one billion transactions milestone",
    description: "Bitcoin (BTC) — the world’s first and most valuable cryptocurrency — has surpassed one billion processed transactions. This milestone was… Continue reading Bitcoin beaches one billion transactions milestone The post Bitcoin beaches one billion transactions mi…",
    url: "https://readwrite.com/bitcoin-beaches-one-billion-transactions-milestone/",
    urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/ada10bac-b90f-4618-8f7c-490d8dc6692a.webp",
    publishedAt: "2024-05-06T12:22:39Z",
    content: "Bitcoin (BTC) the world’s first and most valuable cryptocurrency has surpassed one billion processed transactions. This milestone was reached 800 weeks and one day after the launch of Bitcoin on Janu… [+2107 chars]"
    },
    {
    source: {
    id: null,
    name: "ReadWrite"
    },
    author: "Radek Zielinski",
    title: "El Salvador’s Bitcoin holdings reach $373M",
    description: "According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold… Continue reading El Salvador’s Bitcoin holdings reach $373MThe post El Salvador’s Bitcoin holdings reach $373M appea…",
    url: "https://readwrite.com/el-salvadors-bitcoin-holdings-reach-373m/",
    urlToImage: "https://readwrite.com/wp-content/uploads/2024/05/25b91b12-cd57-4b3e-b4e5-4be84fbf56bd.webp",
    publishedAt: "2024-05-15T17:38:10Z",
    content: "According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold up to 5,750 BTC. Since 2021, the nation has mined nearly … [+2540 chars]"
    },
    {
    source: {
    id: null,
    name: "ReadWrite"
    },
    author: "Radek Zielinski",
    title: "BlackRock’s Bitcoin ETF sees first day without inflows",
    description: "BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded… Continue reading BlackRock’s Bitcoin ETF sees first day without inflows The post BlackRock’s Bitcoin ETF sees f…",
    url: "https://readwrite.com/blackrocks-bitcoin-etf-sees-first-day-without-inflows/",
    urlToImage: "https://readwrite.com/wp-content/uploads/2024/04/eaa08a84-02bf-4e04-af55-67efc1e88950.webp",
    publishedAt: "2024-04-25T11:28:14Z",
    content: "BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded funds (ETFs) in the United States in January, Farsid… [+1836 chars]"
    },
    {
    source: {
    id: "business-insider",
    name: "Business Insider"
    },
    author: "fdemott@insider.com (Filip De Mott)",
    title: "Bitcoin could see a wave of forced selling as miners face the reality of lower rewards post-halving, research firm says",
    description: "If miners were forced to sell even a fraction of their holdings over the coming month this would have a negative impact on markets, Kaiki Research wrote.",
    url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-supply-crypto-currency-miners-btc-sell-off-decline-2024-5",
    urlToImage: "https://i.insider.com/6643af41b4abc992e8c96de5?width=1200&format=jpeg",
    publishedAt: "2024-05-15T12:17:10Z",
    content: "Markets have long considered bitcoin's recent halving as a major price bolster, but it could bring a wave of selling from one corner of the sector, according to Kaiko Research. The April halving is … [+1708 chars]"
    }]
*/