export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <img
      alt="tracking pixel"
      src="https://tags.w55c.net/rs?id=0f94f5ee47224e9085965cb413903a1d&t=marketing"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1000",
      }}
      aria-hidden
    />
    <img
      alt="tracking pixel"
      height="1"
      src="https://secure.adnxs.com/seg?add=24451561&t=2"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1000",
      }}
      width="1"
      aria-hidden
    />
  </>
);
