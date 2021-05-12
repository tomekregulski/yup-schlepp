const { Op } = require("sequelize");
/* BuildingAmenities
        "pets_allowed": true,
        "roof": false,
        "courtyard": false,
        "concierge": false,
        "doorman": false,
        "elevator": false,
        "laundry": false,
        "children_playroom": false,
        "gym": false,
        "media_room": false,
        "recreation_room": false,
        "swimming_pool": false,
        "live_in_super": false,
        "smoke_free": false,
        "wheelchair_access": false,
        "garage_parking": false,
        "valet_parking": false,
        "bike_room": false,
        "cold_storage": false,
        "locker_cage": false,
        "package_room": false,
  */

const buildingAmenitiesArr = [
  "pets_allowed",
  "roof",
  "courtyard",
  "concierge",
  "doorman",
  "elevator",
  "laundry",
  "children_playroom",
  "gym",
  "media_room",
  "recreation_room",
  "swimming_pool",
  "live_in_super",
  "smoke_free",
  "wheelchair_access",
  "garage_parking",
  "valet_parking",
  "bike_room",
  "cold_storage",
  "locker_cage",
  "package_room",
];

/* Unit Amenities
      "balcony": true,
      "garden": false,
      "private_roof": false,
      "roof_rights": false,
      "terrace": true,
      "central_air": true,
      "dishwasher": true,
      "fireplace": false,
      "hardwood_floors": true,
      "washer_dryer": false,
      "city_view": true,
      "garden_view": false,
      "park_view": false,
      "skyline_view": true,
      "water_view": false,
  */

const unitAmenitiesArr = [
  "balcony",
  "garden",
  "private_roof",
  "roof_rights",
  "terrace",
  "central_air",
  "dishwasher",
  "fireplace",
  "hardwood_floors",
  "washer_dryer",
  "city_view",
  "garden_view",
  "park_view",
  "skyline_view",
  "water_view",
];

/* Building
      "street_address": "901 Willoughby Ave",
      "neighborhood": "Bushwick",
      "city": "Brooklyn",
      "zip_code": "11221",
  */

const buildingArr = ["street_address", "neighborhood", "city", "zip_code"];

/* Unit
      "move_in": "2021-05-01T04:00:00.000Z",
      "market_as": "apartment",
      "lease_term": 12,
      "gross_rent": 1795,
      "concession": false,
      "months_free": 0,
      "furnished": false,
      "legal_beds": 1,
      "full_bath": 1,
      "half_bath": 0,
      "total_rooms": 4,
      "size": 800,
      */

const unitArr = [
  "move_in",
  "market_as",
  "lease_term",
  "gross_rent",
  "concession",
  "months_free",
  "furnished",
  "legal_beds",
  "full_bath",
  "half_bath",
  "total_rooms",
  "size",
];

// [ Op.or ]: [
//     { neighborhood: 'Bushwick' },
//     { neighborhood: 'Bed Stuiy' },
//     { zip_code: '11221 '},
//     { zip_code: '11222 '}
// ]

const unitSorter = (req, res, next) => {
  const { unit, buildingAmenities, unitAmenities, building } = req.query;
  // destructure req.query based on the above
  //   console.log(unit, "top");
  //   console.log(buildingAmenities, "top");
  //   console.log(unitAmenities, "top");
  //   console.log(building, "top");

  console.log(req.query);

  let queries = {};

  const qSort = (arr) =>
    arr.reduce((acc, [k, v]) => {
      if (v == "true") {
        v = Boolean(true);
      }
      // if (k.startsWith("__gte_")) {
      //   const key = k.replace("__gte_", "");
      //   const val = parseInt(v);
      //   const value = { [key]: { [Op.gte]: val } };

      //   return {
      //     ...acc,
      //     value,
      //   };
      // }
      // reduce to individual key:value pairs
      if (Array.isArray(v)) {
        // if 'v' of [k:v] is an array, pass it through
        const value = v.map((val) => ({ [k]: val }));
        // map throgh [k:v], setting each val as its own object with k
        console.log(value, "right before return");
        ors = acc[Op.or] ? acc[Op.or] : [];
        return {
          ...acc,
          [Op.or]: [...ors, ...value],
        };
      }

      return { ...acc, [k]: v };
    }, {});

  if (building) {
    queries.building = qSort(Object.entries(building));
    console.log(queries.building, "final cl");
  }

  if (unit) {
    queries.unit = qSort(Object.entries(unit));
    console.log(queries.unit, "final cl");
  }

  if (buildingAmenities) {
    queries.buildingAmenities = qSort(Object.entries(buildingAmenities));
    console.log(queries.buildingAmenities, "final cl");
  }

  if (unitAmenities) {
    queries.unitAmenities = qSort(Object.entries(unitAmenities));
    console.log(queries.unitAmenities, "final cl");
  }

  // type = where_or
  // const mapNeighborhoods = neighborhoods.map((neighborhood) => ({
  //   neighborhood,
  // }));

  req.sortedQueries = queries;

  next();
};

module.exports = unitSorter;
