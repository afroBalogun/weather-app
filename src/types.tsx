export interface WeatherInfo  {
    location?: {
      name: string;
      region: string;
      country: string;
      lat: number
      lon: number
      localtime: string
    };
    current?: {
      temp_c: number;
      temp_f: number,
      condition: {
        text: string;
        icon: string;
      }
      humidity: number,
    };
  }