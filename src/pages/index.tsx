import { LoadingComponent } from "@/components/LoadingComponent";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorComponent } from "../src/components/ErrorComponent";
import { useAppDispatch, useAppSelector } from "../store/store"; // Updated import
import { fetchWeather } from "../store/weatherSlice";

export default function Home() {
  const [city, setCity] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.weather);
  // const error = useAppSelector((state) => state.weather.error); // Get error from Redux

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city))
        .unwrap()
        .then(() => router.push(`/weather/${city}`))
        .catch(() => {
          /* Error handled in redux */
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md transform transition-all hover:shadow-2xl">
          <form onSubmit={handleSearch} className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              City Weather
            </h1>

            <div className="space-y-4">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="w-full px-4 py-3 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Search
              </button>
            </div>

            {error && (
              <div className="mt-6">
                <ErrorComponent message={error} />
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
