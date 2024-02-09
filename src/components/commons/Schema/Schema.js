// components/SchemaOrg.js
import React from 'react';
import { JsonLd } from 'react-schemaorg';
const SchemaOrg = ({ data }) => {
  return (
    <JsonLd>
      
        {{
          "@context": "http://schema.org",
          "@type": "CreativeWork",
          "headline": data.name,
          "description": data.description,
          "datePublished": data.date,
          "author": {
            "@type": "Person",
            "name": data.author,
          },
          // Add other relevant properties based on your content
        }}
    </JsonLd>
  );
};

export default SchemaOrg;
