(() => {
var exports = {};
exports.id = 288;
exports.ids = [288,515,551];
exports.modules = {

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ technical_data)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/styles/TableHeader.module.css
var TableHeader_module = __webpack_require__(7949);
var TableHeader_module_default = /*#__PURE__*/__webpack_require__.n(TableHeader_module);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowDropDown"
const ArrowDropDown_namespaceObject = require("@mui/icons-material/ArrowDropDown");
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_namespaceObject);
;// CONCATENATED MODULE: ./table-data.js
const TABLE_HEADERS = [{
  display: "Acronym",
  fieldName: "acronym"
}, {
  display: "Full Name",
  fieldName: "fullName"
}, {
  display: "Design Org",
  fieldName: "designOrg"
}, {
  display: "Coolant",
  fieldName: "coolant"
}, {
  display: "Moderator",
  fieldName: "moderator"
}, {
  display: "Type",
  fieldName: "type"
}, {
  display: "Design Status",
  fieldName: "designStatus"
}, {
  display: "Country",
  fieldName: "country"
}, {
  display: "Neutron Spectrum",
  fieldName: "neutronSpectrum"
}, {
  display: "Reactor Thermal Output",
  fieldName: "reactorThermalOutput"
}, {
  display: "Power Plant Gross Output",
  fieldName: "powerPlantGrossOutput"
}, {
  display: "Power Plant Net Output",
  fieldName: "powerPlantNetOutput"
}, {
  display: "Plant Efficiency Net (%)",
  fieldName: "plantEfficiencyNet"
}, {
  display: "Non-Electrical Applications",
  fieldName: "nonElectricalApplications"
}, {
  display: "Steam-Flow Rates(kg/s)",
  fieldName: "steamFlowRate"
}, {
  display: "Steam Pressure (MPA)",
  fieldName: "steamPressure"
}, {
  display: "Steam Temperature (°C)",
  fieldName: "steamTemperature"
}, {
  display: "Feedwater Flow Rate (kg/s)",
  fieldName: "feedwaterFlowRate"
}, {
  display: "Feedwater Temperature (°C)",
  fieldName: "feedwaterTemperature"
}, {
  display: "Thermodynamic Cycle",
  fieldName: "thermodynamicCycle"
}, {
  display: "Core Coolant",
  fieldName: "coreCoolant"
}, {
  display: "Primary Coolant Flow Rate",
  fieldName: "primaryCoolantFlowRate"
}, {
  display: "Reactor Operating Pressure (MPA)",
  fieldName: "reactorOperatingPressure"
}, {
  display: "Coolant Inlet Temperature (°C)",
  fieldName: "coolantInletTemperature"
}, {
  display: "Coolant Outlet Temperature (°C)",
  fieldName: "coolantOutletTemperature"
}, {
  display: "Delta Temperature (°C)",
  fieldName: "deltaTemperature"
}, {
  display: "Active Core Height (m)",
  fieldName: "activeCoreHeight"
}, {
  display: "Equivalent Core Diameter (m)",
  fieldName: "equivalentCoreDiameter"
}, {
  display: "Average Linear Heat Rate (kW/m)",
  fieldName: "averageLinearHeatRate"
}, {
  display: "Average Fuel Power Density (kW/kgU)",
  fieldName: "averageFuelPowerDensity"
}, {
  display: "Average core power density[kW/kgU]",
  fieldName: "averageCorePowerDensity"
}, {
  display: "Outer diameter of fuel rods[mm]",
  fieldName: "outerDiameterFuelRods"
}, {
  display: "Rod array of a fuel assembly",
  fieldName: "rodArrayOfFuelAssembly"
}, {
  display: "Lattice geometry",
  fieldName: "latticeGeometry"
}, {
  display: "Number of fuel assemblies",
  fieldName: "numberOfFuelAssemblies"
}, {
  display: "Fuel Material",
  fieldName: "fuelMaterial"
}, {
  display: "Cladding material",
  fieldName: "claddingMaterial"
}, {
  display: "Enrichment of reload fuel[wt %]",
  fieldName: "enrichmentOfReloadFuel"
}, {
  display: "Fuel cycle length[Months]",
  fieldName: "fuelCycleLength"
}, {
  display: "Average discharge burnup[MWd/kg]",
  fieldName: "averageDischargeBurnup"
}, {
  display: "Burnable absorber",
  fieldName: "burnableAbsorber"
}, {
  display: "Control rod absorber",
  fieldName: "controlRodAbsorber"
}, {
  display: "Soluble neutron absorber",
  fieldName: "solubleNeutronAbsorber"
}, {
  display: "Inner diameter of cylindrical shell[mm]",
  fieldName: "innerDiameterOfCylindricalShell"
}, {
  display: "Wall thickness of cylindrical shell[mm]",
  fieldName: "wallThicknessOfCylindricalShell"
}, {
  display: "Base material",
  fieldName: "baseMaterial"
}, {
  display: "Total height, inside[mm]",
  fieldName: "totalHeightInside"
}, {
  display: "Transport weight[tonne]",
  fieldName: "transportWeight"
}];
const TABLE_DATA = [{
  acronym: "4S",
  fullName: "Super-safe, small and simple",
  designOrg: "Toshiba Energy Systems & Solutions Corp",
  coolant: "-",
  moderator: "-",
  type: "SFR",
  designStatus: "Under Design",
  country: "Japan",
  neutronSpectrum: "-",
  reactorThermalOutput: "30",
  powerPlantGrossOutput: "-",
  powerPlantNetOutput: "1315",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "Rankine",
  coreCoolant: "-",
  primaryCoolantFlowRate: "",
  reactorOperatingPressure: "0.2",
  coolantInletTemperature: "355",
  coolantOutletTemperature: "-",
  deltaTemperature: "-",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "-",
  numberOfFuelAssemblies: "",
  fuelMaterial: "U-10Zr",
  claddingMaterial: "HT-9",
  enrichmentOfReloadFuel: "17",
  fuelCycleLength: "360",
  averageDischargeBurnup: "34",
  burnableAbsorber: "N/A",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "SS304",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "ALFRED",
  fullName: "Advanced Lead Fast Reactor European Demonstrator",
  designOrg: "Ansaldo Nucleare",
  coolant: "Lead",
  moderator: "No Moderator",
  type: "LFR",
  designStatus: "Under Design",
  country: "EU",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "300",
  powerPlantGrossOutput: "125",
  powerPlantNetOutput: "125",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Lead",
  primaryCoolantFlowRate: "-",
  reactorOperatingPressure: "0.1",
  coolantInletTemperature: "400",
  coolantOutletTemperature: "480",
  deltaTemperature: "80",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "hexahedral",
  numberOfFuelAssemblies: "171",
  fuelMaterial: "MOX",
  claddingMaterial: "-",
  enrichmentOfReloadFuel: "-",
  fuelCycleLength: "-",
  averageDischargeBurnup: "-",
  burnableAbsorber: "-",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "-",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "ELECTRA",
  fullName: "European Lead Cooled Training Reactor",
  designOrg: "KTH",
  coolant: "Lead",
  moderator: "No Moderator",
  type: "LFR",
  designStatus: "Under Design",
  country: "Sweden",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "0.5",
  powerPlantGrossOutput: "-",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Lead",
  primaryCoolantFlowRate: "-",
  reactorOperatingPressure: "-",
  coolantInletTemperature: "400",
  coolantOutletTemperature: "500",
  deltaTemperature: "100",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "-",
  numberOfFuelAssemblies: "-",
  fuelMaterial: "(Pu,Zr)N",
  claddingMaterial: "-",
  enrichmentOfReloadFuel: "-",
  fuelCycleLength: "360",
  averageDischargeBurnup: "-",
  burnableAbsorber: "-",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "-",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "HAPPY200",
  fullName: "Advanced low-Pressurized and Passive SafetY system – 200 MWth",
  designOrg: "SPIC",
  coolant: "-",
  moderator: "H2O",
  type: "PWR",
  designStatus: "Design completed",
  country: "China",
  neutronSpectrum: "-",
  reactorThermalOutput: "200",
  powerPlantGrossOutput: "-",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "-",
  primaryCoolantFlowRate: "1293",
  reactorOperatingPressure: "0.6",
  coolantInletTemperature: "80",
  coolantOutletTemperature: "",
  deltaTemperature: "",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Square",
  numberOfFuelAssemblies: "37",
  fuelMaterial: "UO2",
  claddingMaterial: "Zircaloy-4",
  enrichmentOfReloadFuel: "2.76",
  fuelCycleLength: "18",
  averageDischargeBurnup: "40.0",
  burnableAbsorber: "GD203",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "SS316",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "MBIR",
  fullName: "Multipurpose fast-neutron research reactor",
  designOrg: "NIKIET",
  coolant: "Sodium",
  moderator: "No moderator",
  type: "PVR",
  designStatus: "Under Design",
  country: "Russia",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "150",
  powerPlantGrossOutput: "60",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Sodium",
  primaryCoolantFlowRate: "193",
  reactorOperatingPressure: "0.6",
  coolantInletTemperature: "80",
  coolantOutletTemperature: "",
  deltaTemperature: "",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Round",
  numberOfFuelAssemblies: "37",
  fuelMaterial: "U2",
  claddingMaterial: "SomeAlloy-4",
  enrichmentOfReloadFuel: "2.76",
  fuelCycleLength: "18",
  averageDischargeBurnup: "5.0",
  burnableAbsorber: "GY203",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "SSE16",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "SMART",
  fullName: "System-Integrated Modular Advanced Reactor",
  designOrg: "KAERI",
  coolant: "Light Water",
  moderator: "Light Water",
  type: "PWR",
  designStatus: "Under Design",
  country: "Korea",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "300",
  powerPlantGrossOutput: "40",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Calcium",
  primaryCoolantFlowRate: "338",
  reactorOperatingPressure: "106",
  coolantInletTemperature: "20",
  coolantOutletTemperature: "",
  deltaTemperature: "",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Spherica;",
  numberOfFuelAssemblies: "40",
  fuelMaterial: "TU2",
  claddingMaterial: "SomeAoy-4",
  enrichmentOfReloadFuel: "2.86",
  fuelCycleLength: "78",
  averageDischargeBurnup: "580",
  burnableAbsorber: "YF3",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "HTE16",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "TWRP",
  fullName: "Travelling Wave Reactor-Prototype",
  designOrg: "TerraPower",
  coolant: "Sodium",
  moderator: "No Moderator",
  type: "SFR",
  designStatus: "Under Design",
  country: "USA",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "1475",
  powerPlantGrossOutput: "600",
  powerPlantNetOutput: "600",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "23",
  steamTemperature: "100",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "44",
  thermodynamicCycle: "-",
  coreCoolant: "Farhan Nitrate",
  primaryCoolantFlowRate: "338",
  reactorOperatingPressure: "106",
  coolantInletTemperature: "20",
  coolantOutletTemperature: "",
  deltaTemperature: "alpha",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "gamma",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Beta;",
  numberOfFuelAssemblies: "40",
  fuelMaterial: "TU2",
  claddingMaterial: "SoNyAoy-4",
  enrichmentOfReloadFuel: "66",
  fuelCycleLength: "28",
  averageDischargeBurnup: "50",
  burnableAbsorber: "YRF3",
  controlRodAbsorber: "EE",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "LIB16",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "CFBR",
  fullName: "Commenting For Better Reach",
  designOrg: "LINKEDIN",
  coolant: "Comment",
  moderator: "Author",
  type: "COMMENT",
  designStatus: "Under Design",
  country: "India",
  neutronSpectrum: "Slow",
  reactorThermalOutput: "200",
  powerPlantGrossOutput: "30",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Keyboard",
  primaryCoolantFlowRate: "333",
  reactorOperatingPressure: "667",
  coolantInletTemperature: "880",
  coolantOutletTemperature: "-",
  deltaTemperature: "-",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Weird",
  numberOfFuelAssemblies: "40",
  fuelMaterial: "AU",
  claddingMaterial: "DumAloo-4",
  enrichmentOfReloadFuel: "4.66",
  fuelCycleLength: "22",
  averageDischargeBurnup: "60",
  burnableAbsorber: "ABU77",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "OP0216",
  totalHeightInside: "-",
  transportWeight: "400"
}, {
  acronym: "W-LFR",
  fullName: "Westinghouse Lead-cooled Fast Reactor",
  designOrg: "WestingHouse Electrical Company",
  coolant: "-",
  moderator: "None",
  type: "LFR",
  designStatus: "Under Design",
  country: "USA",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "500",
  powerPlantGrossOutput: "49",
  powerPlantNetOutput: "-",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "-",
  steamTemperature: "",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "",
  thermodynamicCycle: "-",
  coreCoolant: "Pottasium",
  primaryCoolantFlowRate: "888",
  reactorOperatingPressure: "666",
  coolantInletTemperature: "33",
  coolantOutletTemperature: "",
  deltaTemperature: "",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "-",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "Africa",
  numberOfFuelAssemblies: "40",
  fuelMaterial: "TTF-8",
  claddingMaterial: "LomeAo74",
  enrichmentOfReloadFuel: "2.9",
  fuelCycleLength: "78",
  averageDischargeBurnup: "580",
  burnableAbsorber: "YJJF3",
  controlRodAbsorber: "-",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "HYE16",
  totalHeightInside: "-",
  transportWeight: "-"
}, {
  acronym: "VBER-300",
  fullName: "VBER-300",
  designOrg: "OKBM",
  coolant: "LightWater",
  moderator: "No Moderator",
  type: "PWR",
  designStatus: "Under Design",
  country: "RUSSIA",
  neutronSpectrum: "Fast",
  reactorThermalOutput: "175",
  powerPlantGrossOutput: "300",
  powerPlantNetOutput: "200",
  plantEfficiencyNet: "-",
  nonElectricalApplications: "-",
  steamFlowRate: "-",
  steamPressure: "53",
  steamTemperature: "300",
  feedwaterFlowRate: "-",
  feedwaterTemperature: "24",
  thermodynamicCycle: "-",
  coreCoolant: "PreRaju",
  primaryCoolantFlowRate: "445",
  reactorOperatingPressure: "177",
  coolantInletTemperature: "60",
  coolantOutletTemperature: "",
  deltaTemperature: "beta",
  activeCoreHeight: "-",
  equivalentCoreDiameter: "-",
  averageLinearHeatRate: "-",
  averageFuelPowerDensity: "-",
  averageCorePowerDensity: "-",
  outerDiameterFuelRods: "centauri",
  rodArrayOfFuelAssembly: "-",
  latticeGeometry: "crossword;",
  numberOfFuelAssemblies: "40",
  fuelMaterial: "YU2",
  claddingMaterial: "GotyAoy-4",
  enrichmentOfReloadFuel: "96",
  fuelCycleLength: "66",
  averageDischargeBurnup: "90",
  burnableAbsorber: "GGF3",
  controlRodAbsorber: "EE",
  solubleNeutronAbsorber: "-",
  innerDiameterOfCylindricalShell: "-",
  wallThicknessOfCylindricalShell: "-",
  baseMaterial: "BHU77",
  totalHeightInside: "-",
  transportWeight: "-"
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Context/data-context.js



const datacontext = /*#__PURE__*/(0,external_react_.createContext)();

function DataContextProvider(props) {
  const {
    0: searchvalue,
    1: setsearchvalue
  } = (0,external_react_.useState)(TABLE_DATA);

  const setvalues = e => {
    setsearchvalue(e);
  };

  const values = {
    searchvalue,
    setvalues
  };
  return /*#__PURE__*/jsx_runtime_.jsx(datacontext.Provider, {
    value: values,
    children: props.children
  });
}

/* harmony default export */ const data_context = (DataContextProvider);
;// CONCATENATED MODULE: ./src/components/searchAndFilters/Table_header/Filters.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const data = TABLE_DATA;

function Filters() {
  const {
    0: showDropdown,
    1: setshowDropdown
  } = (0,external_react_.useState)({
    load: false,
    option: ''
  });
  const CTX = external_react_default().useContext(datacontext);

  const show = e => {
    e.preventDefault();
    setshowDropdown(pre => {
      return _objectSpread(_objectSpread({}, pre), {}, {
        load: !pre.load,
        option: e.target.name
      });
    });
  };

  const handleCheckbox = e => {
    if (e.target.checked) {
      const filteredData = TABLE_DATA.filter(item => {
        return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase());
      });
      CTX.setvalues(filteredData);
    } else {
      const filteredData = TABLE_DATA.filter(item => {
        return Object.values(item).join('').toLowerCase().includes('');
      });
      CTX.setvalues(filteredData);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TableHeader_module_default()).filter_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: show,
        name: "Type",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (TableHeader_module_default()).btn,
          type: "submit",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TableHeader_module_default()).spn,
            children: "Type"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {})]
        }), showDropdown.load && showDropdown.option === 'Type' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TableHeader_module_default()).dropdown,
          children: data.map((val, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (TableHeader_module_default()).checkbox,
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                onChange: handleCheckbox,
                id: val.type,
                value: val.type,
                style: {
                  margin: '0 8px 0 5px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: val.type,
                children: val.type
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            }, index);
          })
        }) : ""]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: show,
        name: "Country",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (TableHeader_module_default()).btn,
          type: "submit",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TableHeader_module_default()).spn,
            children: "Country"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {})]
        }), showDropdown.load && showDropdown.option === 'Country' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TableHeader_module_default()).dropdown,
          children: data.map((val, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (TableHeader_module_default()).checkbox,
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                onClick: handleCheckbox,
                id: val.country,
                value: val.country,
                style: {
                  margin: '0 8px 0 5px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: val.country,
                children: val.country
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            }, index);
          })
        }) : ""]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: show,
        name: "Status",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (TableHeader_module_default()).btn,
          type: "submit",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TableHeader_module_default()).spn,
            children: "Status"
          }), /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {})]
        }), showDropdown.load && showDropdown.option === 'Status' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TableHeader_module_default()).dropdown,
          children: data.map((val, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (TableHeader_module_default()).checkbox,
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                onClick: handleCheckbox,
                id: val.designStatus,
                value: val.designStatus,
                style: {
                  margin: '0 8px 0 5px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: val.designStatus,
                children: val.designStatus
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            }, index);
          })
        }) : ""]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (TableHeader_module_default()).btn,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (TableHeader_module_default()).spn,
          children: "More Filters"
        })
      })]
    })
  });
}

/* harmony default export */ const Table_header_Filters = (Filters);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/InputBase"
const InputBase_namespaceObject = require("@mui/material/InputBase");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_namespaceObject);
;// CONCATENATED MODULE: ./src/components/searchAndFilters/Table_header/SearchFiled.js









const Search = (0,styles_.styled)('div')(({
  theme
}) => ({
  position: 'relative',
  border: '1px solid #eef3f8',
  marginLeft: '-6px',
  height: '100%',
  width: '20em',
  padding: '4px'
}));
const SearchIconWrapper = (0,styles_.styled)('div')(({
  theme
}) => ({
  padding: theme.spacing(0, 1, 1, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const StyledInputBase = (0,styles_.styled)((InputBase_default()))(({
  theme
}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '18em'
  }
}));

function SearchFiled() {
  const CTX = external_react_.useContext(datacontext);

  const Handlechange = e => {
    const filteredData = TABLE_DATA.filter(item => {
      return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase());
    });
    CTX.setvalues(filteredData);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Search, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SearchIconWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx((Search_default()), {})
      }), /*#__PURE__*/jsx_runtime_.jsx(StyledInputBase, {
        placeholder: "Search",
        inputProps: {
          'aria-label': 'search'
        },
        onChange: Handlechange
      })]
    })
  });
}

/* harmony default export */ const Table_header_SearchFiled = (SearchFiled);
;// CONCATENATED MODULE: external "@mui/icons-material/Map"
const Map_namespaceObject = require("@mui/icons-material/Map");
var Map_default = /*#__PURE__*/__webpack_require__.n(Map_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/TableChart"
const TableChart_namespaceObject = require("@mui/icons-material/TableChart");
var TableChart_default = /*#__PURE__*/__webpack_require__.n(TableChart_namespaceObject);
;// CONCATENATED MODULE: ./src/components/searchAndFilters/Table_header/ShowColumns.js







function ShowColumns() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (TableHeader_module_default()).filter_container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: (TableHeader_module_default()).btn,
      children: [/*#__PURE__*/jsx_runtime_.jsx((TableChart_default()), {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (TableHeader_module_default()).spn,
        children: "Manage Columns"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: (TableHeader_module_default()).btn,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Map_default()), {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (TableHeader_module_default()).spn,
        children: "Show map"
      })]
    })]
  });
}

/* harmony default export */ const Table_header_ShowColumns = (ShowColumns);
;// CONCATENATED MODULE: ./src/components/searchAndFilters/Table_header/TableHeader.js









function TableHeader({
  header
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (TableHeader_module_default()).head,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (TableHeader_module_default()).h4,
          children: header.heading
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (TableHeader_module_default()).h6,
          children: header.items
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (TableHeader_module_default()).table_header,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (TableHeader_module_default()).searchFileds,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Table_header_SearchFiled, {}), /*#__PURE__*/jsx_runtime_.jsx(Table_header_Filters, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Table_header_ShowColumns, {})
        })]
      })]
    })
  });
}

/* harmony default export */ const Table_header_TableHeader = (TableHeader);
;// CONCATENATED MODULE: ./src/components/searchAndFilters/Content.js





function Content({
  itemName,
  length
}) {
  let heading = itemName;
  let items = `${length} Reactors`;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Table_header_TableHeader, {
      header: {
        heading,
        items
      }
    })
  });
}

/* harmony default export */ const searchAndFilters_Content = (Content);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/navigationAndTable/GridNav.js







const GridNav = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.List, {
    className: (TableHeader_module_default()).commaonBorder,
    children: props.data.map(item => /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
      className: (TableHeader_module_default()).sidebar,
      onClick: () => {
        props.name(item.name);
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
        className: (TableHeader_module_default()).sidebar_item_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
          className: (TableHeader_module_default()).svg_container,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: item.iconSrc,
            alt: item.name,
            height: "20",
            width: "25"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
          className: (TableHeader_module_default()).text,
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            style: {
              margin: "0",
              opacity: "0.9"
            },
            variant: "body2",
            gutterBottom: true,
            component: "div",
            children: item.name
          })
        })]
      })
    }, item.key))
  });
};

/* harmony default export */ const navigationAndTable_GridNav = (GridNav);
;// CONCATENATED MODULE: ./nuclear_plants.js
const NUCLEAR_PLANTS = [{
  name: "Plant/Site",
  iconSrc: "/assets/images/technical-navbar/plantsiteBlack.svg",
  key: "nav1"
}, {
  name: "Reactor Unit",
  iconSrc: "/assets/images/technical-navbar/Reactorunit.svg",
  key: "nav2"
}, {
  name: "Nuclear Steam Supply System",
  iconSrc: "/assets/images/technical-navbar/Nuclearstreamsupplysystem.svg",
  key: "nav3"
}, {
  name: "Reactor Coolant System",
  iconSrc: "/assets/images/technical-navbar/Reactorcoolantsystem.svg",
  key: "nav4"
}, {
  name: "Reactor Core",
  iconSrc: "/assets/images/technical-navbar/ReactorCore1.svg",
  key: "nav5"
}, {
  name: "Fuel Cycle",
  iconSrc: "/assets/images/technical-navbar/Fuelcycle.svg",
  key: "nav6"
}, {
  name: "Safety",
  iconSrc: "/assets/images/technical-navbar/Safety.svg",
  key: "nav7"
}];
;// CONCATENATED MODULE: external "@mui/material/Table"
const Table_namespaceObject = require("@mui/material/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableBody"
const TableBody_namespaceObject = require("@mui/material/TableBody");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableCell"
const TableCell_namespaceObject = require("@mui/material/TableCell");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableContainer"
const TableContainer_namespaceObject = require("@mui/material/TableContainer");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableHead"
const TableHead_namespaceObject = require("@mui/material/TableHead");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableRow"
const TableRow_namespaceObject = require("@mui/material/TableRow");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
;// CONCATENATED MODULE: ./src/components/navigationAndTable/TableData.js












function CustomizedTables(props) {
  const {
    0: sortingOrder,
    1: setSortingOrder
  } = (0,external_react_.useState)({
    state: false,
    id: ""
  });
  const {
    tableHeaders,
    length
  } = props;
  const CTX = (0,external_react_.useContext)(datacontext);
  const {
    0: tableData,
    1: setTableData
  } = (0,external_react_.useState)(CTX.searchvalue);
  console.log(sortingOrder);

  const sortBy = (header, i) => {
    let newTable;

    if (sortingOrder.state) {
      newTable = tableData.sort((a, b) => {
        if (a[header] < b[header]) return 1;
        if (a[header] > b[header]) return -1;
        return 0;
      });
    }

    if (!sortingOrder.state) {
      newTable = tableData.sort((a, b) => {
        if (a[header] < b[header]) return -1;
        if (a[header] > b[header]) return 1;
        return 0;
      });
    }

    let newArray = [];

    for (const item of newTable) {
      item["key"] = Math.random() + 2;
      newArray.push(item);
    }

    setTableData(newArray);
    setSortingOrder(prevState => {
      return {
        state: !prevState.state,
        id: i
      };
    });
  };

  const shallowHeadersCopy = tableHeaders.filter((item, i) => {
    return i > 0;
  });
  (0,external_react_.useEffect)(() => {
    setTableData(CTX.searchvalue);
    length(tableData);
  }, [tableData, CTX.searchvalue, sortingOrder]);
  return /*#__PURE__*/jsx_runtime_.jsx((TableContainer_default()), {
    className: (TableHeader_module_default()).table_data,
    component: (Paper_default()),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Table_default()), {
      stickyHeader: true,
      sx: {
        minWidth: 700
      },
      className: "thead",
      "aria-label": "customized table",
      children: [/*#__PURE__*/jsx_runtime_.jsx((TableHead_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((TableRow_default()), {
          children: [/*#__PURE__*/jsx_runtime_.jsx((TableCell_default()), {
            className: (TableHeader_module_default()).heading,
            align: "left",
            style: {
              position: "sticky",
              left: 0,
              background: "white",
              fontWeight: "700",
              zIndex: "10"
            },
            width: "300px",
            component: "th",
            scope: "row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (TableHeader_module_default()).cell_container,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TableHeader_module_default()).heading_name,
                children: "Acronym"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TableHeader_module_default()).sort_btn,
                onClick: () => sortBy("acronym", "i"),
                children: sortingOrder.state ? sortingOrder.id === "i" ? "↑" : "↓" : "↓"
              })]
            })
          }, "i"), shallowHeadersCopy.map((header, i) => /*#__PURE__*/jsx_runtime_.jsx((TableCell_default()), {
            className: (TableHeader_module_default()).heading,
            align: "left",
            width: "300px",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (TableHeader_module_default()).cell_container,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TableHeader_module_default()).heading_name,
                children: header.display
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (TableHeader_module_default()).sort_btn,
                onClick: () => sortBy(header.fieldName, i),
                children: sortingOrder.state ? sortingOrder.id === i ? "↑" : "↓" : "↓"
              })]
            })
          }, i))]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((TableBody_default()), {
        children: tableData.map((row, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((TableRow_default()), {
          children: [/*#__PURE__*/jsx_runtime_.jsx((TableCell_default()), {
            style: {
              position: "sticky",
              left: 0,
              background: "white",
              fontWeight: "700",
              color: "#0067a5"
            },
            component: "th",
            scope: "row",
            width: "300px",
            children: row.acronym
          }), Object.values(row).map((values, i) => i !== 0 ? /*#__PURE__*/jsx_runtime_.jsx((TableCell_default()), {
            align: "left",
            width: "300px",
            children: values
          }, i) : null)]
        }, i))
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/pages/technical-data/index.js











const TechnicalData = props => {
  const [itemName, setitemName] = external_react_default().useState(NUCLEAR_PLANTS[0].name);
  const [length, setlength] = external_react_default().useState(TABLE_DATA);
  return /*#__PURE__*/jsx_runtime_.jsx(data_context, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(navigationAndTable_GridNav, {
          data: NUCLEAR_PLANTS,
          name: setitemName
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        item: true,
        xs: 10,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          style: {
            zIndex: "1"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(searchAndFilters_Content, {
            itemName: itemName,
            length: length.length
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(CustomizedTables, {
            tableHeaders: TABLE_HEADERS,
            length: setlength
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const technical_data = (TechnicalData);

/***/ }),

/***/ 7949:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "TableHeader_head__TZjCO",
	"searchFileds": "TableHeader_searchFileds__uiOB5",
	"table_header": "TableHeader_table_header__SPMNv",
	"h4": "TableHeader_h4__Ut2yE",
	"h6": "TableHeader_h6__zLo6W",
	"filter_container": "TableHeader_filter_container__EMgPo",
	"commaonBorder": "TableHeader_commaonBorder__8sXFu",
	"btn": "TableHeader_btn__xxeuG",
	"spn": "TableHeader_spn__1WU29",
	"dropdown": "TableHeader_dropdown__1ijuI",
	"checkbox": "TableHeader_checkbox__dxBAi",
	"cell_container": "TableHeader_cell_container__oWJZR",
	"sort_btn": "TableHeader_sort_btn__lElHs",
	"heading": "TableHeader_heading__PLe3s",
	"heading_name": "TableHeader_heading_name__vzmhr",
	"table_data": "TableHeader_table_data__xRjjp",
	"sidebar_item_container": "TableHeader_sidebar_item_container__zyTHW",
	"svg_container": "TableHeader_svg_container__ntwd8",
	"text": "TableHeader_text__9hXmA"
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [639,675], () => (__webpack_exec__(698)));
module.exports = __webpack_exports__;

})();