import Head from "next/head";
import { metadata } from "../../lib/constants";

const Meta = () => {
  return (
    <Head>
       <link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/brand/favicon-16x16.png" />
      <link rel="manifest" href="/brand/manifest.json" />
      <link rel="mask-icon" href="/brand/safari-pinned-tab.svg" color="#131313" />
      <link rel="shortcut icon" href="/brand/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ff4" />
      <meta name="theme-color" content="#ff4" />

      <meta name="msapplication-config" content="/brand/browserconfig.xml" />
      <link rel="alternate" type="application/rss+xml" href="/brand/feed.xml" />
      <meta name="description" content={`${metadata.description} by Pol Gubau Amores `} />
      <meta property="og:image" content={metadata.homeOgImage} />
      <meta property="og:description" content={`${metadata.description} by Pol Gubau Amores `} />
      <meta placeholder="tags" content={metadata.tags.join(", ")} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:url" content={metadata.links.website} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metadata.links.twitter} />
      <meta name="twitter:creator" content={metadata.links.twitter} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={`${metadata.description} by Pol Gubau Amores `} />

      <meta name="twitter:image" content={metadata.homeOgImage} />
      <meta name="twitter:image:alt" content={metadata.title} />
    </Head>
  );
};

export default Meta;
