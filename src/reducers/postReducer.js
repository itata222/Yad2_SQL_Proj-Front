export const postInitialState = {
    propType: '',
    condition: '',
    city: '',
    street: '',
    houseNumber: -1,
    floor: -1,
    floorsInBuilding: -1,
    onBars: false,
    neighborhood: '',
    area: '',
    rooms: -1,
    parking: -1,
    balcony: -1,
    airCondition: false,
    mamad: false,
    warehouse: false,
    pandor: false,
    furnished: false,
    accessible: false,
    elevator: false,
    tadiran: false,
    remaked: false,
    kasher: false,
    sunEnergy: false,
    bars: false,
    description: '',
    buildMr: -1,
    totalMr: -1,
    price: -1,
    entryDate: -1,
    immidiate: false,
    photos: [],
    video: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''

};

const postReducer = (post, action) => {
    switch (action.type) {
        case "CLEAR_POST":
            return { ...postInitialState }
        case "UPDATE_PROP_TYPE":
            return { ...post, propType: action.propType };
        case "UPDATE_CONDITION":
            return { ...post, condition: action.condition };
        case "UPDATE_CITY":
            return { ...post, city: action.city };
        case "UPDATE_STREET":
            return { ...post, street: action.street };
        case "UPDATE_HOUSE_NUMBER":
            return { ...post, houseNumber: action.houseNumber };
        case "UPDATE_FLOOR":
            return { ...post, floor: action.floor };
        case "UPDATE_FLOORS_IN_BUILDING":
            return { ...post, floorsInBuilding: action.floorsInBuilding };
        case "UPDATE_ON_BARS":
            return { ...post, onBars: action.onBars };
        case "UPDATE_NEIGHBORHOOD":
            return { ...post, neighborhood: action.neighborhood };
        case "UPDATE_AREA":
            return { ...post, area: action.area };
        case "UPDATE_ROOMS":
            return { ...post, rooms: action.rooms };
        case "UPDATE_PARKING":
            return { ...post, parking: action.parking };
        case "UPDATE_BALCONY":
            return { ...post, balcony: action.balcony };
        case "UPDATE_AIR_CONDITION":
            return { ...post, airCondition: action.airCondition };
        case "UPDATE_MAMAD":
            return { ...post, mamad: action.mamad };
        case "UPDATE_WAREHOUSE":
            return { ...post, warehouse: action.warehouse };
        case "UPDATE_PANDOR":
            return { ...post, pandor: action.pandor };
        case "UPDATE_FURNISHED":
            return { ...post, furnished: action.furnished };
        case "UPDATE_ACCESSIBLE":
            return { ...post, accessible: action.accessible };
        case "UPDATE_ELEVATOR":
            return { ...post, elevator: action.elevator };
        case "UPDATE_TADIRAN":
            return { ...post, tadiran: action.tadiran };
        case "UPDATE_REMAKED":
            return { ...post, remaked: action.remaked };
        case "UPDATE_KASHER":
            return { ...post, kasher: action.kasher };
        case "UPDATE_SUN_ENERGY":
            return { ...post, sunEnergy: action.sunEnergy };
        case "UPDATE_BARS":
            return { ...post, bars: action.bars };
        case "UPDATE_DESCRIPTION":
            return { ...post, description: action.description };
        case "UPDATE_BUILD_MR":
            return { ...post, buildMr: action.buildMr };
        case "UPDATE_TOTAL_MR":
            return { ...post, totalMr: action.totalMr };
        case "UPDATE_PRICE":
            return { ...post, price: action.price };
        case "UPDATE_ENTRY_DATE":
            return { ...post, entryDate: action.entryDate };
        case "UPDATE_IMMIDIATE":
            return { ...post, entryDate: action.immidiate === true ? new Date() : action.entryDate, immidiate: action.immidiate };
        case "UPDATE_PHOTOS":
            return { ...post, photos: action.photos };
        case "UPDATE_VIDEO":
            return { ...post, video: action.video };
        case "UPDATE_CONTACT_NAME":
            return { ...post, contactName: action.contactName };
        case "UPDATE_CONTACT_PHONE":
            return { ...post, contactPhone: action.contactPhone };
        case "UPDATE_CONTACT_EMAIL":
            return { ...post, contactEmail: action.contactEmail };
        default:
            return { ...post };
    }
};

export default postReducer;