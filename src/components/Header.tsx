import Logo from "../assets/images/logo.svg"
import Cart from "../assets/images/cart.svg"


const Header = () => {
  return (
    <div className="flex items-center justify-between pt-[50px] pb-10 border-b-[2px] border-b-[#F6F6F6]">
      <div className="flex items-center gap-[17px]">
        <img src={Logo} alt="logo" width={36} height={36} />
        <div className="">
          <h1 className="font-extrabold text-[24px] leading-[30px]">REACT PIZZA</h1>
          <p className="text-[#7B7B7B] text-[16px] leading-[20px]">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <button className="w-[150px] rounded-[30px] flex items-center justify-center py-[15px] bg-[#FE5F1E]">
        <p className="font-bold text-[16px] leading-[20px] text-white">520 ₽</p>
        <span className="bg-[#FFFFFF] opacity-25 w-[1.5px] h-[25px] mx-[13px]"></span>
        <div className="flex items-center gap-2">
            <img src={Cart} alt="cart img" />
            <span className="font-bold text-[16px] leading-[20px] text-white">3</span>
        </div>
      </button>
    </div>
  )
}

export default Header
