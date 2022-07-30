const baseUrl = "http://ergast.com/api/f1/drivers.json"; // http://ergast.com/api/f1/drivers<driverId>
const searchInput = document.getElementById("search");
console.log("Hello...");
const searchDiv = document.getElementById("searchContainer");

function getdriverId(e) {
    e.preventDefault();
    console.log(searchInput.value);
    fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(
                data.MRData.DriverTable.Drivers.filter(
                    (driver) =>
                        driver.familyName.toLowerCase() === searchInput.value.toLowerCase()
                )[0]
            );

            const driverResult = data.MRData.DriverTable.Drivers.filter(
                (driver) =>
                    driver.familyName
                        .toLowerCase()
                        .includes(searchInput.value.toLowerCase())[0],
                givenName,
                dateOfBirth,
                nationality
            );
        });
        .catch(error => (console.log(`Error: ${error}`)))

        if (driver => driver.familyName === searchInput.value) {
            console.log(baseUrl)
        } else {
            console.log("Error! Who sent you?")
        }
}



