'use client';

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Head from "next/head";


const SEO = ({ url }) => {
  const [seoData, setSeoData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  // const [seoScript, setSeoScript] = useState('');

  if (!url) return null;

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSeoData(data.head);
      } catch (error) {
        console.error("Error fetching SEO data:", error);
      }
    };

    fetchSEOData();
  }, [url]);

  useEffect(()=>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(seoData, 'text/html');

    setMetaData(doc.querySelector('head').innerHTML);

    // const scriptTag = doc.querySelector('script[type="application/ld+json"]');
    // if (scriptTag) {
    //   setSeoScript(scriptTag.innerHTML);
    // }
  },[seoData])

  if (!metaData) return null;
  
  return (
    <>
    <Head>
        {parse(metaData)}
        {/* <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: seoScript }} /> */}
      </Head>
    </>
  );
}

export default SEO;