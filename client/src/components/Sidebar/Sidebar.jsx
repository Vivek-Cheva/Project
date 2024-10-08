import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ImageSlider from "./ImageSlider";

const Sidebar = ({ todoEvents, isOpen, setIsOpen }) => {
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		console.log("todo",todoEvents)
	},[todoEvents])
 
	const renderEventList = (title, events) => (
		<div
			className={`flex flex-col px-2 pt-2 pb-4 mx-auto w-full text-sm font-medium text-white rounded-3xl bg-zinc-800 max-md:mt-4 justify-center `}
		>
			{!events ? (
				<div className='flex flex-col items-center px-4 pt-8 pb-8 rounded-3xl border border-solid bg-neutral-700 border-neutral-800 max-md:px-3 justify-center text-center'>
					<h2 className='text-lg font-semibold mb-6'>{title}</h2>
					<img src='/museum-icon.png' alt='No events' />
					<h3 className='text-md font-semibold mt-6'>
						Oops !! No shows to view
					</h3>
					<button className='mt-2 bg-[#2C2C2C] px-4 py-1 rounded-xl'>
						Book Now
					</button>
				</div>
			) : (
				<div>
					<h2 className='text-lg font-semibold mb-4'>{title}</h2>
					<ul className='space-y-4'>
						
							<li className='p-4 bg-neutral-700 rounded-xl'>
								<p>
									<strong>Persons:</strong> {events.persons}
								</p>
								<p>
									<strong>Mobile:</strong> {events.mobile}
								</p>
								<p>
									<strong>Email:</strong> {events.email}
								</p>
								<p>
									<strong>Date:</strong> {events.date}
								</p>
								<p>
									<strong>Time:</strong> {events.time}
								</p>
							</li>
						
					</ul>
				</div>
			)}
		</div>
	);

	return (
		<div className='relative h-screen sidebar'>
			<div
				className={`sidebar fixed top-6 bottom-6 left-6 bg-neutral-800 text-gray-100 transition-all duration-300 ease-in-out ${
					isOpen ? "w-80" : "w-12 bg-black"
				} rounded-[20px] overflow-hidden flex flex-col`}
			>
				<div className='flex justify-between items-center p-4'>
					{isOpen && <h2 className='text-xl font-semibold'>Popular Shows</h2>}
				</div>
				{isOpen && (
					<div className='relative flex flex-col h-full'>
						<div className='flex-grow overflow-y-auto p-4 space-y-5 PopularShow_bar'>
							<div>
								<ImageSlider imagePath='/museum1.svg' />
								<ImageSlider imagePath='/museum2.svg' />
								<ImageSlider imagePath='/museum3.svg' />
							</div>
							{renderEventList("Events To-Do", todoEvents)}
						</div>
						<div className='sticky bottom-0  p-4 '>
							<LanguageSelector todoEvents={todoEvents} />
						</div>
					</div>
				)}
				<button
					onClick={toggleSidebar}
					className={`text-gray-300 hover:text-white focus:outline-none absolute ${
						isOpen
							? "right-1 top-1/2 -translate-y-1/2"
							: "left-4 top-1/2 -translate-y-1/2"
					}`}
				>
					{isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
				</button>
			</div>
			<div
				className={`p-4 ${
					isOpen ? "ml-80" : "ml-12"
				} transition-all duration-300 ease-in-out`}
			></div>
		</div>
	);
};

Sidebar.propTypes = {
	todoEvents: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
