const dataSets = [
    {
      "height": 145,
      "distance": 0,
      "surface": "SAND",
      "maxSpeed": "SLOW"
    },
    {
      "height": 157,
      "distance": 1595,
      "surface": "SAND",
      "maxSpeed": "SLOW"
    },
    {
      "height": 134,
      "distance": 2399,
      "surface": "SAND",
      "maxSpeed": "SLOW"
    },
    {
      "height": 206,
      "distance": 3310,
      "surface": "ASPHALT",
      "maxSpeed": "FAST"
    },
    {
      "height": 124,
      "distance": 4221,
      "surface": "ASPHALT",
      "maxSpeed": "FAST"
    },
    {
      "height": 170,
      "distance": 4978,
      "surface": "GROUND",
      "maxSpeed": "NORMAL"
    },
    {
      "height": 240,
      "distance": 5142,
      "surface": "GROUND",
      "maxSpeed": "NORMAL"
    },
    {
      "height": 210,
      "distance": 6283,
      "surface": "ASPHALT",
      "maxSpeed": "FAST"
    },
    {
      "height": 200,
      "distance": 6876,
      "surface": "ASPHALT",
      "maxSpeed": "FAST"
    }
]

export const data = dataSets.sort((a, b) => a.distance - b.distance)