import Link from "next/link"
import React from "react"

function CTAButton() {
	return (
		<Link href="/">
			<div className="bg-[#001FBB] px-4 py-2 rounded-lg ml-3">
				<p className="text-white">Add a community</p>
			</div>
		</Link>
	)
}

export default CTAButton
