// Import hooks and components if needed
import React from "react";
import Head from "next/head"; // Allows adding meta tags and SEO info

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  children,
}) => {
  const ogImagePath = ""; // Define Open Graph image path here

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || ""} />
        <meta name="keywords" content={keywords || ""} />
        <link rel="canonical" href={canonicalUrl || "/"} />
        {/* Social media cards metadata */}
        <meta property="og:url" content={canonicalUrl || "/"} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Site Name" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${ogImagePath}`} />
      </Head>
      {/* Your header component here */}
      <main className="container mx-auto px-4 py-8 grow">
          {children}
      </main>
      {/* Your footer component here */}
    </div>
  );
};

export default Layout;