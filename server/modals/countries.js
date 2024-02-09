import mongoose from "mongoose"
const stateSchema = new mongoose.Schema({
    id: Number,
    name: String,
    state_code: String,
    latitude: String,
    longitude: String,
  });
  
  const countrySchema = new mongoose.Schema({
    name: String,
    iso3: String,
    iso2: String,
    phone_code: String,
    capital: String,
    currency: String,
    currency_symbol: String,
    tld: String,
    native: String,
    region: String,
    subregion: String,
    timezones: [
      {
        zoneName: String,
        gmtOffset: Number,
        gmtOffsetName: String,
        abbreviation: String,
        tzName: String,
      },
    ],
    translations: {
      kr: String,
      br: String,
      pt: String,
      nl: String,
      hr: String,
      fa: String,
      de: String,
      es: String,
      fr: String,
      ja: String,
      it: String,
      cn: String,
    },
    latitude: String,
    longitude: String,
    emoji: String,
    emojiU: String,
    states: [stateSchema],
  });
  
  const Country = mongoose.model('Country', countrySchema);
  export default Country;