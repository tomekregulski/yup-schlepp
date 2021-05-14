const { Op } = require("sequelize");

const unitSorter = (req, res, next) => {
  const { unit, buildingAmenities, unitAmenities, building } = req.query;

  console.log(req.query, "initial");

  let queries = {};

  const qSort = (arr) =>
    arr.reduce((acc, [k, v]) => {
      if (v == "true") {
        v = Boolean(true);
      }
      if (k.startsWith("__gte_")) {
        const key = k.replace("__gte_", "");
        const val = parseInt(v);
        const value = { [key]: { [Op.gte]: val } };

        return {
          ...acc,
          ...value,
        };
      }
      if (k.startsWith("__lte_")) {
        const key = k.replace("__lte_", "");
        const val = parseInt(v);
        const value = { [key]: { [Op.lte]: val } };

        return {
          ...acc,
          ...value,
        };
      }
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

  req.sortedQueries = queries;

  next();
};

module.exports = unitSorter;
