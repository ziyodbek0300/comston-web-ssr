const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/business-launch/", changefreq: "daily", priority: 0.3 },
    { url: "/permits-licences/", changefreq: "daily", priority: 0.3 },
    { url: "/fleet-acquisition/", changefreq: "daily", priority: 0.3 },
    { url: "/software-solutions/", changefreq: "daily", priority: 0.3 },
    { url: "/unified-platform/", changefreq: "daily", priority: 0.3 },
    { url: "/brokerage-contract-assistance/", changefreq: "daily", priority: 0.3 },
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/#contacts", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
