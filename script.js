// Function to calculate and display results
function calculateValues() {
    // Get input values
    let currentPeriod = parseInt(document.getElementById("currentPeriod").value);
    let currentNumber = parseInt(document.getElementById("currentNumber").value);
    let lastPeriod = parseInt(document.getElementById("lastPeriod").value);
    let lastNumber = parseInt(document.getElementById("lastNumber").value);

    let currentNumberInput = document.getElementById("currentNumber");
    if ([4, 5, 9].includes(currentNumber)) {
        currentNumberInput.style.backgroundColor = "red";
    } else if ([0, 1].includes(currentNumber)) {
        currentNumberInput.style.backgroundColor = "yellow";
    } else {
        currentNumberInput.style.backgroundColor = "white";
    }

    let arr = [currentPeriod, currentNumber, lastPeriod, lastNumber];
    console.log("Number was: ", arr);

    // ----------------------------------Two Sum----------------------------------
    let TwoSum = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            if (arr[i] === 0 || arr[j] === 0) continue;
            TwoSum.push(arr[i] + arr[j]);
        }
    }

    // ----------------------------------Three Sum----------------------------------
    let ThreeSum = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            for (let k = j + 1; k < 4; k++) {
                if (arr[i] === 0 || arr[j] === 0 || arr[k] === 0) continue;
                ThreeSum.push(arr[i] + arr[j] + arr[k]);
            }
        }
    }

    // ---------------------------------- All Sum Array----------------------------------
    let finalArr = arr.concat(TwoSum, ThreeSum);
    console.log("Sum of all arr: ", finalArr);

    let digit_sums = finalArr.map(n => n.toString().split('').reduce((sum, d) => sum + parseInt(d), 0));
    console.log("Digit sums of final array:", digit_sums);

    // -----------------String Array Remove-----------------
    let total = arr.reduce((a, b) => a + b, 0);

    let index = digit_sums.indexOf(total);
    if (index !== -1) {
        digit_sums.splice(index, 1);
    }
    console.log(digit_sums);

    // ----------------------------------Remove data----------------------------------
    let remove_values = [2, 3, 6, 7, 8];
    let finall = digit_sums.filter(n => !remove_values.includes(n));
    console.log("Filtered digit sums (not in remove_values):", finall);

    // Display finall (Filtered Array) in the output section
    document.getElementById("finallResult").innerText = finall.join(", ");

    // Removed the incorrect styling logic for finallResult

    // -----------------One digit Conversion-----------------
    let totall = total.toString();
    let val;
    if (totall.length === 2) {
        val = parseInt(totall[0]) + parseInt(totall[1]);
    } else {
        val = parseInt(totall);
    }
    // console.log(val);

    // Display val (One Digit Conversion) in the output section


    // Display size based on total value
    let sizeResult = (val >= 5 && val <= 10) ? "B" : "S";

    document.getElementById("valResult").innerText = `${val} ${sizeResult}`;
    // Alternate B/S pattern generation
    let patternStart = (sizeResult === "S") ? "B" : "S";
    let alternateArray = [];
    for (let i = 0; i < finall.length; i++) {
        alternateArray.push(i % 2 === 0 ? patternStart : (patternStart === "B" ? "S" : "B"));
    }
    let lastValue = alternateArray[alternateArray.length - 1];
    document.getElementById("finalSizeResult").innerHTML = `${alternateArray.join(", ")} <strong style="font-size: 24px; color:rgb(0, 102, 255); font-weight: bold;">${lastValue}</strong>`;

    // Add correct styling logic for valResult
    let valResultElement = document.getElementById("valResult");
    if ([4, 5, 9].includes(val)) {
        valResultElement.style.backgroundColor = "red";
    } else {
        valResultElement.style.backgroundColor = "white";
    }
}

// Event listeners to trigger calculation on button click
// Removed input event listeners as they are no longer needed

// Initial calculation when the page loads
calculateValues();

document.getElementById("currentPeriod").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.getElementById("currentNumber").focus();
    }
});

document.getElementById("currentNumber").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.getElementById("lastPeriod").focus();
    }
});

document.getElementById("lastPeriod").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.getElementById("lastNumber").focus();
    }
});

document.getElementById("lastNumber").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        calculateValues();
    }
});

["currentPeriod", "currentNumber", "lastPeriod", "lastNumber"].forEach(id => {
    document.getElementById(id).addEventListener("focus", function(e) {
        let input = e.target;
        let val = input.value;
        input.value = '';
        input.value = val;
    });
});

// Restrict input to single digits (0–9)
["currentPeriod", "currentNumber", "lastPeriod", "lastNumber"].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", function (e) {
        const val = e.target.value;
        if (!/^[0-9]$/.test(val)) {
            e.target.value = "";
        }
    });
});

function resetInputs() {
    document.getElementById("currentPeriod").value = "";
    document.getElementById("currentNumber").value = "";
    document.getElementById("lastPeriod").value = "";
    document.getElementById("lastNumber").value = "";
    document.getElementById("currentNumber").style.backgroundColor = "white";
    document.getElementById("valResult").innerText = "";
    document.getElementById("valResult").style.backgroundColor = "white";
    document.getElementById("finallResult").innerText = "";
    document.getElementById("sizeResult").innerText = "";
    document.getElementById("finalSizeResult").innerHTML = "";
}