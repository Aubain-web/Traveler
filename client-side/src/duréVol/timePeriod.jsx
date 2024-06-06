

const TimePeriod = () => {

    const dict = {
        "PT1H": "1h 00m",
        "PT1H5M": "1h 05m",
        "PT1H10M": "1h 10m",
        "PT1H15M": "1h 15m",
        "PT1H20M": "1h 20m",
        "PT1H25M": "1h 25m",
        "PT1H30M": "1h 30m",
        "PT1H35M": "1h 35m",
        "PT1H40M": "1h 40m",
        "PT1H45M": "1h 45m",
        "PT1H50M": "1h 50m",
        "PT1H55M": "1h 55m",
        "PT2H": "2h 00m",
        "PT2H5M": "2h 05m",
        "PT2H10M": "2h 10m",
        "PT2H15M": "2h 15m",
        "PT2H20M": "2h 20m",
        "PT2H25M": "2h 25m",
        "PT2H30M": "2h 30m",
        "PT2H35M": "2h 35m",
        "PT2H40M": "2h 40m",
        "PT2H45M": "2h 45m",
        "PT2H50M": "2h 50m",
        "PT2H55M": "2h 55m",
        "PT3H": "3h 00m",
        "PT3H5M": "3h 05m",
        "PT3H10M": "3h 10m",
        "PT3H15M": "3h 15m",
        "PT3H20M": "3h 20m",
        "PT3H25M": "3h 25m",
        "PT3H30M": "3h 30m",
        "PT3H35M": "3h 35m",
        "PT3H40M": "3h 40m",
        "PT3H45M": "3h 45m",
        "PT3H50M": "3h 50m",
        "PT3H55M": "3h 55m",
        "PT4H": "4h 00m",
        "PT4H5M": "4h 05m",
        "PT4H10M": "4h 10m",
        "PT4H15M": "4h 15m",
        "PT4H20M": "4h 20m",
        "PT4H25M": "4h 25m",
        "PT4H30M": "4h 30m",
        "PT4H35M": "4h 35m",
        "PT4H40M": "4h 40m",
        "PT4H45M": "4h 45m",
        "PT4H50M": "4h 50m",
        "PT4H55M": "4h 55m",
        "PT5H": "5h 00m",
        "PT5H5M": "5h 05m",
        "PT5H10M": "5h 10m",
        "PT5H15M": "5h 15m",
        "PT5H20M": "5h 20m",
    };

    const time = {};
    for(const key in dict){
        time[key] = dict[key];
    }
    return time;
}

export default TimePeriod;