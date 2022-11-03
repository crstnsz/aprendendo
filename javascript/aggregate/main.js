const list = JSON.parse(`[
    {
      "Value": "Egypt Standard Time",
      "DisplayText": "Africa/Cairo (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Morocco Standard Time",
      "DisplayText": "Africa/Casablanca (+00:00)",
      "IsSelected": false
    },
    {
      "Value": "South Africa Standard Time",
      "DisplayText": "Africa/Johannesburg (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "South Sudan Standard Time",
      "DisplayText": "Africa/Juba (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Sudan Standard Time",
      "DisplayText": "Africa/Khartoum (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "W. Central Africa Standard Time",
      "DisplayText": "Africa/Lagos (+01:00)",
      "IsSelected": false
    },
    {
      "Value": "E. Africa Standard Time",
      "DisplayText": "Africa/Nairobi (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Sao Tome Standard Time",
      "DisplayText": "Africa/Sao_Tome (+00:00)",
      "IsSelected": false
    },
    {
      "Value": "Libya Standard Time",
      "DisplayText": "Africa/Tripoli (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Namibia Standard Time",
      "DisplayText": "Africa/Windhoek (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Aleutian Standard Time",
      "DisplayText": "America/Adak (-10:00)",
      "IsSelected": false
    },
    {
      "Value": "Alaskan Standard Time",
      "DisplayText": "America/Anchorage (-09:00)",
      "IsSelected": false
    },
    {
      "Value": "Tocantins Standard Time",
      "DisplayText": "America/Araguaina (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Argentina Standard Time",
      "DisplayText": "America/Argentina/Buenos_Aires (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Paraguay Standard Time",
      "DisplayText": "America/Asuncion (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "Bahia Standard Time",
      "DisplayText": "America/Bahia (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "SA Pacific Standard Time",
      "DisplayText": "America/Bogota (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "Eastern Standard Time (Mexico)",
      "DisplayText": "America/Cancun (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "Venezuela Standard Time",
      "DisplayText": "America/Caracas (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "SA Eastern Standard Time",
      "DisplayText": "America/Cayenne (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Standard Time",
      "DisplayText": "America/Chicago (-06:00)",
      "IsSelected": false
    },
    {
      "Value": "Mountain Standard Time (Mexico)",
      "DisplayText": "America/Chihuahua (-07:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Brazilian Standard Time",
      "DisplayText": "America/Cuiaba (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "Mountain Standard Time",
      "DisplayText": "America/Denver (-07:00)",
      "IsSelected": false
    },
    {
      "Value": "Turks And Caicos Standard Time",
      "DisplayText": "America/Grand_Turk (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "Central America Standard Time",
      "DisplayText": "America/Guatemala (-06:00)",
      "IsSelected": false
    },
    {
      "Value": "Atlantic Standard Time",
      "DisplayText": "America/Halifax (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "Cuba Standard Time",
      "DisplayText": "America/Havana (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "US Eastern Standard Time",
      "DisplayText": "America/Indiana/Indianapolis (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "SA Western Standard Time",
      "DisplayText": "America/La_Paz (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "Pacific Standard Time",
      "DisplayText": "America/Los_Angeles (-08:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Standard Time (Mexico)",
      "DisplayText": "America/Mexico_City (-06:00)",
      "IsSelected": false
    },
    {
      "Value": "Saint Pierre Standard Time",
      "DisplayText": "America/Miquelon (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Montevideo Standard Time",
      "DisplayText": "America/Montevideo (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Eastern Standard Time",
      "DisplayText": "America/New_York (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "Greenland Standard Time",
      "DisplayText": "America/Nuuk (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "US Mountain Standard Time",
      "DisplayText": "America/Phoenix (-07:00)",
      "IsSelected": false
    },
    {
      "Value": "Haiti Standard Time",
      "DisplayText": "America/Port-au-Prince (-05:00)",
      "IsSelected": false
    },
    {
      "Value": "Magallanes Standard Time",
      "DisplayText": "America/Punta_Arenas (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Canada Central Standard Time",
      "DisplayText": "America/Regina (-06:00)",
      "IsSelected": false
    },
    {
      "Value": "Pacific SA Standard Time",
      "DisplayText": "America/Santiago (-04:00)",
      "IsSelected": false
    },
    {
      "Value": "E. South America Standard Time",
      "DisplayText": "America/Sao_Paulo (-03:00)",
      "IsSelected": false
    },
    {
      "Value": "Newfoundland Standard Time",
      "DisplayText": "America/St_Johns (-03:30)",
      "IsSelected": false
    },
    {
      "Value": "Pacific Standard Time (Mexico)",
      "DisplayText": "America/Tijuana (-08:00)",
      "IsSelected": false
    },
    {
      "Value": "Yukon Standard Time",
      "DisplayText": "America/Whitehorse (-07:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Asia Standard Time",
      "DisplayText": "Asia/Almaty (+06:00)",
      "IsSelected": false
    },
    {
      "Value": "Jordan Standard Time",
      "DisplayText": "Asia/Amman (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Arabic Standard Time",
      "DisplayText": "Asia/Baghdad (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Azerbaijan Standard Time",
      "DisplayText": "Asia/Baku (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "SE Asia Standard Time",
      "DisplayText": "Asia/Bangkok (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "Altai Standard Time",
      "DisplayText": "Asia/Barnaul (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "Middle East Standard Time",
      "DisplayText": "Asia/Beirut (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Transbaikal Standard Time",
      "DisplayText": "Asia/Chita (+09:00)",
      "IsSelected": false
    },
    {
      "Value": "Sri Lanka Standard Time",
      "DisplayText": "Asia/Colombo (+05:30)",
      "IsSelected": false
    },
    {
      "Value": "Syria Standard Time",
      "DisplayText": "Asia/Damascus (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Bangladesh Standard Time",
      "DisplayText": "Asia/Dhaka (+06:00)",
      "IsSelected": false
    },
    {
      "Value": "Arabian Standard Time",
      "DisplayText": "Asia/Dubai (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "West Bank Standard Time",
      "DisplayText": "Asia/Hebron (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "W. Mongolia Standard Time",
      "DisplayText": "Asia/Hovd (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "North Asia East Standard Time",
      "DisplayText": "Asia/Irkutsk (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "Israel Standard Time",
      "DisplayText": "Asia/Jerusalem (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Afghanistan Standard Time",
      "DisplayText": "Asia/Kabul (+04:30)",
      "IsSelected": false
    },
    {
      "Value": "Russia Time Zone 11",
      "DisplayText": "Asia/Kamchatka (+12:00)",
      "IsSelected": false
    },
    {
      "Value": "Pakistan Standard Time",
      "DisplayText": "Asia/Karachi (+05:00)",
      "IsSelected": false
    },
    {
      "Value": "Nepal Standard Time",
      "DisplayText": "Asia/Kathmandu (+05:45)",
      "IsSelected": false
    },
    {
      "Value": "India Standard Time",
      "DisplayText": "Asia/Kolkata (+05:30)",
      "IsSelected": false
    },
    {
      "Value": "North Asia Standard Time",
      "DisplayText": "Asia/Krasnoyarsk (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "Magadan Standard Time",
      "DisplayText": "Asia/Magadan (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "N. Central Asia Standard Time",
      "DisplayText": "Asia/Novosibirsk (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "Omsk Standard Time",
      "DisplayText": "Asia/Omsk (+06:00)",
      "IsSelected": false
    },
    {
      "Value": "North Korea Standard Time",
      "DisplayText": "Asia/Pyongyang (+09:00)",
      "IsSelected": false
    },
    {
      "Value": "Qyzylorda Standard Time",
      "DisplayText": "Asia/Qyzylorda (+05:00)",
      "IsSelected": false
    },
    {
      "Value": "Arab Standard Time",
      "DisplayText": "Asia/Riyadh (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Sakhalin Standard Time",
      "DisplayText": "Asia/Sakhalin (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "Korea Standard Time",
      "DisplayText": "Asia/Seoul (+09:00)",
      "IsSelected": false
    },
    {
      "Value": "China Standard Time",
      "DisplayText": "Asia/Shanghai (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "Singapore Standard Time",
      "DisplayText": "Asia/Singapore (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "Russia Time Zone 10",
      "DisplayText": "Asia/Srednekolymsk (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "Taipei Standard Time",
      "DisplayText": "Asia/Taipei (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "West Asia Standard Time",
      "DisplayText": "Asia/Tashkent (+05:00)",
      "IsSelected": false
    },
    {
      "Value": "Georgian Standard Time",
      "DisplayText": "Asia/Tbilisi (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "Iran Standard Time",
      "DisplayText": "Asia/Tehran (+03:30)",
      "IsSelected": false
    },
    {
      "Value": "Tokyo Standard Time",
      "DisplayText": "Asia/Tokyo (+09:00)",
      "IsSelected": false
    },
    {
      "Value": "Tomsk Standard Time",
      "DisplayText": "Asia/Tomsk (+07:00)",
      "IsSelected": false
    },
    {
      "Value": "Ulaanbaatar Standard Time",
      "DisplayText": "Asia/Ulaanbaatar (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "Vladivostok Standard Time",
      "DisplayText": "Asia/Vladivostok (+10:00)",
      "IsSelected": false
    },
    {
      "Value": "Yakutsk Standard Time",
      "DisplayText": "Asia/Yakutsk (+09:00)",
      "IsSelected": false
    },
    {
      "Value": "Myanmar Standard Time",
      "DisplayText": "Asia/Yangon (+06:30)",
      "IsSelected": false
    },
    {
      "Value": "Ekaterinburg Standard Time",
      "DisplayText": "Asia/Yekaterinburg (+05:00)",
      "IsSelected": false
    },
    {
      "Value": "Caucasus Standard Time",
      "DisplayText": "Asia/Yerevan (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "Azores Standard Time",
      "DisplayText": "Atlantic/Azores (-01:00)",
      "IsSelected": false
    },
    {
      "Value": "Cape Verde Standard Time",
      "DisplayText": "Atlantic/Cape_Verde (-01:00)",
      "IsSelected": false
    },
    {
      "Value": "Greenwich Standard Time",
      "DisplayText": "Atlantic/Reykjavik (+00:00)",
      "IsSelected": false
    },
    {
      "Value": "Cen. Australia Standard Time",
      "DisplayText": "Australia/Adelaide (+09:30)",
      "IsSelected": false
    },
    {
      "Value": "E. Australia Standard Time",
      "DisplayText": "Australia/Brisbane (+10:00)",
      "IsSelected": false
    },
    {
      "Value": "AUS Central Standard Time",
      "DisplayText": "Australia/Darwin (+09:30)",
      "IsSelected": false
    },
    {
      "Value": "Aus Central W. Standard Time",
      "DisplayText": "Australia/Eucla (+08:45)",
      "IsSelected": false
    },
    {
      "Value": "Tasmania Standard Time",
      "DisplayText": "Australia/Hobart (+10:00)",
      "IsSelected": false
    },
    {
      "Value": "Lord Howe Standard Time",
      "DisplayText": "Australia/Lord_Howe (+10:30)",
      "IsSelected": false
    },
    {
      "Value": "W. Australia Standard Time",
      "DisplayText": "Australia/Perth (+08:00)",
      "IsSelected": false
    },
    {
      "Value": "AUS Eastern Standard Time",
      "DisplayText": "Australia/Sydney (+10:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC+12",
      "DisplayText": "Etc/GMT-12 (+12:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC+13",
      "DisplayText": "Etc/GMT-13 (+13:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC-11",
      "DisplayText": "Etc/GMT+11 (-11:00)",
      "IsSelected": false
    },
    {
      "Value": "Dateline Standard Time",
      "DisplayText": "Etc/GMT+12 (-12:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC-02",
      "DisplayText": "Etc/GMT+2 (-02:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC-08",
      "DisplayText": "Etc/GMT+8 (-08:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC-09",
      "DisplayText": "Etc/GMT+9 (-09:00)",
      "IsSelected": false
    },
    {
      "Value": "UTC",
      "DisplayText": "Etc/UTC (+00:00)",
      "IsSelected": false
    },
    {
      "Value": "Astrakhan Standard Time",
      "DisplayText": "Europe/Astrakhan (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "W. Europe Standard Time",
      "DisplayText": "Europe/Berlin (+01:00)",
      "IsSelected": false
    },
    {
      "Value": "GTB Standard Time",
      "DisplayText": "Europe/Bucharest (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Europe Standard Time",
      "DisplayText": "Europe/Budapest (+01:00)",
      "IsSelected": false
    },
    {
      "Value": "E. Europe Standard Time",
      "DisplayText": "Europe/Chisinau (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "Turkey Standard Time",
      "DisplayText": "Europe/Istanbul (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Kaliningrad Standard Time",
      "DisplayText": "Europe/Kaliningrad (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "FLE Standard Time",
      "DisplayText": "Europe/Kiev (+02:00)",
      "IsSelected": false
    },
    {
      "Value": "GMT Standard Time",
      "DisplayText": "Europe/London (+00:00)",
      "IsSelected": false
    },
    {
      "Value": "Belarus Standard Time",
      "DisplayText": "Europe/Minsk (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Russian Standard Time",
      "DisplayText": "Europe/Moscow (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Romance Standard Time",
      "DisplayText": "Europe/Paris (+01:00)",
      "IsSelected": false
    },
    {
      "Value": "Russia Time Zone 3",
      "DisplayText": "Europe/Samara (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "Saratov Standard Time",
      "DisplayText": "Europe/Saratov (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "Volgograd Standard Time",
      "DisplayText": "Europe/Volgograd (+03:00)",
      "IsSelected": false
    },
    {
      "Value": "Central European Standard Time",
      "DisplayText": "Europe/Warsaw (+01:00)",
      "IsSelected": false
    },
    {
      "Value": "Mauritius Standard Time",
      "DisplayText": "Indian/Mauritius (+04:00)",
      "IsSelected": false
    },
    {
      "Value": "Samoa Standard Time",
      "DisplayText": "Pacific/Apia (+13:00)",
      "IsSelected": false
    },
    {
      "Value": "New Zealand Standard Time",
      "DisplayText": "Pacific/Auckland (+12:00)",
      "IsSelected": false
    },
    {
      "Value": "Bougainville Standard Time",
      "DisplayText": "Pacific/Bougainville (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "Chatham Islands Standard Time",
      "DisplayText": "Pacific/Chatham (+12:45)",
      "IsSelected": false
    },
    {
      "Value": "Easter Island Standard Time",
      "DisplayText": "Pacific/Easter (-06:00)",
      "IsSelected": false
    },
    {
      "Value": "Fiji Standard Time",
      "DisplayText": "Pacific/Fiji (+12:00)",
      "IsSelected": false
    },
    {
      "Value": "Central Pacific Standard Time",
      "DisplayText": "Pacific/Guadalcanal (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "Hawaiian Standard Time",
      "DisplayText": "Pacific/Honolulu (-10:00)",
      "IsSelected": false
    },
    {
      "Value": "Line Islands Standard Time",
      "DisplayText": "Pacific/Kiritimati (+14:00)",
      "IsSelected": false
    },
    {
      "Value": "Marquesas Standard Time",
      "DisplayText": "Pacific/Marquesas (-09:30)",
      "IsSelected": false
    },
    {
      "Value": "Norfolk Standard Time",
      "DisplayText": "Pacific/Norfolk (+11:00)",
      "IsSelected": false
    },
    {
      "Value": "West Pacific Standard Time",
      "DisplayText": "Pacific/Port_Moresby (+10:00)",
      "IsSelected": false
    },
    {
      "Value": "Tonga Standard Time",
      "DisplayText": "Pacific/Tongatapu (+13:00)",
      "IsSelected": false
    }
  ]`);

  const values = list.reduce((acumulador, item) => {
    let found = false;

    const changed = acumulador.map(x => {
        if (x.key === item.Value) {
            found = true;
            return {key: item.Value, count: x.count + 1}
        }
        else {
            return x
        }
    })

    return found ? changed : [...changed, {key: item.Value, count: 1}];
  }, []);

for(var n of values.filter(x => x.count > 1)) {
    console.log(n);
}