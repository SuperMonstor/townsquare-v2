import Searchbar from "@/components/shared/Searchbar"
import Image from "next/image"
import filterIcon from "@/public/icons/filter_icon.svg"
import sortIcon from "@/public/icons/sort_icon.svg"

export default function Home() {
	return (
		<div>
			<div className="py-64 md:flex items-center">
				<div className="max-w-xl pr-12 ">
					<h1 className="text-4xl text-bold  ">
						Bengaluru's best communities in one place.
					</h1>
					<p className="pt-2 pb-12">
						Townsquare is a project to unite communities in Bangalore. Hang out,
						meet new people, and have fun!
					</p>
				</div>

				<div>
					<Image
						src="/assets/hero_image.png"
						alt="Community Image"
						width={375}
						height={340}
					/>
				</div>
			</div>

			<div className="flex justify-between">
				<Searchbar />
				<div className="flex gap-4">
					<button>
						<Image
							src={filterIcon}
							alt="filter button"
							width={25}
							height={25}
						/>
					</button>
					<button>
						<Image src={sortIcon} alt="sort button" width={25} height={25} />
					</button>
				</div>
			</div>
		</div>
	)
}
