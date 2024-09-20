import React from 'react'
import { useState } from 'react';

function Store() {

  return (
    <div>
        <h1 className='flex justify-center bg-blue-400 px-2 py-2 font-bold text-lg'>Lab Equipment Store</h1>
        <div className='grid grid-cols-3 gap-x-0 gap-y-10 px-16 py-4 bg-blue-100'>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" viewBox="0 0 766 768" fill="none">
                    <path d="M247 443H165V747C165 758 156 768 144 768C132 768 123 758 123 747V443H42C19 443 0 424 0 401V334C0 311 19 293 42 293H123V21C123 10 132 0 144 0C156 0 165 10 165 21V293H246C270 293 288 311 288 334V401C288 424 270 442 247 443ZM492 469C515 470 533 490 532 512V579C532 602 514 620 490 620H411V747C411 758 402 768 390 768C378 768 369 758 369 747V620H287C264 620 246 602 246 579V512C245 490 263 471 286 470H369V21C369 10 378 0 390 0C402 0 411 10 411 21V469H492ZM724 159C747 159 766 177 766 201V267C766 290 747 309 724 309H643V747C643 758 634 768 622 768C610 768 601 758 601 747V309H520C496 308 478 290 478 268V201C478 177 496 159 519 159H601V21C601 10 610 0 622 0C634 0 643 10 643 21V159H724ZM724 266V201H520V267L724 266ZM42 335L43 401L246 400V334L42 335ZM490 512V511L402 512C400 512 398 513 395 513H287L288 579L490 578V512Z" fill="black"/>
                </svg>
                <strong>General</strong>
                    <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" viewBox="0 0 766 768" fill="none">
                    <path d="M247 443H165V747C165 758 156 768 144 768C132 768 123 758 123 747V443H42C19 443 0 424 0 401V334C0 311 19 293 42 293H123V21C123 10 132 0 144 0C156 0 165 10 165 21V293H246C270 293 288 311 288 334V401C288 424 270 442 247 443ZM492 469C515 470 533 490 532 512V579C532 602 514 620 490 620H411V747C411 758 402 768 390 768C378 768 369 758 369 747V620H287C264 620 246 602 246 579V512C245 490 263 471 286 470H369V21C369 10 378 0 390 0C402 0 411 10 411 21V469H492ZM724 159C747 159 766 177 766 201V267C766 290 747 309 724 309H643V747C643 758 634 768 622 768C610 768 601 758 601 747V309H520C496 308 478 290 478 268V201C478 177 496 159 519 159H601V21C601 10 610 0 622 0C634 0 643 10 643 21V159H724ZM724 266V201H520V267L724 266ZM42 335L43 401L246 400V334L42 335ZM490 512V511L402 512C400 512 398 513 395 513H287L288 579L490 578V512Z" fill="black"/>
                </svg>
                <strong>General</strong>
                    <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-router-fill" viewBox="0 0 16 16">
                    <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"/>
                    <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707Z"/>
                    <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86zM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4.5-.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"/>
                    <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                </svg>
                <strong>Routers</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
                </svg>
                <strong>Deskstops</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-mouse2-fill" viewBox="0 0 16 16">
                    <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026M13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188z"/>
                </svg>
                <strong>Mouse</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
            <div className='flex flex-col justify-center items-center w-64 h-52 bg-white border-2 border-gray-300 p-5 cursor-pointer transition-all duration-300 ease-in-out rounded-full shadow-lg gap-y-4 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="766" height="768" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                    <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                </svg>
                <strong>Laptops</strong>
                <p class="set-p">Configure internal settings of the Panel Server.</p>
            </div>
        </div>
    </div>
  )
}

export default Store