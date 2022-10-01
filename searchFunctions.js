// linear search function
function linearSearch(arr, value) {
  let counter = 0; //to track position
  const timer = setInterval(() => {
    let box = `box-wrapper-${counter}`;

    if (counter != 0) {
      arrowIcons[counter - 1].style.display = "none"; // hiding arrow
    }

    if (counter == 12) {
      alert("Element Not Found");
      location.reload();
      clearInterval(timer);
    } else {
      arrowIcons[counter].style.display = "block"; // displaying arrow
      var innerTimer = setTimeout(() => {
        document.getElementById(box).style.backgroundColor = failure;
      }, 200);
    }

    if (arr[counter] === value) {
      clearInterval(innerTimer);
      arrowIcons[counter].style.display = "block"; // displaying arrow
      document.getElementById(box).style.backgroundColor = success;
      alert("Element Found At Index " + counter);
      var innerTimer = setTimeout(() => {
        location.reload();
      }, 1000);
      clearInterval(timer);
    }
    counter++;
  }, 1000);
}

// binary search function
function binarySearch(arr, x, start, end) {
  if (start > end) {
    alert("Element not Found");
    location.reload();
    return false;
  }

  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  let previousMid = mid;
  let box = `box-wrapper-${mid}`;

  // displaying arrow and color
  arrowIcons[mid].style.display = "block";
  const timer = setTimeout(() => {
    document.getElementById(box).style.backgroundColor = failure;
  }, 500);

  // Compare mid with given key x
  if (arr[mid] === x) {
    document.getElementById(box).style.backgroundColor = success;
    clearInterval(timer);
    alert("Element Found At Index " + mid);
    var innerTimer = setTimeout(() => {
      location.reload();
    }, 1000);
    //location.reload();
    return true;
  }

  // If element at mid is greater than x, search in the left half of mid
  if (arr[mid] > x) {
    setTimeout(() => {
      arrowIcons[previousMid].style.display = "none"; // hiding arrow
      return binarySearch(arr, x, start, mid - 1);
    }, 1000);
  }
  else {
    // If element at mid is smaller than x, search in the right half of mid
    setTimeout(() => {
      arrowIcons[previousMid].style.display = "none"; // hiding arrow
      return binarySearch(arr, x, mid + 1, end);
    }, 1000);
  }
}

function ternarySearch(arr, x, start, end) {
  if (start > end) {
    alert("Element not Found");
    location.reload();
    return false;
  }

  // Find the middle index
  let mid1 = Math.floor(start + (end - start) / 3);
  let mid2 = Math.floor(end - (end - start) / 3);
  let previousMid1 = mid1;
  let previousMid2 = mid2;
  let box1 = `box-wrapper-${mid1}`;
  let box2 = `box-wrapper-${mid2}`;

  // displaying arrow and color
  arrowIcons[mid1].style.display = "block";
  arrowIcons[mid2].style.display = "block";
  const timer1 = setTimeout(() => {
    document.getElementById(box1).style.backgroundColor = failure;
  }, 500);
  const timer2 = setTimeout(() => {
    document.getElementById(box2).style.backgroundColor = failure;
  }, 500);

  // Compare mid with given key x
  if (arr[mid1] === x) {
    document.getElementById(box1).style.backgroundColor = success;
    clearInterval(timer1);
    alert("Element Found At Index " + mid1);
    var innerTimer = setTimeout(() => {
      location.reload();
    }, 1500);
    //location.reload();
    return true;
  }
  if (arr[mid2] === x) {
    document.getElementById(box2).style.backgroundColor = success;
    clearInterval(timer2);
    alert("Element Found At Index " + mid2);
    var innerTimer = setTimeout(() => {
      location.reload();
    }, 1500);
    //location.reload();
    return true;
  }

  // If element at mid1 is greater than x, search in the left-part of mid1
  if (arr[mid1] > x) {
    setTimeout(() => {
      arrowIcons[previousMid1].style.display = "none"; // hiding arrow
      arrowIcons[previousMid2].style.display = "none"; // hiding arrow
      return ternarySearch(arr, x, start, mid1 - 1);
    }, 1000);
  }
  // If element at mid2 is smaller than x, search in the right-part of mid2
  else if (arr[mid2] < x) {
    setTimeout(() => {
      arrowIcons[previousMid1].style.display = "none"; // hiding arrow
      arrowIcons[previousMid2].style.display = "none"; // hiding arrow
      return ternarySearch(arr, x, mid2 + 1, end);
    }, 1000);
  }
  else {
    // If element at mid1 is smaller and mid2 is greater than x, search in the part between mid1 and mid2
    setTimeout(() => {
      arrowIcons[previousMid1].style.display = "none"; // hiding arrow
      arrowIcons[previousMid2].style.display = "none"; // hiding arrow
      return ternarySearch(arr, x, mid1 + 1, mid2 - 1);
    }, 1000);
  }
}