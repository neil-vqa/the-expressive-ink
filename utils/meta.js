
export const metaTags = (data) => {
	return [
		{
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
		{
      hid: 'og:title',
      property: 'og:title',
      content: data.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.excerpt
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: data.cover_img
    },
	];
};
