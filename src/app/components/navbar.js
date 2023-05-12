import Image from 'next/image'
import CocaLogo from '../../../public/coca-logo.png'

export const Navbar = () => {
  return (
    <div className="container max-w-screen-lg py-4 mx-auto flex justify-between">
      <div className="flex row">
        <Image src={CocaLogo} style={{ width: '100px', height: 'auto' }} alt='logo' />
        <div className="flex row mt-2 ml-14">
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">About</div>
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">Blog</div>
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">Contact</div>
        </div>
      </div>
      <div>
        <button className="bg-green-600 hover:bg-green-700 text-xs text-white font-medium py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  )
}
