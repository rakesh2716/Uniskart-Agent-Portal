import countries from "../modals/countries.js"
export const getAllCountryStates = async (req, res) => {
    const countryName = req.params.country;

    try {
      const country = await countries.findOne({ name: countryName });
  
      if (!country) {
        return res.status(404).json({ message: 'Country not found' });
      }
      const states = country.states;
      res.json(states);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };