import Image from "next/image";
import { Navbar } from "./components/navbar";
import CardHeroImage from "../../public/card-hero-bg.png";
import CardImage1 from "../../public/card-image-1.png";
import CardImage2 from "../../public/card-image-2.png";
import YellowCircle from "../../public/yellow-circle.png";
import ImageSmall1 from "../../public/image-small-1.png";
import ImageSmall2 from "../../public/image-small-2.png";
import ImageSmall3 from "../../public/image-small-3.png";
import ImageSlider1 from "../../public/image-slider-1.png";
import ImageSlider2 from "../../public/image-slider-2.png";
import WifiImage from "../../public/wifi-router.png";
import PriceImage from "../../public/price-tag.png";
import ComfortableImage from "../../public/comfortable.png";
import ParkingImage from "../../public/parking.png";
import MosqueImage from "../../public/mosque.png";
import HourImage from "../../public/24-hour.png";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero-section max-w-screen-lg mx-auto flex items-center w-full">
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <h6 className="text-sm font-semibold mt-8">Coworking Spaces for All</h6>
            <h1 className="text-7xl font-bold mt-3">
              The best <br />
              coworking <br />
              in NYC
            </h1>
            <h6 className="w-100 text-sm font-base text-gray-500 mt-3">
              Coworking is all  about being your own boss, and that’s why
              it’s such a great fit for freelancers. But it can be hard to
              know what you’re getting into when you first start out.
            </h6>
            <button className="bg-green-600 hover:bg-green-700 text-xs text-white font-medium py-2 px-4 rounded mt-5">
              See Availability
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="card card-hero relative">
              <div className="overflow-hidden rounded-xl">
                <Image src={CardHeroImage} alt="coca" />
              </div>
              <div className="w-40 h-40 p-4 bg-white rounded-xl absolute bottom-5 right-5">
                <h2 className="text-3xl font-medium">5K+</h2>
                <h6 className="text-sm card-subtitle mt-2">Visitors per month</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#EBFBEE' }}>
        <div className="py-20 max-w-screen-lg mx-auto flex items-center w-full">
          <div className="flex flex-row w-full">
            <div className="w-1/2">
              <div className="card-image-1 card relative">
                <div className="overflow-hidden rounded-xl">
                  <Image src={CardImage1} alt="coca" />
                </div>
                <div className="w-48 h-24 p-4 bg-white rounded-xl absolute top-12 right-0 translate-x-24 drop-shadow-2xl">
                  <h2 className="text-3xl font-medium">30+</h2>
                  <h6 className="text-sm card-subtitle mt-2">Rooms available</h6>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center">
              <div>
                <h1 className="text-5xl font-medium mt-3">
                  Coworking Spaces <br />
                  for Startup
                </h1>
                <h6 className="w-100 text-sm font-base text-gray-500 mt-3">
                  This guide will give you an overview of the different types of
                  coworking spaces available, and help you decide which one is
                  right for you.
                </h6>
                <button className="bg-green-600 hover:bg-green-700 text-xs text-white font-medium py-2 px-4 rounded mt-5">
                  Get Workspace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#0A4319' }} className="relative overflow-hidden">
        <div className="py-20 max-w-screen-lg mx-auto flex items-center w-full relative z-10">
          <div className="flex flex-row w-full">
            <div className="w-1/2 flex items-center">
              <div>
                <h1 className="text-5xl font-medium mt-3 text-white">
                  The Ultimate Guide to 
                  Coworking Spaces
                </h1>
                <h6 className="w-3/4 text-sm font-base text-white mt-10">
                  The Ultimate Guide to Coworking Spaces - This isn’t
                  just a list of coworking spaces-- it also includes tips on
                  how to find the best one for your needs and what to 
                  look out for when choosing one.
                </h6>
                <div className="w-3/4 flex justify-between mt-5">
                  <div>
                    <h2 className="text-3xl text-white font-medium">25</h2>
                    <h6 className="text-sm text-white card-subtitle mt-2">Meeting Rooms</h6>
                  </div>
                  <div>
                    <h2 className="text-3xl text-white font-medium">30</h2>
                    <h6 className="text-sm text-white card-subtitle mt-2">Event Spaces</h6>
                  </div>
                  <div>
                    <h2 className="text-3xl text-white font-medium">25</h2>
                    <h6 className="text-sm text-white card-subtitle mt-2">Working Spaces</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div className="card-image-1 card relative flex items-center">
                <div className="overflow-hidden rounded-xl">
                  <Image src={CardImage2} alt="coca" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image src={YellowCircle} className="absolute right-0 bottom-0 z-0 translate-x-48 translate-y-48" alt="coca" />
      </div>

      <div style={{ backgroundColor: '#EBFBEE' }}>
        <div className="py-20 max-w-screen-lg mx-auto w-full">
          <div className="flex justify-between w-full">
            <div className="w-1/2">
              <h3 className="text-3xl font-medium">
                How to Find the Perfect <br />
                Coworking Space
              </h3>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <p className="w-3/4 text-sm font-base text-gray-500">
                If you want more specific advice on finding the right
                space, this article will tell you exactly how to do it!
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full mt-12"
            style={{ marginLeft: '-5px', marginRight: '-5px' }}
          >
            <div className="w-4/12 px-2">
              <div className="card-image-small relative flex items-center">
                <div className="overflow-hidden rounded-xl image">
                  <Image src={ImageSmall1} className="object-cover" alt="coca" />
                </div>
                <div className="w-11/12 h-20 py-2 px-6 bg-white rounded-xl absolute bottom-4 mx-auto left-0 right-0">
                  <h6 className="text-md font-medium card-subtitle mt-2">
                    Are Coworking Spaces Right For You?
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-4/12 px-2">
              <div className="card-image-small relative flex items-center">
                <div className="overflow-hidden rounded-xl image">
                  <Image src={ImageSmall2} className="object-cover" alt="coca" />
                </div>
                <div className="w-11/12 h-20 py-2 px-6 bg-white rounded-xl absolute bottom-4 mx-auto left-0 right-0">
                  <h6 className="text-md font-medium card-subtitle mt-2">
                    The Benefit of Coworking Spaces for Small Businesses
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-4/12 px-2">
              <div className="card-image-small relative flex items-center">
                <div className="overflow-hidden rounded-xl image">
                  <Image src={ImageSmall3} className="object-cover" alt="coca" />
                </div>
                <div className="w-11/12 h-20 py-2 px-6 bg-white rounded-xl absolute bottom-4 mx-auto left-0 right-0">
                  <h6 className="text-md font-medium card-subtitle mt-2">
                    How to Find the Best Coworking Spaces for You
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-20 max-w-screen-lg mx-auto w-full">
          <div className="flex justify-between w-full">
            <div className="w-1/2">
              <h3 className="text-3xl font-medium">
                When you need an <br /> inspiring place to work
              </h3>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <p className="w-3/4 text-sm font-base text-gray-500">
                This guide will give you an overview of the different types of coworking
                spaces available, and help you decide which one is right of r you.
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full mt-12">
            <div className="w-fit me-5">
              <div className="card-slider relative flex items-center">
                <div className="overflow-hidden rounded-xl image">
                  <Image src={ImageSlider1} className="object-cover" alt="coca" />
                </div>
              </div>
            </div>
            <div className="w-fit me-5">
              <div className="card-slider relative flex items-center">
                <div className="overflow-hidden rounded-xl image">
                  <Image src={ImageSlider2} className="object-cover" alt="coca" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-20 max-w-screen-lg mx-auto w-full flex justify-between">
        <div className="px-4 border-r border-slate-200">
          <Image src={WifiImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            Wi-Fi Network Availability
          </h6>
        </div>
        <div className="px-4 border-r border-slate-200">
          <Image src={PriceImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            Affordable Prices
          </h6>
        </div>
        <div className="px-4 border-r border-slate-200">
          <Image src={ComfortableImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            Comfortable Workspace
          </h6>
        </div>
        <div className="px-4 border-r border-slate-200">
          <Image src={ParkingImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            Wide Parking Area
          </h6>
        </div>
        <div className="px-4 border-r border-slate-200">
          <Image src={MosqueImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            Restroom and Mosque
          </h6>
        </div>
        <div className="px-4">
          <Image src={HourImage} alt="icon" className="w-auto h-8 flex mx-auto mb-4" />
          <h6 className="text-base text-center">
            24-hours Admin Helps
          </h6>
        </div>
      </div>

    </div>
  )
}
