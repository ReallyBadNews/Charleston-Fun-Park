export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <img
      alt="tracking pixel"
      src="https://tags.w55c.net/rs?id=0f94f5ee47224e9085965cb413903a1d&t=marketing"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        zIndex: "-1000",
        textIndent: "-9999px",
      }}
      aria-hidden
    />
    <img
      alt="tracking pixel"
      height="1"
      src="https://secure.adnxs.com/seg?add=24451561&t=2"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        zIndex: "-1000",
        textIndent: "-9999px",
      }}
      width="1"
      aria-hidden
    />
  </>
);
