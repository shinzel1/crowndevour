// components/SchemaOrg.js
import React from 'react';
const SchemaOrg = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
      defer />
  );
};

export default SchemaOrg;
