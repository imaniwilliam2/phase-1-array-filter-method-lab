function findMatching(driverNamesArray, stringToMatch){
    return driverNamesArray.filter(driverName => {
        return driverName.toLowerCase() === stringToMatch.toLowerCase()
    })

}

function fuzzyMatch(driversNamesArray, stringToMatch){
    return driversNamesArray.filter((driverName) => {
        return driverName.slice(0, stringToMatch.length) === stringToMatch})
}

function matchName(driverNameObject, stringToMatch){
    return driverNameObject.filter(driverObject => {
        return driverObject.name.toLowerCase() === stringToMatch.toLowerCase()
    })

}




