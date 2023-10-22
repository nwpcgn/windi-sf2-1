let data = {
  wood: {
    slug: "wood",
    name: "Wood",
    description: "Brown stuff that grows on trees.",
    action: "Chop",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 50,
        stone: 50,
      },
      costIncrease: 1.1,
    },
  },
  stone: {
    slug: "stone",
    name: "Stone",
    description: "Hard stuff.",
    action: "Mine",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 50,
        stone: 50,
      },
      costIncrease: 1.1,
    },
    chance: {
      iron: 30,
      silver: 10,
      gold: 5,
    },
  },
  brick: {
    slug: "brick",
    name: "Brick",
    description: "Like rocks but square.",
    action: "Make",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    max: 100,
    cost: {
      stone: 2,
    },
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 100,
      },
      costIncrease: 1.1,
    },
  },
  meat: {
    slug: "meat",
    name: "Meat",
    description: "Can be cooked to provide nutrition.",
    action: "Hunt",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 50,
        stone: 50,
      },
      costIncrease: 1.1,
    },
  },
  wheat: {
    slug: "wheat",
    name: "Wheat",
    description: "Grows upwards.",
    action: "Harvest",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    max: 0,
    storage: {
      total: 0,
      max: 500,
      cost: {
        wood: 1000,
      },
      costIncrease: 1.1,
    },
  },
  bread: {
    slug: "bread",
    name: "Bread",
    description: "Another version of food.",
    action: "Bake",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    cost: {
      wheat: 4,
    },
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 50,
        stone: 50,
      },
      costIncrease: 1.1,
    },
  },
  skin: {
    slug: "skin",
    name: "Skin",
    description: "The thing that covers animals.",
    total: 0,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 50,
    storage: {
      total: 1,
      max: 50,
      cost: {
        wood: 100,
      },
      costIncrease: 1.2,
    },
  },
  leather: {
    slug: "leather",
    name: "Leather",
    description: "Nice skin.",
    action: "Make",
    total: 0,
    clickIncrement: 1,
    autoIncrement: 0,
    max: 100,
    cost: {
      skin: 2,
    },
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 100,
      },
      costIncrease: 1.1,
    },
  },
  iron: {
    slug: "iron",
    name: "Iron",
    description: "Even harder stuff. Bit rusty.",
    total: 0,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 100,
        stone: 100,
      },
      costIncrease: 1.1,
    },
  },
  silver: {
    slug: "silver",
    name: "Silver",
    description: "Shiney...",
    total: 0,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 300,
        iron: 500,
        gold: 10,
      },
      costIncrease: 1.2,
    },
  },
  gold: {
    slug: "gold",
    name: "Gold",
    description: "Fancy!",
    total: 0,
    autoIncrement: 0,
    chanceIncrement: 1,
    max: 100,
    storage: {
      total: 1,
      max: 100,
      cost: {
        wood: 350,
        iron: 600,
        gold: 20,
      },
      costIncrease: 1.3,
    },
  },
};

let schema = {
  $schema: "http://json-schema.org/draft-06/schema#",
  $ref: "#/definitions/Resource",
  definitions: {
    Resource: {
      type: "object",
      additionalProperties: false,
      properties: {
        slug: {
          type: "string",
        },
        name: {
          type: "string",
        },
        description: {
          type: "string",
        },
        action: {
          type: "string",
        },
        total: {
          type: "integer",
        },
        clickIncrement: {
          type: "integer",
        },
        autoIncrement: {
          type: "integer",
        },
        chanceIncrement: {
          type: "integer",
        },
        max: {
          type: "integer",
        },
        cost: {
          $ref: "#/definitions/ResourceCost",
        },
        storage: {
          $ref: "#/definitions/Storage",
        },
      },
      required: [],
      title: "Resource",
    },
    ResourceCost: {
      type: "object",
      additionalProperties: false,
      properties: {
        wheat: {
          type: "integer",
        },
      },
      required: [],
      title: "ResourceCost",
    },
    Storage: {
      type: "object",
      additionalProperties: false,
      properties: {
        total: {
          type: "integer",
        },
        max: {
          type: "integer",
        },
        cost: {
          $ref: "#/definitions/StorageCost",
        },
        costIncrease: {
          type: "number",
        },
      },
      required: [],
      title: "Storage",
    },
    StorageCost: {
      type: "object",
      additionalProperties: false,
      properties: {
        wood: {
          type: "integer",
        },
        stone: {
          type: "integer",
        },
      },
      required: [],
      title: "StorageCost",
    },
  },
};
