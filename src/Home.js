import React from 'react';
import ConvertComponent from './ConvertComponent';

const Directory = () => {
	const data = {
		glossary: [
			{
				title: 'hats',
				imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
				id: 1,
				price: 10,
			},
			{
				title: 'jackets',
				imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
				id: 2,
				price: 6,
			},
			{
				title: 'sneakers',
				imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
				id: 3,
				price: 8,
			},
			{
				title: 'womens',
				imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
				id: 4,
				price: 20,
			},
			{
				title: 'mens',
				imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
				id: 5,
				price: 30,
			},
		],
	};
	return (
		<React.Fragment>
			<ConvertComponent data={data} />
		</React.Fragment>
	);
};

export default Directory;
