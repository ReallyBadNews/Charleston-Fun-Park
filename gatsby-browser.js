/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require(`react`);

exports.wrapPageElement = ({ element, props }) => (
  <>
    <img
      src="https://tags.w55c.net/rs?id=0f94f5ee47224e9085965cb413903a1d&t=marketing"
      style={{
        position: `absolute`,
        top: `0`,
        left: `0`,
        zIndex: `-1000`,
      }}
    />
    {element}
  </>
);
