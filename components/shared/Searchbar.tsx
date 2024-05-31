import Image from "next/image"
import searchIcon from "@/public/icons/search_icon.svg"

function Searchbar() {
	return (
		<div className="flex items-center justify-between border border-black rounded-full py-3 px-6">
			<input type="text" placeholder="Search" className="flex-1 outline-none" />
			<button>
				<Image src={searchIcon} alt="search button" width={20} height={20} />
			</button>
		</div>
	)
}

export default Searchbar
