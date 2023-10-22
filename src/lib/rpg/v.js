// To parse this data:
//
//   const Convert = require("./file");
//
//   const rPGResource = Convert.toRPGResource(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toRPGResource(json) {
    return cast(JSON.parse(json), r("RPGResource"));
}

function rPGResourceToJson(value) {
    return JSON.stringify(uncast(value, r("RPGResource")), null, 2);
}

function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val, typ, getProps, key = '', parent = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

function l(typ) {
    return { literal: typ };
}

function a(typ) {
    return { arrayItems: typ };
}

function u(...typs) {
    return { unionMembers: typs };
}

function o(props, additional) {
    return { props, additional };
}

function m(additional) {
    return { props: [], additional };
}

function r(name) {
    return { ref: name };
}

const typeMap = {
    "RPGResource": o([
        { json: "wood", js: "wood", typ: r("Iron") },
        { json: "stone", js: "stone", typ: r("Bread") },
        { json: "brick", js: "brick", typ: r("Brick") },
        { json: "meat", js: "meat", typ: r("Bread") },
        { json: "wheat", js: "wheat", typ: r("Brick") },
        { json: "bread", js: "bread", typ: r("Bread") },
        { json: "skin", js: "skin", typ: r("Skin") },
        { json: "leather", js: "leather", typ: r("Leather") },
        { json: "iron", js: "iron", typ: r("Iron") },
        { json: "silver", js: "silver", typ: r("Gold") },
        { json: "gold", js: "gold", typ: r("Gold") },
    ], false),
    "Bread": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "action", js: "action", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "clickIncrement", js: "clickIncrement", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "chanceIncrement", js: "chanceIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: u(undefined, r("BreadCost")) },
        { json: "storage", js: "storage", typ: r("BreadStorage") },
        { json: "chance", js: "chance", typ: u(undefined, r("Chance")) },
    ], false),
    "Chance": o([
        { json: "iron", js: "iron", typ: 0 },
        { json: "silver", js: "silver", typ: 0 },
        { json: "gold", js: "gold", typ: 0 },
    ], false),
    "BreadCost": o([
        { json: "wheat", js: "wheat", typ: 0 },
    ], false),
    "BreadStorage": o([
        { json: "total", js: "total", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: r("PurpleCost") },
        { json: "costIncrease", js: "costIncrease", typ: 3.14 },
    ], false),
    "PurpleCost": o([
        { json: "wood", js: "wood", typ: 0 },
        { json: "stone", js: "stone", typ: 0 },
    ], false),
    "Brick": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "action", js: "action", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "clickIncrement", js: "clickIncrement", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: u(undefined, r("BrickCost")) },
        { json: "storage", js: "storage", typ: r("BrickStorage") },
    ], false),
    "BrickCost": o([
        { json: "stone", js: "stone", typ: 0 },
    ], false),
    "BrickStorage": o([
        { json: "total", js: "total", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: r("FluffyCost") },
        { json: "costIncrease", js: "costIncrease", typ: 3.14 },
    ], false),
    "FluffyCost": o([
        { json: "wood", js: "wood", typ: 0 },
    ], false),
    "Gold": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "chanceIncrement", js: "chanceIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "storage", js: "storage", typ: r("GoldStorage") },
    ], false),
    "GoldStorage": o([
        { json: "total", js: "total", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: r("TentacledCost") },
        { json: "costIncrease", js: "costIncrease", typ: 3.14 },
    ], false),
    "TentacledCost": o([
        { json: "wood", js: "wood", typ: 0 },
        { json: "iron", js: "iron", typ: 0 },
        { json: "gold", js: "gold", typ: 0 },
    ], false),
    "Iron": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "chanceIncrement", js: "chanceIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "storage", js: "storage", typ: r("BreadStorage") },
        { json: "action", js: "action", typ: u(undefined, "") },
        { json: "clickIncrement", js: "clickIncrement", typ: u(undefined, 0) },
    ], false),
    "Leather": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "action", js: "action", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "clickIncrement", js: "clickIncrement", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "cost", js: "cost", typ: r("LeatherCost") },
        { json: "storage", js: "storage", typ: r("BrickStorage") },
    ], false),
    "LeatherCost": o([
        { json: "skin", js: "skin", typ: 0 },
    ], false),
    "Skin": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "total", js: "total", typ: 0 },
        { json: "autoIncrement", js: "autoIncrement", typ: 0 },
        { json: "chanceIncrement", js: "chanceIncrement", typ: 0 },
        { json: "max", js: "max", typ: 0 },
        { json: "storage", js: "storage", typ: r("BrickStorage") },
    ], false),
};

module.exports = {
    "rPGResourceToJson": rPGResourceToJson,
    "toRPGResource": toRPGResource,
};
