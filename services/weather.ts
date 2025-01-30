import axios from "axios";

export const getWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01db3e95cae7f1594db309dc1324ca56&units=metric`
  );
  return response.data;
};
