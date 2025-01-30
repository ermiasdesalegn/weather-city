import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  cache: Record<string, WeatherData>;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  cache: {},
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { getState }) => {
    const state = getState() as { weather: WeatherState };
    const cachedData = state.weather.cache[city];

    if (cachedData) return cachedData;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01db3e95cae7f1594db309dc1324ca56&units=metric`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.cache[action.payload.name] = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message?.includes("404")) {
          state.error =
            "City not found. Please check the spelling and try again.";
        } else if (action.error.message?.includes("Network Error")) {
          state.error = "Network error. Please check your internet connection.";
        } else {
          state.error = "Failed to fetch weather data. Please try again later.";
        }
      });
  },
});

export default weatherSlice.reducer;
