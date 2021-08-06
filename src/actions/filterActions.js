export const setSortAction = (sort) => ({
    type: 'SET_SORT',
    sort
})
export const setAreaText = (text) => ({
    type: 'SET_AREA_TEXT',
    text
})
export const setWithImage = (withImage) => {
    console.log(withImage)
    return ({
        type: 'SET_WITH_IMAGE',
        withImage
    })
}
export const setCityText = (city) => ({
    type: 'SET_CITY_TEXT',
    city
})
export const setStreetText = (street) => ({
    type: 'SET_STREET_TEXT',
    street
})
export const setTypesAction = (types) => ({
    type: 'SET_TYPES',
    types
})
export const setRoomsFromAction = (rooms) => ({
    type: 'SET_ROOMS_FROM',
    roomsFrom: rooms
})
export const setRoomsToAction = (rooms) => ({
    type: 'SET_ROOMS_TO',
    roomsTo: rooms
})
export const setFloorsFromAction = (floors) => ({
    type: 'SET_FLOORS_FROM',
    floorsFrom: floors
})
export const setFloorsToAction = (floors) => ({
    type: 'SET_FLOORS_TO',
    floorsTo: floors
})
export const setSizeMrFrom = (size) => ({
    type: 'SET_SIZE_MR_FROM',
    sizeFrom: size
})
export const setSizeMrTo = (size) => ({
    type: 'SET_SIZE_MR_TO',
    sizeTo: size
})
export const setPriceFrom = (price) => ({
    type: 'SET_PRICE_FROM',
    fromPrice: price
})
export const setPriceTo = (price) => ({
    type: 'SET_PRICE_TO',
    toPrice: price
})
export const setEntryDate = (entryDate) => ({
    type: 'SET_ENTRY_DATE',
    entryDate
})
export const setAirConditionAction = (airCondition) => ({
    type: "SET_AIR_CONDITION",
    airCondition
});
export const setMamadAction = (mamad) => ({
    type: "SET_MAMAD",
    mamad
});
export const setWarehouseAction = (warehouse) => ({
    type: "SET_WAREHOUSE",
    warehouse
});
export const setPandorAction = (pandor) => ({
    type: "SET_PANDOR",
    pandor
});
export const setFurnishedAction = (furnished) => ({
    type: "SET_FURNISHED",
    furnished
});
export const setAccessibleAction = (accessible) => ({
    type: "SET_ACCESSIBLE",
    accessible
});
export const setElevatorAction = (elevator) => ({
    type: "SET_ELEVATOR",
    elevator
});
export const setTadiranAction = (tadiran) => ({
    type: "SET_TADIRAN",
    tadiran
});
export const setRemakedAction = (remaked) => ({
    type: "SET_REMAKED",
    remaked
});
export const setKasherAction = (kasher) => ({
    type: "SET_KASHER",
    kasher
});
export const setSunEnergyAction = (sunEnergy) => ({
    type: "SET_SUN_ENERGY",
    sunEnergy
});
export const setBarsAction = (bars) => ({
    type: "SET_BARS",
    bars
});
export const setImmidiateAction = (immidiate) => ({
    type: 'SET_IMMIDIATE',
    immidiate
})
export const setFreeText = (freeText) => ({
    type: 'SET_FREE_TEXT',
    freeText
})
export const clearAllFilter = () => ({
    type: 'CLEAR_ALL_FILTERS'
})