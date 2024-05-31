import Image from "next/image"
import Link from "next/link"
import React from "react"
import CTAButton from "../ui/CTAButton"

const Navbar = () => {
	return (
		<nav className="flex justify-between mx-32 py-7">
			<Link href="/" className="flex items-center gap-4">
				<Image
					src="/assets/logo.png"
					alt="townsquare logo"
					width={44}
					height={44}
				/>
				<p className="font-avefedan text-xl text-light-1 hidden lg:block">
					Townsquare
				</p>
			</Link>

			<div className="hidden md:flex items-center justify-center ">
				<p>Know a cool group/community?</p>
				<CTAButton />
			</div>
		</nav>
	)
}

export default Navbar
