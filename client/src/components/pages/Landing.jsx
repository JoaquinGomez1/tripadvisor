import React from "react";
import "../../css/landing.css";
import { FadeInOut } from "../Ui/FramerMotion";
import { Link } from "react-router-dom";
import { FramerButton as Button } from "../Ui/FramerMotion";

export default function Landing() {
  return (
    <FadeInOut>
      <div className='w-screen h-screen pt-32 bg-indigo-800'>
        <div className='landing-container  max-w-screen-xl flex mx-auto px-8  h-100'>
          <div className='left text-left w-1/2 px-20 text-white'>
            <div className='text-container -mt-16 h-full flex flex-col text-left justify-center'>
              <h3 className='opacity-80 text-2x1'> Choose where to travel </h3>
              <h3 className='text-3x1 text-bold text-yellow-400 text-shadow my-4'>
                Let us help You find your dream vacations{" "}
              </h3>
              <h3 className='text-xl mb-10'> We'll do the rest </h3>
              <div className='w-1/2 '>
                <Link to='/trips'>
                  <Button> View Trips </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className='right w-1/2 h-full my-auto '>
            <img
              className='w-full '
              src={process.env.PUBLIC_URL + "/img/undraw_adventure_4hum.svg"}
              alt='person travelling'
            />
          </div>
        </div>
      </div>
    </FadeInOut>
  );
}
