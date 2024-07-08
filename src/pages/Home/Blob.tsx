// TODO: This component causes the window to have horizontal scroll
export default function Blob() {
  return (
      <div className="absolute -top-32 sm:-top-3/4 sm:-right-1/3 -right-32 w-full md:w-11/12 -z-10 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9DD2B1"
                d="M31.2,-39.3C44.1,-26.4,60.6,-20,66,-8.8C71.3,2.4,65.5,18.4,57.4,33.6C49.2,48.9,38.7,63.3,24.8,68.5C10.8,73.8,-6.6,69.9,-17.4,60.5C-28.2,51,-32.5,36.1,-44.2,22.3C-55.9,8.6,-75.1,-4,-75.1,-14.8C-75.1,-25.7,-55.9,-34.7,-40.2,-47.1C-24.5,-59.5,-12.2,-75.3,-1.5,-73.5C9.2,-71.7,18.3,-52.2,31.2,-39.3Z"
                transform="translate(100 100)"/>
        </svg>
      </div>
  )
}
