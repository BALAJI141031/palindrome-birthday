const inputEl = document.querySelector("#input")

const btnEl = document.querySelector("#btn")

const ouputEl = document.querySelector("#output")


function handledateForZero(newDate) {
    var splitData = newDate.split("-")
    var day = month = splitData[0]
    var month = splitData[1]
    var year = splitData[2]

    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    return `${year}-${month}-${day}`

}



function getNextDate(dateObj) {
    let year = Number(dateObj.year)
    let day = Number(dateObj.day)
    let month = Number(dateObj.month)

    //console.log(day, month, year)

    let isLeapYear = false


    if (year % 4 == 0) {
        isLeapYear = true
    }
    else if (year % 400 == 0) {
        isLeapYear = true

    } else if (year % 100 == 0) {
        isLeapYear = false

    }


    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (isLeapYear) {
        daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    }

    if (day < daysInMonths[month - 1]) {
        day += 1
    } else if ((day === daysInMonths[month - 1]) && (month !== 12)) {
        day = 1
        month = month + 1

    }

    if ((day === 31) && month === 12) {
        day = 1
        month = 1
        year = year + 1
    }



    return `${day}-${month}-${year}`

}





function checkForPolindrome(reversedDate, allFormats) {
    for (let item of allFormats) {
        if (item === reversedDate) {
            return true
        }
    }
    return false

}

function reverseDate(dateObj) {

    var date = dateObj.day + dateObj.month + dateObj.year

    var splitedDate = date.split("")
    var revDate = splitedDate.reverse()

    var joinedRevDate = revDate.join("")

    //console.log(joinedRevDate)
    return joinedRevDate

}


function getAllDateFormats(dateObj) {
    //console.log(dateObj)
    var ddmmyyyy = dateObj.day + dateObj.month + dateObj.year
    // console.log(ddmmyyyy)
    var mmddyyyy = dateObj.month + dateObj.day + dateObj.year

    var yyyymmdd = dateObj.year + dateObj.month + dateObj.day

    var yyyyddmm = dateObj.year + dateObj.day + dateObj.month

    return [ddmmyyyy, mmddyyyy, yyyymmdd, yyyyddmm]

}

function gatDateInObj(date) {
    let splittedData = date.split("-")
    // console.log((date))
    let dateObj = { year: splittedData[0], month: splittedData[1], day: splittedData[2] }
    return dateObj
}


function getDate() {
    let date = inputEl.value

    if (date === "") {
        ouputEl.innerText = "Please give valid data"
    }

    else {

        let dateObj = gatDateInObj(date)

        //console.log(date)

        const allFormats = getAllDateFormats(dateObj)

        const reversedDate = reverseDate(dateObj)
        // console.log(reversedDate)
        // console.log(allFormats)
        //console.log(date)

        const isPolindrome = checkForPolindrome(reversedDate, allFormats)

        if (isPolindrome) {
            //console.log("yayy your birthday is polindrome")
            ouputEl.innerText = `huuu thank you..... your birthday is palindrome as simple as that`

        } else {

            count = 0


            for (let i = 0; i <= count; i++) {

                var newDate = getNextDate(dateObj)



                var handledData = handledateForZero(newDate)

                // console.log(handledData)

                var getHandledDataInObj = gatDateInObj(handledData)

                // console.log(getHandledDataInObj)
                var nextDateAllFormats = getAllDateFormats(getHandledDataInObj)

                console.log(nextDateAllFormats)

                var nextDateReveresed = reverseDate(getHandledDataInObj)
                console.log(nextDateReveresed)

                if (nextDateAllFormats.includes(nextDateReveresed)) {
                    count += 1
                    break
                } else {
                    dateObj = gatDateInObj(handledData)
                    console.log(dateObj)
                    count += 1

                }
            }
            console.log(count)
            ouputEl.innerText = `ohh shitt you missed by ${count} days`

        }





    }
}

btnEl.addEventListener("click", getDate)