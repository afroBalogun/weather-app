export type Day = {
  date: string;
  day: {
    maxtemp_c: number,
    mintemp_c: number,
    maxtemp_f: number,
    mintemp_f: number,
    condition: {
      text: string,
      icon: string,
    }
  }
  hour: [
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    },
    {
      time: string,
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    }
  ]
}



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
      wind_mph: number,
      wind_kph: number,
      wind_degree: number,
      wind_dir: string,
      pressure_mb: string
    }
    
    forecast?:{
      forecastday?:[
        Day,
        Day,
        Day,
        Day,
        Day,
        Day,
        Day,
      ]
    };
  }

  export type SetSearchedLocation = React.Dispatch<React.SetStateAction<string>>;
