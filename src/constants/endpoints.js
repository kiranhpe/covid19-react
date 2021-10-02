export const getTimeSeriesAPI = () => {
  return "https://data.covid19india.org/v4/min/timeseries.min.json";
};

export const getCovidDataAPI =()=> {
    return 'https://data.covid19india.org/v4/min/data.min.json';
}

export function GetStatesAPI() {
  return "https://cdn-api.co-vin.in/api/v2/admin/location/states";
}