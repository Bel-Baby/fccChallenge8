/* //-- Bubble Sort --//
const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    //buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault()
    event.preventDefault();
    //Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));//Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).

    //In your sortInputArray() function, declare a sortedValues variable. Assign it the value of calling bubbleSort with your inputValues array.
    const sortedValues = bubbleSort(inputValues);
    //Call your updateUI() function and pass inputValues as the argument.
    //updateUI(inputValues);
    //Then, update your updateUI call to pass sortedValues as the argument.
    updateUI(sortedValues);
}

//Using arrow syntax declare an updateUI function that takes a single array parameter.Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

const bubbleSort = (array) => {
    //You'll need to iterate through the array. For simplicity, use a for loop to do so.
    for (let i = 0; i < array.length; i++) {
        //Because you need to compare elements, you'll need to use a nested for loop. This loop should iterate through every element in the array except the last one. Use j as your inner loop's iterator variable.
        for (let j = 0; j < array.length - 1; j++) {
            //For debugging purposes, add a console.log() call in your inner loop. Pass it the arguments array, array[j], and array[j+1].
            console.log(array, array[j], array[j + 1]);

            //To achieve the "bubble up" result, you need to check if the current element is larger than the next element. You can do this by accessing the array at j and j+1
            if (array[j] > array[j + 1]) {
                //When your if condition is true, you need to swap the two elements, "bubbling" the larger element up toward the end of the array.To do this, declare a temp variable and assign it the value of array[j]. Then assign array[j] the value of array[j + 1]. Finally, assign array[j + 1] the value of temp.
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    //Finally, after your outer loop has finished executing, return the sorted array.
    return array;
}

sortButton.addEventListener("click", sortInputArray);
*/

/*
//-- Selection Sort --//
const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    //buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault()
    event.preventDefault();
    //Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));//Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).

    //Update your sortedValues variable to be the result of calling selectionSort instead of bubbleSort.
    const sortedValues = selectionSort(inputValues);
    //Call your updateUI() function and pass inputValues as the argument.
    //updateUI(inputValues);
    //Then, update your updateUI call to pass sortedValues as the argument.
    updateUI(sortedValues);
}

//Using arrow syntax declare an updateUI function that takes a single array parameter.Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

//Time to implement another sorting algorithm. This time, you'll be implementing a selection sort. Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.
const selectionSort = (array) => {
    //Like a bubble sort, a selection sort needs to iterate through the array. Declare a for loop to do so.
    for (let i = 0; i < array.length; i++) {
        //A selection sort relies on tracking the index of the smallest value in the array. Declare a variable minIndex and set it to i - this ensures that if your current value is the smallest, it will be swapped with itself and not be moved. You will need to be able to reassign the value of minIndex as you iterate through the array.Then, write another for loop, using j as the iterator. This loop needs to start at the index after i and iterate through the rest of the array.
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            //Inside your nested for loop, add a console.log() call to check the values of array, array[j], and array[minIndex] at each iteration.Then write an if statement that checks if the value at j is smaller than the value at minIndex. If it is, set minIndex to j.
            console.log(array, array[j], array[minIndex]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        //After your nested for loop, you've found the smallest value. You need to swap it with your current value.Like you did in your bubble sort, use a temp variable to extract the value at i, then swap the values at i and minIndex.
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    //Finally, after your outer loop has finished, you need to return the array.
    return array;
}

sortButton.addEventListener("click", sortInputArray);
*/

/*
//-- Insertion Sort --//

const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    //buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault()
    event.preventDefault();
    //Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));//Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).

    //As before, update your sortedValues variable to be the result of insertionSort instead of selectionSort.
    const sortedValues = insertionSort(inputValues);
    //Call your updateUI() function and pass inputValues as the argument.
    //updateUI(inputValues);
    //Then, update your updateUI call to pass sortedValues as the argument.
    updateUI(sortedValues);
}

//Using arrow syntax declare an updateUI function that takes a single array parameter.Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

//The last sorting algorithm you will implement is the insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
const insertionSort = (array) => {
    //An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted. With this in mind, create a for loop that starts at the second element in the array - it should still iterate through the rest of the array.
    for (let i = 1; i < array.length; i++) {
        //Declare a currValue variable and assign it the value at i. Then, declare a j variable and assign it i - 1. Your j variable should be re-assignable.
        const currValue = array[i];
        let j = i - 1;
        //For this algorithm, you'll want to use a while loop. This loop needs two conditions:First, it should not run beyond the beginning of the array (accessed with j)...Second, the loop should not run after it finds a value smaller than the current value...To prevent an infinite loop, decrement j inside your loop.
        while (j >= 0 && array[j] > currValue) {
            //On each iteration of your while loop, it is finding an element that is larger than your current value. You need to move that element to the right to make room for your current value.Do so by assigning the value at the j index to the next index.
            array[j + 1] = array[j];
            j--;
        }
        //After your while loop, you need to insert your current value. Remember that your loop ends when j is either out of the array bounds, or when the value at j is less than your current value.Use the assignment operator to insert your current value into the correct index.
        array[j + 1] = currValue;
    }
    //After your for loop has finished, you need to return the array.
    return array;
}

sortButton.addEventListener("click", sortInputArray);
*/

//-- Built-in Sort method --//

const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    //buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault()
    event.preventDefault();
    //Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));//Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).

    //To sort the elements of an array, you can use the built-in method called .sort(). Therefore, you can update the sortedValues variable by assigning it the result of calling .sort() on the inputValues array.
    //const sortedValues = inputValues.sort();
    
    //The Sort button may appear to work correctly when clicked, but this is only because all the values in the array are single digits, and the sorting may not work as expected with more complex values.Change the value and text of the option element that is selected from 1 to 10, and click the Sort button again.Notice how the 10 value is placed at the beginning of the array. This is because the default behavior of .sort() is to convert the values to strings, and sort them alphabetically. And 10 comes before 2 alphabetically.To fix this, you can pass a callback function to the .sort() method. The callback function has two parameters - for yours, use a and b.
    const sortedValues = inputValues.sort((a,b) => {
        //The callback to .sort() should return a number. That number determines how to sort the elements a and b:If the number is negative, sort a before b...If the number is positive, sort b before a...If the number is zero, do not change the order of a and b...Keeping in mind that you want the numbers to be sorted in ascending order (smallest to largest), return a single subtraction calculation using a and b that will correctly sort the numbers with the above logic.
        return a - b;
    });

    //Call your updateUI() function and pass inputValues as the argument.
    //updateUI(inputValues);
    //Then, update your updateUI call to pass sortedValues as the argument.
    updateUI(sortedValues);
}

//Using arrow syntax declare an updateUI function that takes a single array parameter.Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

sortButton.addEventListener("click", sortInputArray);