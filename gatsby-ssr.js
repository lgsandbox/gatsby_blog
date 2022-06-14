const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: '// REPLACE THIS WITH ACTUAL CODE',
      }}
    />,
  ]);
};