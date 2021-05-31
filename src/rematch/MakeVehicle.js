const MakeVehicle = (color) => {
    const vehicle = 4;

    return {
        numberOfVehicle: getVehicleByColor(4)
    }
}

const getVehicleByColor = (color) => {
    if (color == 'blue') {
        return 2
    } else {
        return 4
    }
}

export default MakeVehicle;
