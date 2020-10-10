const apiKey = '2LWPs1Zt_pEdmXriK3YNqAsQEV-yIT92Koj7lZhBzXmO4WbYbZbjDCwRG4tRVbW3cgQwQhy-cIKsvPl8A6FOTcBhMgu16Yz5YdN9cmcBXXtRFfI7j5gZKOOZfe-BX3Yx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/bisinesses/search?term=${term}&location=${location}$sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;