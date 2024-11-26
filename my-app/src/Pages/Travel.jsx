export default function Travel() {
  return (
    <section className="landing w-full">
      <div className="landing-img mb-10">
        <img
          src="https://www.gstatic.com/travel-frontend/animation/hero/trips_4.svg"
          alt="landing-img"
          srcset=""
        />
        <h1 className="text-6xl font-normal text-center">Travel</h1>
      </div>
      <div className="containeer">
        <div className="search flex justify-center mb-8 ">
          <div className="relative">
            <input
              className="w-96 border rounded-3xl p-3 pl-8 outline-none"
              type="text"
              placeholder="Search for flights, hotels and more"
            />
            <i className="bx bx-search absolute top-1/2 -translate-y-1/2 left-3 text-gray-600"></i>
          </div>
        </div>
        <div className="flex justify-center gap-3 mb-8">
          <button className="w-20 text-sm h-20 rounded-md text-gray-500 hover:bg-gray-200 flex flex-col items-center justify-center">
            <svg
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" NMm5M fill-gray-500">
              <rect fill="none" height="24" width="24"></rect>
              <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
            </svg>
            Explore
          </button>
          <button className="w-20 h-20 text-sm rounded-md text-gray-500 hover:bg-gray-200 flex flex-col items-center justify-center">
            <svg
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" NMm5M fill-gray-500">
              <rect fill="none" height="24" width="24"></rect>
              <path d="M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z"></path>
            </svg>
            Flights
          </button>
          <button className="w-20 h-20 text-sm rounded-md text-gray-500 hover:bg-gray-200 flex flex-col items-center justify-center">
            <svg
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" NMm5M  fill-gray-500">
              <g>
                <rect fill="none" height="24" width="24"></rect>
              </g>
              <g>
                <g>
                  <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path>
                </g>
              </g>
            </svg>
            Hotels
          </button>
          <button className="w-20 h-20 text-sm rounded-md text-gray-500 hover:bg-gray-200 flex flex-col items-center justify-center">
            <svg
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" NMm5M fill-gray-500">
              <g>
                <g>
                  <rect fill="none" height="24" width="24"></rect>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path>
                  </g>
                </g>
              </g>
            </svg>
            Vacation rentals
          </button>
        </div>
      </div>
    </section>
  );
}
