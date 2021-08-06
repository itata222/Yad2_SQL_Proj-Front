export const filtersInitialState = {
    sort: null,
    types: []
};

const filtersReducer = (filters, action) => {
    switch (action.type) {
        case 'CLEAR_ALL_FILTERS':
            return filtersInitialState;
        case 'SET_SORT':
            return { ...filters, sort: action.sort };
        case 'SET_WITH_IMAGE':
            return { ...filters, withImage: action.withImage }
        case 'SET_PRICE_FROM':
            return { ...filters, fromPrice: action.fromPrice };
        case 'SET_PRICE_TO':
            return { ...filters, toPrice: action.toPrice };
        case 'SET_AREA_TEXT':
            return { ...filters, text: action.text };
        case 'SET_CITY_TEXT':
            return { ...filters, city: action.city }
        case 'SET_STREET_TEXT':
            return { ...filters, street: action.street }
        case 'SET_TYPES':
            return { ...filters, types: action.types };
        case 'SET_ROOMS_FROM':
            return { ...filters, roomsFrom: action.roomsFrom };
        case 'SET_ROOMS_TO':
            return { ...filters, roomsTo: action.roomsTo };
        case 'SET_FLOORS_FROM':
            return { ...filters, floorsFrom: action.floorsFrom };
        case 'SET_FLOORS_TO':
            return { ...filters, floorsTo: action.floorsTo };
        case "SET_AIR_CONDITION":
            return { ...filters, airCondition: action.airCondition };
        case "SET_MAMAD":
            return { ...filters, mamad: action.mamad };
        case "SET_WAREHOUSE":
            return { ...filters, warehouse: action.warehouse };
        case "SET_PANDOR":
            return { ...filters, pandor: action.pandor };
        case "SET_FURNISHED":
            return { ...filters, furnished: action.furnished };
        case "SET_ACCESSIBLE":
            return { ...filters, accessible: action.accessible };
        case "SET_ELEVATOR":
            return { ...filters, elevator: action.elevator };
        case "SET_TADIRAN":
            return { ...filters, tadiran: action.tadiran };
        case "SET_REMAKED":
            return { ...filters, remaked: action.remaked };
        case "SET_KASHER":
            return { ...filters, kasher: action.kasher };
        case "SET_SUN_ENERGY":
            return { ...filters, sunEnergy: action.sunEnergy };
        case "SET_BARS":
            return { ...filters, bars: action.bars };
        case 'SET_SIZE_MR_FROM':
            return { ...filters, sizeFrom: action.sizeFrom }
        case 'SET_SIZE_MR_TO':
            return { ...filters, sizeTo: action.sizeTo }
        case 'SET_ENTRY_DATE':
            return { ...filters, entryDate: action.entryDate }
        case 'SET_IMMIDIATE':
            return { ...filters, immidiate: action.immidiate }
        case 'SET_FREE_TEXT':
            return { ...filters, freeText: action.freeText }
        default:
            return { ...filters };
    }
};

export default filtersReducer;