import Image from "next/image";
import CocaLogo from "../../../public/coca-logo-circle.png";
import ArrowRight from "../../../public/arrow-right.png";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: '#EBFBEE' }}>
      <div className="py-16 max-w-screen-lg mx-auto w-full">

        <div className="flex justify-between">
          <div>
            <Image className="w-12 h-auto" src={CocaLogo} alt="coca" />
          </div>
          <div className="flex flex-row">
            <h6 className="text-sm mt-4 me-4">Ready to get started?</h6>
            <button className="bg-green-600 hover:bg-green-700 text-xs text-white font-medium py-2 px-8 rounded mt-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-11/12 flex justify-between mt-10">
          <div>
            <h4 className="text-2xl font-medium w-3/4">
              Subscribe to our newsletter
            </h4>
            <div className="w-fit relative">
              <input type="text" placeholder="Email address"
                className="w-52 bg-transparent mt-6 border-b-2 py-3"
              />
              <div className="bg-green-600 hover:bg-green-700 w-10 h-10 absolute bottom-0 right-0 rounded-t flex justify-center items-center cursor-pointer">
                <Image className="w-2 h-auto" src={ArrowRight} alt="arrow" />
              </div> 
            </div>
          </div>
          <div>
            <h6 className="text-md text-green-500">Services</h6>
            <div className="flex flex-col">
              <a href="#" className="text-sm mt-3">Email Marketing</a>
              <a href="#" className="text-sm mt-3">Campaigns</a>
              <a href="#" className="text-sm mt-3">Branding</a>
              <a href="#" className="text-sm mt-3">Offline</a>
            </div>
          </div>
          <div>
            <h6 className="text-md text-green-500">About</h6>
            <div className="flex flex-col">
              <a href="#" className="text-sm mt-3">Our Story</a>
              <a href="#" className="text-sm mt-3">Benefits</a>
              <a href="#" className="text-sm mt-3">Team</a>
              <a href="#" className="text-sm mt-3">Careers</a>
            </div>
          </div>
          <div>
            <h6 className="text-md text-green-500">Help</h6>
            <div className="flex flex-col">
              <a href="#" className="text-sm mt-3">FAQs</a>
              <a href="#" className="text-sm mt-3">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <h6 className="text-sm me-8">Terms & Conditions</h6>
          <h6 className="text-sm">Privacy Policy</h6>
        </div>

      </div>
    </div>
  )
}