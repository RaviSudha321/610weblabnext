import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Helmet } from "react-helmet-async";

const SEO = ({ url }) => {
  const [seoData, setSeoData] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [seoScript, setSeoScript] = useState('');

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

    const scriptTag = doc.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      setSeoScript(scriptTag.innerHTML);
    }
  },[seoData])

  if (!metaData) return null;
  
  return (
    <>
      <Helmet>
        {parse(metaData)}
        <script type="application/ld+json" class="rank-math-schema" dangerouslySetInnerHTML={{ __html: seoScript }} />
      </Helmet>
    </>
  );
};

export default SEO;
