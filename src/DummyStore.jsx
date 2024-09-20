import React, { useState } from 'react';

function DummyStore() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  if (selectedCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Display selected card info */}
        <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 rounded-md shadow-lg gap-y-4'>
          {selectedCard === 'Routers' && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" className="bi bi-router-fill" viewBox="0 0 16 16">
                <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"/>
                <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707Z"/>
                <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86z"/>
                <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
              </svg>
              <strong>Routers</strong>
              <p>Configure internal settings of the Panel Server.</p>
            </>
          )}
          {selectedCard === 'Laptops' && (
            <>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                    <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                </svg>
                <strong>Laptops</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p> */}
                <div className='w-400 h-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg>
                    <h1 className='text-center font-bold rounded-sm bg-slate-300 py-2 text-green-600'>Stock : 50 </h1>
                </div>
            </>
          )}
          {selectedCard === 'Mouse' && (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-mouse2-fill" viewBox="0 0 16 16">
                    <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026M13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188z"/>
                </svg>
                <strong>Mouse</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </>
          )}
          {selectedCard === 'Dekstop' && (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
                </svg>
                <strong>Deskstops</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </>
          )}
          {selectedCard === 'Chair' && (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="766" height="768">
                    <path d="M20 12v-2c0-3.3137-2.6863-6-6-6H10C6.6863 4 4 6.6863 4 10v2H3c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1h1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h12v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h1c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1h-1ZM6 10c0-2.2091 1.7909-4 4-4h4c2.2091 0 4 1.7909 4 4v2H6v-2Zm-2 4h16v2H4v-2Z" fill='black'/>
                </svg>
                <strong>Chairs</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </>
          )}
          {selectedCard === 'Cctv' && (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="766" height="768">
                    <path d="M21.71,11.29l-3-3A1,1,0,0,0,18,8H6A1,1,0,0,0,5.29,8.29l-3,3A1,1,0,0,0,3,13h6.28l1.12,2.24-3.4,1.36A1,1,0,0,0,6,18v1a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18a1,1,0,0,0-.72-.95l-3.4-1.36L15,13h6A1,1,0,0,0,21.71,11.29ZM14.28,15l2.12.85h-8.8l2.12-.85L10.53,13h2.94Z"/>
                </svg>
                <strong>CCTV</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </>
          )}
        </div>

        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className='flex justify-center bg-blue-400 px-2 py-2 font-bold text-lg'>Lab Equipment Store</h1>
      <div className='grid grid-cols-3 gap-x-0 gap-y-10 px-16 py-4 bg-blue-100'>
        {/* Laptop */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Laptops')}
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
            </svg>
            <strong>Laptops</strong>
            <p class="set-p">Configure internal settings of the Panel Server.</p>
        </div>

        {/* Chairs */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Chair')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="766" height="768">
                <path d="M20 12v-2c0-3.3137-2.6863-6-6-6H10C6.6863 4 4 6.6863 4 10v2H3c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1h1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h12v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h1c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1h-1ZM6 10c0-2.2091 1.7909-4 4-4h4c2.2091 0 4 1.7909 4 4v2H6v-2Zm-2 4h16v2H4v-2Z" fill='black'/>
            </svg>
            <strong>Chairs</strong>
            <p class="set-p">Configure internal settings of the Panel Server.</p>
        </div>

        {/* Dekstop */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Dekstop')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
            </svg>
            <strong>Deskstops</strong>
            <p class="set-p">Configure internal settings of the Panel Server.</p>
        </div>

        {/* Mouse */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Mouse')}
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-mouse2-fill" viewBox="0 0 16 16">
                <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026M13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188z"/>
            </svg>
            <strong>Mouse</strong>
            <p class="set-p">Configure internal settings of the Panel Server.</p>
        </div>

        {/* Router */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Routers')}
        >
          {/* Routers card */}
          <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" className="bi bi-router-fill" viewBox="0 0 16 16">
            <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"/>
            <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707Z"/>
            <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86z"/>
            <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
          </svg>
          <strong>Routers</strong>
          <p>Configure internal settings of the Panel Server.</p>
        </div>

        {/* CCTV */}
        <div
          className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'
          onClick={() => handleCardClick('Cctv')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="766" height="768">
                <path d="M21.71,11.29l-3-3A1,1,0,0,0,18,8H6A1,1,0,0,0,5.29,8.29l-3,3A1,1,0,0,0,3,13h6.28l1.12,2.24-3.4,1.36A1,1,0,0,0,6,18v1a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18a1,1,0,0,0-.72-.95l-3.4-1.36L15,13h6A1,1,0,0,0,21.71,11.29ZM14.28,15l2.12.85h-8.8l2.12-.85L10.53,13h2.94Z"/>
            </svg>
            <strong>CCTV</strong>
            <p class="set-p">Configure internal settings of the Panel Server.</p>
        </div>
      </div>
    </div>
  );
}

export default DummyStore;
