import axios from 'axios';
import React, { useState } from 'react';
const ConvertComponent = ({ data }) => {
	const [rate, setRate] = useState(1.5758);
	const [curr, setCurr] = useState('AUD');
	const handleChange = async (event) => {
		let selectedOpt = event.target.value;
		const res = await axios.get(
			'https://api.exchangeratesapi.io/latest?symbols=AUD,NZD'
		);
		let result = res.data.rates;
		selectedOpt !== 'AUD' ? setRate(result.NZD) : setRate(result.AUD);
		setCurr(selectedOpt);
	};
	return (
		<div className='App'>
			<select onChange={handleChange}>
				<option value='AUD'>Australian Dollar - AUD</option>
				<option value='NZD'>New Zeland Dollar - NZD</option>
			</select>
			{data.glossary.map(({ title, id, price }) => {
				return (
					<div className=''>
						<h2 className=''>{title}</h2>
						<p id={id}>
							{curr}&nbsp;{(price * rate).toFixed(2)}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default ConvertComponent;
