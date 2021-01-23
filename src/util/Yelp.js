import { SearchBar } from "../components/SearchBar/SearchBar";

const apiKey =
  "hY6rieOYzkE7h_dp4GRMO0rFq11O3FR9sOCsgQd_0gMb7Hh1lYFuyuYfKlqyDwopMN6CWAfHqUxgWquMkmNf0BHRrbdvOuL9t0bC6OftquftIM4XCxqihFOfpJYMYHYx";
let Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy} `,
      { Authorization: `Bearer ${apiKey}` }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipcode: business.zip_code,
              category: business.category,
              rating: business.rating,
              reviewCount: business.rating,
            };
          });
        }
      });
  },
};
export default Yelp;
