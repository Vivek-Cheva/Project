import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateLanguage } from "../Redux/userSlice";

const LanguageSelector = () => {
	const dispatch = useDispatch();
	const selectedLanguage = useSelector((state) => state.user.language); // Accessing the Redux store for selected language

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

		const languages = [
			{ language: "Hindi", code: "hi" },
			{ language: "Bengali", code: "bn" },
			{ language: "Telugu", code: "te" },
			{ language: "Marathi", code: "mr" },
			{ language: "Tamil", code: "ta" },
			{ language: "Gujarati", code: "gu" },
			{ language: "Kannada", code: "kn" },
			{ language: "Malayalam", code: "ml" },
			{ language: "Odia", code: "or" },
			{ language: "Punjabi", code: "pa" },
			{ language: "Assamese", code: "as" },
			{ language: "Urdu", code: "ur" },
			{ language: "Sanskrit", code: "sa" },
			{ language: "Maithili", code: "mai" },
			{ language: "Konkani", code: "kok" },
			{ language: "Sindhi", code: "sd" },
			{ language: "Bodo", code: "brx" },
			{ language: "Dogri", code: "doi" },
			{ language: "Santhali", code: "sat" },
			{ language: "Kashmiri", code: "ks" },
		];

	const handleLanguageSelect = (languageObj) => {
		dispatch(updateLanguage(languageObj)); 
		setIsDropdownOpen(false);
		setSearchTerm(""); 
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value); 
	};

	const filteredLanguages = languages.filter(
		(languageObj) =>
			languageObj.language.toLowerCase().includes(searchTerm.toLowerCase()) 
	);

	return (
		<div className='relative text-white justify-center items-center'>
			<div
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				className='flex gap-5 justify-between items-center px-5 py-3 mt-4 font-semibold whitespace-nowrap rounded-3xl border-2 border-solid bg-neutral-700 border-neutral-800 max-md:pl-5 max-md:mr-1 cursor-pointer'
			>
				<div className='flex gap-3'>
					<img
						loading='lazy'
						src='/language.svg'
						alt='Language icon'
						className='object-contain shrink-0 self-start w-5 aspect-square mt-1'
					/>
					<span>{selectedLanguage.language}</span>{" "}
				</div>
				<img
					loading='lazy'
					src='/language-2.svg'
					alt='Dropdown icon'
					className='object-contain shrink-0 aspect-square w-[30px] mt-0.5'
				/>
			</div>
			{isDropdownOpen && (
				<div className='absolute bottom-full left-0 w-full bg-neutral-800 border border-neutral-700 rounded-md shadow-lg'>
					{/* Search Bar */}
					<input
						type='text'
						placeholder='Search language...'
						value={searchTerm}
						onChange={handleSearchChange}
						className='w-full px-4 py-2 bg-neutral-700 text-white border-b border-neutral-600 outline-none'
					/>
					<ul>
						{filteredLanguages.length > 0 ? (
							filteredLanguages.map((languageObj, index) => (
								<li
									key={index}
									onClick={() => handleLanguageSelect(languageObj)}
									className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer'
								>
									{languageObj.language}
								</li>
							))
						) : (
							<li className='px-4 py-2 text-white'>No results found</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
