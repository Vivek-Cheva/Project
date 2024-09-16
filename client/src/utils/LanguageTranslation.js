import React from "react";
export const translateText = async (text, targetLanguage) => {
	const apiKey = "AIzaSyAcTzjWIcw-zZ2Z-fUYGofwgN9Fv_n83CA";
	const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

	const body = {
		q: text,
		target: targetLanguage,
		source: "en",
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
		return data?.data?.translations[0]?.translatedText || text;
	} catch (error) {
		console.error("Translation error:", error);
		return text; 
	}
};
